"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/Logo";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import {
  FREQUENCY_OPTIONS,
  ISTANBUL_DISTRICTS,
  QUOTE_SERVICE_OPTIONS,
  SITE,
  TIMING_OPTIONS,
  whatsappUrl,
} from "@/lib/site";

type FormState = {
  service: string;
  district: string;
  areaSize: string;
  frequency: string;
  timing: string;
  name: string;
  phone: string;
  company: string;
  email: string;
  note: string;
  kvkk: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const createInitial = (service = ""): FormState => ({
  service,
  district: "",
  areaSize: "",
  frequency: "",
  timing: "",
  name: "",
  phone: "",
  company: "",
  email: "",
  note: "",
  kvkk: false,
});

const labelOf = (
  options: readonly { value: string; label: string }[],
  value: string,
) => options.find((item) => item.value === value)?.label ?? value;

function validateStep(step: number, values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (step === 1) {
    if (!values.service) errors.service = "Lütfen hizmet türünü seçin.";
    if (values.district.trim().length < 2) {
      errors.district = "Hizmet verilecek ilçeyi yazın.";
    }
    if (!values.frequency) errors.frequency = "Hizmet sıklığını seçin.";
    if (!values.timing) errors.timing = "Hizmet zamanını seçin.";
  }

  if (step === 2) {
    if (values.name.trim().length < 2) {
      errors.name = "Lütfen adınızı girin.";
    }
    const phone = values.phone.replace(/[\s()-]/g, "");
    if (!/^(\+90|0)?5\d{9}$|^(\+90|0)?[2-4]\d{9}$/.test(phone)) {
      errors.phone = "Geçerli bir telefon numarası girin (örn. 0532 000 00 00).";
    }
    if (
      values.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    ) {
      errors.email = "E-posta adresini kontrol edin veya boş bırakın.";
    }
    if (!values.kvkk) {
      errors.kvkk = "Devam etmek için onay kutusunu işaretleyin.";
    }
  }

  return errors;
}

function buildMessage(values: FormState) {
  return [
    "Merhaba Quick Smart Clean, teklif almak istiyorum.",
    "",
    `Hizmet: ${labelOf(QUOTE_SERVICE_OPTIONS, values.service)}`,
    `İlçe: ${values.district.trim()}`,
    `Yaklaşık alan: ${values.areaSize.trim() || "Belirtilmedi"}`,
    `Sıklık: ${labelOf(FREQUENCY_OPTIONS, values.frequency)}`,
    `Zaman: ${labelOf(TIMING_OPTIONS, values.timing)}`,
    "",
    `Ad: ${values.name.trim()}`,
    `Telefon: ${values.phone.trim()}`,
    values.company.trim() ? `Firma: ${values.company.trim()}` : null,
    values.email.trim() ? `E-posta: ${values.email.trim()}` : null,
    values.note.trim() ? `Not: ${values.note.trim()}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

export function QuoteForm({
  initialService = "",
  formLocation,
}: {
  initialService?: string;
  formLocation: "panel" | "page";
}) {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormState>(() => createInitial(initialService));
  const [errors, setErrors] = useState<FormErrors>({});
  const [handoffUrl, setHandoffUrl] = useState<string | null>(null);
  const startedRef = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formId = useId();

  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [step, handoffUrl]);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("quote_form_start", { form_location: formLocation });
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    markStarted();
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const goNext = () => {
    const nextErrors = validateStep(1, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep(2);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step === 1) {
      goNext();
      return;
    }
    const nextErrors = validateStep(2, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url = whatsappUrl(buildMessage(values));
    setHandoffUrl(url);
    trackEvent("quote_whatsapp_handoff", {
      form_location: formLocation,
      service_type: values.service,
      frequency: values.frequency,
      timing: values.timing,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (handoffUrl) {
    return (
      <div className="flex flex-1 flex-col gap-5" aria-live="polite">
        <h3 ref={headingRef} tabIndex={-1} className="font-serif text-3xl text-cream outline-none">
          Son adım: mesajı WhatsApp’ta gönderin
        </h3>
        <p className="text-cream/88">
          Bilgileriniz WhatsApp mesajı olarak hazırlandı. Talebinizin bize
          ulaşması için WhatsApp’ta açılan mesajı <strong className="text-cream">göndermeniz gerekiyor</strong>.
        </p>
        <p className="text-sm text-muted">
          WhatsApp açılmadıysa aşağıdaki bağlantıyı kullanın veya bizi doğrudan arayın.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={handoffUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-quote-handoff
            className="btn-primary w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp’ı Aç
          </a>
          <a href={SITE.phoneTel} className="btn-secondary w-full" data-track-location="quote_form">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            className="min-h-11 text-sm text-muted underline-offset-4 hover:text-cream hover:underline"
            onClick={() => {
              setHandoffUrl(null);
              setStep(2);
            }}
          >
            Bilgileri düzenle
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="flex flex-1 flex-col" onSubmit={onSubmit} noValidate>
      <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
        Adım {step} / 2
      </p>

      {step === 1 && (
        <div className="mt-3 space-y-5">
          <h3 ref={headingRef} tabIndex={-1} className="font-serif text-3xl text-cream outline-none">
            İhtiyacınız
          </h3>
          <Field id={`${formId}-service`} label="Hizmet türü" error={errors.service}>
            <select
              id={`${formId}-service`}
              value={values.service}
              onChange={(event) => update("service", event.target.value)}
              className={cn(inputClass(errors.service), "form-select")}
              aria-invalid={Boolean(errors.service)}
            >
              <option value="">Hizmet seçin</option>
              {QUOTE_SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
          <Field id={`${formId}-district`} label="İlçe (İstanbul)" error={errors.district}>
            <input
              id={`${formId}-district`}
              list={`${formId}-districts`}
              autoComplete="address-level2"
              value={values.district}
              onChange={(event) => update("district", event.target.value)}
              className={inputClass(errors.district)}
              placeholder="Örn. Kadıköy"
              aria-invalid={Boolean(errors.district)}
            />
            <datalist id={`${formId}-districts`}>
              {ISTANBUL_DISTRICTS.map((district) => (
                <option key={district} value={district} />
              ))}
            </datalist>
          </Field>
          <Field id={`${formId}-area`} label="Yaklaşık alan (isteğe bağlı)">
            <input
              id={`${formId}-area`}
              inputMode="numeric"
              value={values.areaSize}
              onChange={(event) => update("areaSize", event.target.value)}
              className={inputClass()}
              placeholder="Örn. 250 m²"
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id={`${formId}-frequency`} label="Sıklık" error={errors.frequency}>
              <select
                id={`${formId}-frequency`}
                value={values.frequency}
                onChange={(event) => update("frequency", event.target.value)}
                className={cn(inputClass(errors.frequency), "form-select")}
                aria-invalid={Boolean(errors.frequency)}
              >
                <option value="">Seçin</option>
                {FREQUENCY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field id={`${formId}-timing`} label="Ne zaman?" error={errors.timing}>
              <select
                id={`${formId}-timing`}
                value={values.timing}
                onChange={(event) => update("timing", event.target.value)}
                className={cn(inputClass(errors.timing), "form-select")}
                aria-invalid={Boolean(errors.timing)}
              >
                <option value="">Seçin</option>
                {TIMING_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-3 space-y-5">
          <h3 ref={headingRef} tabIndex={-1} className="font-serif text-3xl text-cream outline-none">
            İletişim Bilgileri
          </h3>
          <Field id={`${formId}-name`} label="Ad Soyad" error={errors.name}>
            <input
              id={`${formId}-name`}
              autoComplete="name"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              className={inputClass(errors.name)}
              aria-invalid={Boolean(errors.name)}
            />
          </Field>
          <Field id={`${formId}-phone`} label="Telefon" error={errors.phone}>
            <input
              id={`${formId}-phone`}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              className={inputClass(errors.phone)}
              placeholder="05xx xxx xx xx"
              aria-invalid={Boolean(errors.phone)}
            />
          </Field>
          <Field id={`${formId}-company`} label="Firma / işletme (isteğe bağlı)">
            <input
              id={`${formId}-company`}
              autoComplete="organization"
              value={values.company}
              onChange={(event) => update("company", event.target.value)}
              className={inputClass()}
            />
          </Field>
          <Field id={`${formId}-email`} label="E-posta (isteğe bağlı)" error={errors.email}>
            <input
              id={`${formId}-email`}
              type="email"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              className={inputClass(errors.email)}
              aria-invalid={Boolean(errors.email)}
            />
          </Field>
          <Field id={`${formId}-note`} label="Not (isteğe bağlı)">
            <textarea
              id={`${formId}-note`}
              rows={3}
              value={values.note}
              onChange={(event) => update("note", event.target.value)}
              className={cn(inputClass(), "min-h-24 resize-y")}
              placeholder="Uygun çalışma saatleri, alan hakkında kısa bilgi"
            />
          </Field>
          <div>
            <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 accent-[#B7924F]"
                checked={values.kvkk}
                onChange={(event) => update("kvkk", event.target.checked)}
                aria-invalid={Boolean(errors.kvkk)}
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
          <p className="text-sm text-muted">
            Gönder’e bastığınızda bilgileriniz WhatsApp mesajı olarak hazırlanır;
            talebiniz mesajı WhatsApp’ta gönderdiğinizde bize ulaşır.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 border-t border-line-white pt-6">
        <button type="submit" className="btn-primary w-full">
          {step === 1 ? "Devam Et" : "WhatsApp ile Gönder"}
        </button>
        {step === 2 && (
          <button type="button" className="btn-secondary w-full" onClick={() => setStep(1)}>
            Geri
          </button>
        )}
      </div>
    </form>
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
