"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { useFocusTrap, useLockBody } from "@/hooks/useDialog";
import { cn } from "@/lib/cn";
import {
  FREQUENCY_OPTIONS,
  LOCATION_OPTIONS,
  SECTOR_OPTIONS,
  whatsappUrl,
} from "@/lib/site";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  sector: string;
  facilityType: string;
  areaSize: string;
  locationType: string;
  frequency: string;
  message: string;
  kvkk: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  city: "",
  sector: "",
  facilityType: "",
  areaSize: "",
  locationType: "",
  frequency: "",
  message: "",
  kvkk: false,
};

function validateStep(step: number, values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (step === 1) {
    if (values.name.trim().length < 2) {
      errors.name = "Lütfen adınızı ve soyadınızı girin.";
    }
    if (values.company.trim().length < 2) {
      errors.company = "Firma/kurum adını girin.";
    }
    const phone = values.phone.replace(/[\s()-]/g, "");
    if (!/^(\+90|0)?[1-9]\d{9}$/.test(phone)) {
      errors.phone = "Geçerli bir telefon numarası girin.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = "Geçerli bir e-posta adresi girin.";
    }
  }

  if (step === 2) {
    if (values.city.trim().length < 2) {
      errors.city = "Hizmet verilecek şehri belirtin.";
    }
    if (!values.sector) {
      errors.sector = "Lütfen bir sektör seçin.";
    }
    if (values.facilityType.trim().length < 2) {
      errors.facilityType = "Mekân veya tesis türünü belirtin.";
    }
    if (!values.locationType) {
      errors.locationType = "Lokasyon tipini seçin.";
    }
  }

  if (step === 3) {
    if (!values.frequency) {
      errors.frequency = "Hizmet sıklığını seçin.";
    }
    if (values.message.trim().length < 8) {
      errors.message = "Mesajınız en az 8 karakter olmalıdır.";
    }
    if (!values.kvkk) {
      errors.kvkk = "Devam etmek için KVKK onayını işaretleyin.";
    }
  }

  return errors;
}

