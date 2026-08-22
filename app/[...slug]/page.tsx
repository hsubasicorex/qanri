import type { Metadata } from "next";
import { RoutePage } from "../site";
import { pages } from "../site-content";
import { LocalizedHome } from "../localized-home";
import { copy, isLocale, locales } from "../i18n";

export function generateStaticParams(){
  return [...Object.keys(pages).map((key)=>({slug:key.split("/")})),...locales.map(lang=>({slug:[lang]}))];
}
export const dynamicParams = false;

const metadataByRoute:Record<string,{title:string;description:string}>={
  platform:{title:"QANRI Platform | From Work Assigned to Work Proven",description:"See how QANRI connects assignment, offline field execution, evidence, verification, blockers and handover."},
  "platform/evidence-verification":{title:"Field Evidence & Work Verification | QANRI",description:"Turn field completion into a versioned record with evidence, preserved submissions and foreman verification."},
  "platform/offline":{title:"Offline Field Operations | QANRI",description:"Keep field work and evidence durable through unreliable connectivity and synchronize deliberately."},
  "platform/handover":{title:"Project Handover & Closeout | QANRI",description:"Build project closeout from organized checklist items, required documents and finalized evidence."},
  "platform/ask-qanri":{title:"Ask QANRI | Authorization-Aware Operational AI",description:"Ask operational questions through authorization-aware tools and cited QANRI source entities."},
  solutions:{title:"QANRI Solutions | Field Operations for Specialty Contractors",description:"Field execution and operational intelligence for specialty contractors, installation and commissioning teams."},
  "solutions/specialty-contractors":{title:"Specialty Contractor Field Operations | QANRI",description:"Move beyond fragmented chats, spreadsheets and photos without imposing heavyweight enterprise administration."},
  "solutions/elevator":{title:"Elevator Installation & Service Operations | QANRI",description:"Coordinate stages, crews, blockers, evidence, rework and handover across complex elevator field projects."},
  "solutions/industrial-installation":{title:"Industrial Installation Management | QANRI",description:"Assign installation work, capture evidence, understand blockers and verify completion."},
  "solutions/automation-commissioning":{title:"Automation & Commissioning Operations | QANRI",description:"Keep commissioning steps, findings, evidence, corrective work and final verification connected."},
  security:{title:"Security & Reliability | QANRI",description:"How QANRI approaches company isolation, role-aware authorization, private evidence, audit history and offline data."},
  about:{title:"About QANRI | Built From Field Operations",description:"Why QANRI was built and how real installation, service and specialty field work shaped the product."},
};
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{const {slug}=await params;const key=slug.join("/");if(slug.length===1&&isLocale(slug[0])){const lang=slug[0];const t=copy[lang];return{title:{absolute:t.metaTitle},description:t.metaDescription,alternates:{canonical:`/${lang}`,languages:Object.fromEntries(locales.map(code=>[code,`/${code}`]))},openGraph:{title:t.metaTitle,description:t.metaDescription,url:`https://qanri.com/${lang}`,locale:lang,type:"website"}}}const item=metadataByRoute[key];return item?{title:{absolute:item.title},description:item.description,alternates:{canonical:`/${key}`}}:{title:"Page not found | QANRI"}}
export default async function CatchAll({params}:{params:Promise<{slug:string[]}>}){const {slug}=await params;if(slug.length===1&&isLocale(slug[0]))return <LocalizedHome locale={slug[0]}/>;return <RoutePage slug={slug.join("/")}/>}
