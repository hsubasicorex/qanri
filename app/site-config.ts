export const SITE_STAGE = "pilot" as const;

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://app.qanri.com";

export const APP_LINK_LABEL = "App Login";