export function QuotePanel() {
  const { open, closePanel } = useQuotePanel();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const formId = useId();
  const trapRef = useFocusTrap(open);
  useLockBody(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closePanel]);

  useEffect(() => {
    if (!open) {
      setStep(1);
      setValues(INITIAL);
      setErrors({});
    }
  }, [open]);

  const goNext = () => {
    const nextErrors = validateStep(step, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep((current) => Math.min(current + 1, 3));
  };

  const goBack = () => setStep((current) => Math.max(current - 1, 1));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateStep(3, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const sectorLabel =
      SECTOR_OPTIONS.find((item) => item.value === values.sector)?.label ??
      values.sector;
    const frequencyLabel =
      FREQUENCY_OPTIONS.find((item) => item.value === values.frequency)?.label ??
      values.frequency;
    const locationLabel =
      LOCATION_OPTIONS.find((item) => item.value === values.locationType)
        ?.label ?? values.locationType;

    const text = [
      "Merhaba Quick Smart Clean, kurumsal teklif almak istiyorum.",
      "",
      `Ad Soyad: ${values.name.trim()}`,
      `Firma/Kurum: ${values.company.trim()}`,
      `Telefon: ${values.phone.trim()}`,
      `E-posta: ${values.email.trim()}`,
      `Şehir: ${values.city.trim()}`,
      `Sektör: ${sectorLabel}`,
      `Mekân/Tesis: ${values.facilityType.trim()}`,
      `Alan büyüklüğü: ${values.areaSize.trim() || "Belirtilmedi"}`,
      `Lokasyon: ${locationLabel}`,
      `Hizmet sıklığı: ${frequencyLabel}`,
      `Mesaj: ${values.message.trim()}`,
    ].join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex justify-end bg-[rgba(5,5,5,0.65)]"
      role="presentation"
      onClick={closePanel}
    >
      <aside
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-label="Kurumsal teklif formu"
        className="flex h-full w-full max-w-[40rem] flex-col border-l border-line-white bg-bg shadow-[-24px_0_60px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line-white px-5 py-4 md:px-8">
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
              Kurumsal Teklif
            </p>
            <p className="mt-1 text-sm text-muted">
              0{step} / 03
            </p>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-cream"
            aria-label="Paneli kapat"
            onClick={closePanel}
          >
            <X strokeWidth={1.4} />
          </button>
        </div>

        <form
          className="flex flex-1 flex-col overflow-y-auto px-5 py-6 md:px-8"
          onSubmit={onSubmit}
          noValidate
        >
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-serif text-3xl text-cream">Firma ve İletişim</h3>
              <Field id={`${formId}-name`} label="Ad Soyad" error={errors.name}>
                <input
                  id={`${formId}-name`}
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, name: event.target.value }))
                  }
                  className={inputClass(errors.name)}
                />
              </Field>
              <Field id={`${formId}-company`} label="Firma/Kurum Adı" error={errors.company}>
                <input
                  id={`${formId}-company`}
                  autoComplete="organization"
                  value={values.company}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      company: event.target.value,
                    }))
                  }
                  className={inputClass(errors.company)}
                />
              </Field>
              <Field id={`${formId}-phone`} label="Telefon" error={errors.phone}>
                <input
                  id={`${formId}-phone`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, phone: event.target.value }))
                  }
                  className={inputClass(errors.phone)}
                />
              </Field>
              <Field id={`${formId}-email`} label="E-posta" error={errors.email}>
                <input
                  id={`${formId}-email`}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, email: event.target.value }))
                  }
                  className={inputClass(errors.email)}
                />
              </Field>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-serif text-3xl text-cream">Sektör ve Lokasyon</h3>
              <Field id={`${formId}-city`} label="Hizmet Verilecek Şehir" error={errors.city}>
                <input
                  id={`${formId}-city`}
                  autoComplete="address-level2"
                  value={values.city}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, city: event.target.value }))
                  }
                  className={inputClass(errors.city)}
                />
              </Field>
              <Field id={`${formId}-sector`} label="Sektör seçimi" error={errors.sector}>
                <select
                  id={`${formId}-sector`}
                  value={values.sector}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, sector: event.target.value }))
                  }
                  className={cn(inputClass(errors.sector), "form-select")}
                >
                  <option value="">Sektör seçin</option>
                  {SECTOR_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                id={`${formId}-facility`}
                label="Mekân veya tesis türü"
                error={errors.facilityType}
              >
                <input
                  id={`${formId}-facility`}
                  value={values.facilityType}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      facilityType: event.target.value,
                    }))
                  }
                  className={inputClass(errors.facilityType)}
                />
              </Field>
              <Field id={`${formId}-area`} label="Yaklaşık alan büyüklüğü">
                <input
                  id={`${formId}-area`}
                  value={values.areaSize}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      areaSize: event.target.value,
                    }))
                  }
                  className={inputClass()}
                  placeholder="Örn. 450 m²"
                />
              </Field>
              <Field
                id={`${formId}-location`}
                label="Tek lokasyon / Çoklu lokasyon"
                error={errors.locationType}
              >
                <select
                  id={`${formId}-location`}
                  value={values.locationType}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      locationType: event.target.value,
                    }))
                  }
                  className={cn(inputClass(errors.locationType), "form-select")}
                >
                  <option value="">Seçin</option>
                  {LOCATION_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h3 className="font-serif text-3xl text-cream">Hizmet İhtiyacı</h3>
              <Field id={`${formId}-frequency`} label="Hizmet sıklığı" error={errors.frequency}>
                <select
                  id={`${formId}-frequency`}
                  value={values.frequency}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      frequency: event.target.value,
                    }))
                  }
                  className={cn(inputClass(errors.frequency), "form-select")}
                >
                  <option value="">Seçin</option>
                  {FREQUENCY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id={`${formId}-message`} label="Mesaj" error={errors.message}>
                <textarea
                  id={`${formId}-message`}
                  rows={5}
                  value={values.message}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className={cn(inputClass(errors.message), "min-h-32 resize-y")}
                />
              </Field>
              <div>
                <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm text-muted">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[#B7924F]"
                    checked={values.kvkk}
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        kvkk: event.target.checked,
                      }))
                    }
                  />
                  <span>
                    Kişisel verilerimin teklif sürecinde iletişim amacıyla
                    işlenmesini kabul ediyorum.
                  </span>
                </label>
                {errors.kvkk && (
                  <p className="mt-2 text-sm text-gold-light" role="alert">
                    {errors.kvkk}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="mt-auto flex flex-col gap-3 border-t border-line-white pt-6">
            {step < 3 ? (
              <button type="button" className="btn-primary w-full" onClick={goNext}>
                Devam Et
              </button>
            ) : (
              <button type="submit" className="btn-primary w-full">
                Teklif İste
              </button>
            )}
            {step > 1 && (
              <button type="button" className="btn-secondary w-full" onClick={goBack}>
                Geri
              </button>
            )}
          </div>
        </form>
      </aside>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-cream">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-sm text-gold-light" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(error?: string) {
  return cn("form-field", error && "border-gold-light");
}
