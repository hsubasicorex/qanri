import type { MetadataRoute } from "next";
export const dynamic = "force-static";
const paths=["","/platform","/platform/evidence-verification","/platform/offline","/platform/handover","/platform/ask-qanri","/solutions","/solutions/specialty-contractors","/solutions/elevator","/solutions/industrial-installation","/solutions/automation-commissioning","/security","/about","/demo","/privacy","/terms"];
export default function sitemap():MetadataRoute.Sitemap{return paths.map(path=>({url:`https://qanri.com${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.7}))}
