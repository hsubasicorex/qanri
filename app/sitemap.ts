import type { MetadataRoute } from "next";
import { locales } from "./i18n";
export const dynamic = "force-static";
const paths=["","/platform","/platform/evidence-verification","/platform/offline","/platform/handover","/platform/ask-qanri","/solutions","/solutions/specialty-contractors","/solutions/elevator","/solutions/industrial-installation","/solutions/automation-commissioning","/why-qanri","/security","/about","/demo","/privacy","/terms"];
export default function sitemap():MetadataRoute.Sitemap{return [...paths.map(path=>({url:`https://qanri.com${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.7})),...locales.map(lang=>({url:`https://qanri.com/${lang}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:.9,alternates:{languages:Object.fromEntries(locales.map(code=>[code,`https://qanri.com/${code}`]))}}))]}
