export type PageContent = { eyebrow?: string; title: string; body: string; sections: { title: string; body: string }[] };

export const pages: Record<string, PageContent> = {
  platform: { eyebrow: "THE QANRI PLATFORM", title: "From work assigned to work proven.", body: "QANRI gives field operations one connected path from planning and assignment to evidence, verification, rework, blockers and handover.", sections: [
    { title: "The operating chain", body: "Template → Project → Stage → Task → Assignment → Field execution → Evidence → Submission → Verification / Rework → Handover → Operational intelligence." },
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
  "platform/ask-qanri": { title: "Ask the operation.", body: "QANRI AI is an interface to the operating record—not a replacement for it.", sections: [
    { title: "Grounded before impressive.", body: "Answers are designed to come from authorized QANRI sources such as tasks, submissions, blockers, photos and daily reports." },
    { title: "Same access boundaries. New interface.", body: "AI does not get unrestricted database access and does not bypass normal QANRI authorization." },
    { title: "Optional by architecture.", body: "If no AI provider is configured, QANRI continues to perform its core operational job normally." },
  ]},
  solutions: { title: "For teams whose work has to move—and be proven.", body: "QANRI is designed for field organizations with multiple jobs, real crews, real blockers and real accountability.", sections: [
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
  security: { title: "Operational truth only works when access boundaries are real.", body: "QANRI is designed so the person, project and company context behind an action matters as much as the action itself.", sections: [
    { title: "Company and project boundaries", body: "Company data is scoped by company identity. Foreman authority is project-grant based. Worker access remains narrow and task-specific." }, { title: "Evidence is private by default", body: "Project evidence is stored privately and accessed through authorized, time-limited application flows." }, { title: "AI stays inside authorization", body: "QANRI AI uses authorization-aware tools and cited operational sources." }
  ]},
  about: { title: "Built from the field, not around it.", body: "QANRI grew from a simple operational problem: crews are working, projects are moving, evidence is arriving and delays are happening—but management still has to chase the truth.", sections: [
    { title: "Why QANRI exists", body: "Messages, spreadsheets, photos and software did not form a continuously trusted operating picture. QANRI connects work, people, evidence, blockers, verification and the next action." }, { title: "The name", body: "QANRI draws from a Quechua conversational expression used in the sense of ‘and you?’—a simple question about accountability, continuity and what comes next." }, { title: "The company", body: "QANRI is developed by CoreX Robotics Services LLC, a New Jersey field engineering and industrial services company." }
  ]},
};
