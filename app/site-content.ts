export type PageContent = { eyebrow?: string; title: string; body: string; sections: { title: string; body: string }[] };

export const pages: Record<string, PageContent> = {
  platform: { eyebrow: "OPERATIONAL INTELLIGENCE PLATFORM", title: "From work performed to an operation understood.", body: "QANRI connects execution, evidence, responsibility, review and change history in one operational record the company can trust and act on.", sections: [
    { title: "A system of execution", body: "Planning → Assignment → Field execution → Evidence → Submission → Verification / Rework → Handover." },
    { title: "A system of record", body: "Responsibility, time, evidence, blockers, review decisions and every submission version remain connected to the work." },
    { title: "A system of intelligence", body: "The operating record becomes a reliable foundation for understanding what happened, directing what comes next and improving how work moves." },
    { title: "Make ownership explicit.", body: "A task can have real worker assignments with history. Reassignments do not erase who owned the work before." },
    { title: "The work comes back with proof.", body: "Workers submit a short completion note and required evidence. Submissions are versioned and preserved." },
    { title: "Know why the work did not move.", body: "Connect blocked work to the operational reason instead of letting delays disappear into conversations." },
  ]},
  "platform/evidence-verification": { title: "Done is not a checkbox.", body: "QANRI turns completion into a versioned, reviewable field record: who did the work, what they submitted, where the evidence is and what the foreman decided.", sections: [
    { title: "Evidence belongs to the submission.", body: "Photos are connected to the work they prove. Once evidence belongs to a submission, rework does not move or rewrite the original proof." },
    { title: "Rework without revisionist history.", body: "Submission #1 remains Submission #1. If the work needs correction, the next attempt becomes Submission #2 with its own note and evidence." },
    { title: "Admin sees the truth before approval.", body: "Operations can see pending work as soon as it reaches the server. Verification status remains a separate decision." },
  ]},
  "platform/offline": { title: "The field doesn't wait for Wi-Fi.", body: "QANRI is designed around the reality that basements, shafts, machine rooms, industrial facilities and active jobsites are not reliable network environments.", sections: [
    { title: "Work locally. Synchronize deliberately.", body: "Field actions are committed to durable local storage before the app depends on the network." },
    { title: "Evidence stays with the work.", body: "Pending evidence is designed to survive connectivity loss and app restarts until it can be uploaded and acknowledged." },
    { title: "Reconnect should not become a field task.", body: "Synchronization is designed to resume automatically when the app regains a useful connection." },
  ]},
  "platform/handover": { title: "Finish the project with the proof already organized.", body: "Handover should be the final step of a controlled operation, not a search through email, folders and camera rolls.", sections: [
    { title: "Checklist before closeout pressure.", body: "Track required handover items while the project is still active." },
    { title: "Required documents in one place.", body: "Create document slots for commissioning records, inspection documents, warranty material and other closeout requirements." },
    { title: "Client-safe by design.", body: "The handover package is intentionally separated from private internal management data." },
  ]},
  "platform/ask-qanri": { eyebrow: "YOUR COMPANY'S OPERATIONAL INTELLIGENCE", title: "Every person can ask. The operation can answer.", body: "Ask QANRI places a company-specific AI assistant beside the people doing the work and the people directing it. It combines authorized company knowledge with live operational context so answers are useful where decisions happen.", sections: [
    { title: "Guidance beside the technician.", body: "A person in the field can ask how an assembly should be completed, what an approved procedure requires or what to check when a fault interrupts the work." },
    { title: "An operating assistant beside management.", body: "A manager can ask what is moving, what is delayed, which evidence is missing and who owns the next action without assembling the answer from calls and messages." },
    { title: "Built around company knowledge.", body: "Answers can begin with the procedures, records and operating context authorized for that company, rather than a generic response detached from the work." },
    { title: "Grounded, traceable and permission-aware.", body: "QANRI keeps source context and access boundaries visible, separates recorded fact from interpretation and leaves accountable decisions with people." },
  ]},
  solutions: { title: "For teams that need to complete and document field work.", body: "QANRI is designed for field organizations managing multiple jobs, crews, blockers and review responsibilities.", sections: [
    { title: "High-fit operations", body: "Specialty contractors, installation and commissioning teams, multi-project operations, evidence-heavy work and repeated handover requirements." },
    { title: "A focused execution layer", body: "QANRI is not a BIM engine, accounting suite, CRM, estimating platform or generic inspection-form builder." },
  ]},
  "solutions/specialty-contractors": { title: "Get out of the gap between WhatsApp and enterprise software.", body: "QANRI gives specialty contractors a field operating layer that is structured enough to trust and light enough to use.", sections: [
    { title: "Assign the work.", body: "Ownership should not live in someone's memory." }, { title: "See the proof.", body: "Completion should arrive with evidence, not another phone call." }, { title: "Understand the delay.", body: "A blocked task should tell management what stopped it and who owns the next action." }
  ]},
  "solutions/elevator": { title: "Complex field work deserves a better operating record.", body: "Elevator installation and service combine long timelines, multiple trades, safety-sensitive work, evidence, rework and handover.", sections: [
    { title: "Stage the project.", body: "Organize work across hoistway, rails, electrical, doors, commissioning and handover." }, { title: "Capture what actually happened.", body: "Tie submissions, evidence, blockers and rework to the real field operation." }, { title: "Close with less searching.", body: "Build final documents, photos and checklist completion into the operation." }
  ]},
  "solutions/industrial-installation": { title: "Installation work moves faster when responsibility is visible.", body: "Assign installation work packages, capture evidence, document blockers, verify completion and preserve the handoff between field and operations.", sections: [
    { title: "Built for real installation work.", body: "Machinery installation, industrial service, retrofit, startup, commissioning and corrective work." },
  ]},
  "solutions/automation-commissioning": { title: "Technical work should not disappear into message threads.", body: "Keep commissioning steps, findings, evidence, corrective work and final verification connected to the people and projects that produced them.", sections: [
    { title: "Keep the technical record connected.", body: "Follow work packages, findings, rework and closeout without burying technical teams in administration." },
  ]},
  "why-qanri": { eyebrow: "WHAT QANRI MEANS", title: "The name defines the operating standard.", body: "QANRI is formed from Quality, Accountability, Navigation, Reliability and Intelligence. These five principles define how the platform records work, directs action and turns real operational activity into operational truth.", sections: [
    { title: "Quality", body: "Make the standard of work visible, measurable and ready to improve." },
    { title: "Accountability", body: "Show who did the work, when it happened and which evidence supports it." },
    { title: "Navigation", body: "Turn the operating record into the right person, decision and next action." },
    { title: "Reliability", body: "Preserve field reality with its versions, decisions and history intact." },
    { title: "Intelligence", body: "Transform operational activity into knowledge the company can use." },
    { title: "Built from the field", body: "QANRI was shaped around real operational work, where missing information, unclear responsibility and weak evidence create direct consequences." },
    { title: "Know. Move. Prove.", body: "See the operation as it happened. Direct what comes next. Verify the result through responsibility, time and evidence." },
  ]},
  security: { eyebrow: "THE TRUSTED OPERATIONAL RECORD", title: "Operational intelligence begins with operational truth.", body: "QANRI connects responsibility, time, evidence, review and change history so every important answer can be traced back to the work itself.", sections: [
    { title: "Company and project boundaries", body: "Company data is scoped by company identity. Foreman authority follows explicit project grants. Worker access stays narrow and task-specific." }, { title: "Evidence stays connected", body: "Project evidence remains attached to the submission, responsibility and operating context it supports." }, { title: "History cannot be rewritten", body: "Submissions, corrections and review decisions remain visible as separate operational events." }, { title: "AI stays inside authorization", body: "Operational AI uses authorization-aware tools and traceable sources rather than unrestricted access." }
  ]},
  about: { eyebrow: "QANRI BY COREX ROBOTICS", title: "We build technology around the realities of the work itself.", body: "QANRI is built by CoreX Robotics, combining real operational experience with software, automation and artificial intelligence.", sections: [
    { title: "Why QANRI exists", body: "Work was moving, but operational truth remained scattered across messages, photos, spreadsheets and individual memory. QANRI connects the work, the evidence, the decision and the next action." },
    { title: "The name carries the standard", body: "QANRI stands for Quality, Accountability, Navigation, Reliability and Intelligence: five principles that define how the platform sees work and how a company should be able to direct it." },
    { title: "Built from the field", body: "QANRI was shaped by installation, service, modernization and field coordination work where missing information, unclear responsibility and weak evidence have direct consequences." },
    { title: "The company behind QANRI", body: "QANRI is developed by CoreX Robotics Services LLC, operating publicly as CoreX Robotics from New Jersey, USA." }
  ]},
};
