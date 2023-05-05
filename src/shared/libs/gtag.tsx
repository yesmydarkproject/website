import Script from "next/script";

// ************************************
// Analytics ID

export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";
export const GaIdDefined = GA_ID !== "";

export const pageview = (path: string) => {
  window.gtag("config", GA_ID, { page_path: path });
};

// ************************************
// Events

export type ClickEvent = {
  action: "click";
  category: "other";
};
export type Event = ClickEvent & {
  label?: Record<string, string | number | boolean>;
  value?: string;
};

export const event = ({ action, category, label, value = "" }: Event) => {
  if (!GaIdDefined) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};

// ************************************
// Components

export const GoogleAnalyticsScripts = () =>
  GaIdDefined ? (
    <>
      <Script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga" defer strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  ) : null;
