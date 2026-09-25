"use client";

import Script from "next/script";
import { useEffect } from "react";
import { AI_SOURCE_HOSTS, GA_MEASUREMENT_ID, trackEvent } from "@/lib/analytics";

const aiReferralScript = `(function(){try{var hosts=${JSON.stringify(AI_SOURCE_HOSTS)};function match(h){h=(h||'').toLowerCase().replace(/^www\\./,'');for(var i=0;i<hosts.length;i++){if(h===hosts[i]||h.slice(-hosts[i].length-1)==='.'+hosts[i])return hosts[i];}return '';}var ref='';try{ref=document.referrer?new URL(document.referrer).hostname:'';}catch(e){}var src=match(ref),signal='referrer';if(!src){src=match(new URLSearchParams(location.search).get('utm_source'));signal='utm_source';}if(src&&!sessionStorage.getItem('qsc_ai_ref')){sessionStorage.setItem('qsc_ai_ref','1');gtag('event','ai_referral',{ai_source:src,ai_signal:signal});}}catch(e){}})();`;

export function Analytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const location = link.closest("[data-track-location]")?.getAttribute(
        "data-track-location",
      );

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_location: location ?? undefined });
      } else if (href.includes("wa.me/") && !link.hasAttribute("data-quote-handoff")) {
        trackEvent("whatsapp_click", { link_location: location ?? undefined });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true});${aiReferralScript}`}
      </Script>
    </>
  );
}
