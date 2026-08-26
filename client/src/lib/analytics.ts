export type AnalyticsEvent = "view_doctor" | "view_procedure" | "view_case" | "click_whatsapp" | "contact_button_click" | "start_consultation" | "submit_consultation" | "upload_photo" | "view_verification" | "view_patient_journey";

const configured = {
  ga4: import.meta.env.VITE_GA4_ID as string | undefined,
  meta: import.meta.env.VITE_META_PIXEL_ID as string | undefined,
  tiktok: import.meta.env.VITE_TIKTOK_PIXEL_ID as string | undefined,
};

export const track = (event: AnalyticsEvent, payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  const detail = { event, ...payload, at: new Date().toISOString() };
  window.dispatchEvent(new CustomEvent("flora:analytics", { detail }));
  if (configured.ga4 && "gtag" in window) (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", event, payload);
  if (import.meta.env.DEV) console.debug("[analytics]", detail);
};

export const getAttribution = () => {
  if (typeof window === "undefined") return { source: "direct", utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", landing_page: "", referrer: "", created_at: new Date().toISOString() };
  const params = new URLSearchParams(window.location.search);
  return { source: params.get("source") || params.get("utm_source") || "direct", utm_source: params.get("utm_source") || "", utm_medium: params.get("utm_medium") || "", utm_campaign: params.get("utm_campaign") || "", utm_content: params.get("utm_content") || "", landing_page: window.location.href, referrer: document.referrer, created_at: new Date().toISOString() };
};
