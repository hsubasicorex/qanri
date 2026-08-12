"use client";
import { useState } from "react";

const steps=[
  {id:"assign",label:"Assign",title:"Put real work in motion.",body:"Foremen assign tasks to real people. Ownership is explicit, and reassignment never erases the history.",screen:"TODAY",task:"Rail connection check",meta:"HOISTWAY · LEVEL 1",status:"ASSIGNED"},
  {id:"execute",label:"Execute",title:"Make the field interaction small.",body:"Workers see what is theirs, capture required evidence, add a short note and move on.",screen:"TASK DETAIL",task:"Rail connection check",meta:"1 PHOTO REQUIRED · HIGH PRIORITY",status:"START WORK"},
  {id:"offline",label:"Synchronize",title:"Keep moving through connection loss.",body:"Pending work and evidence remain durable and synchronize when a useful connection returns.",screen:"SUBMISSION STATUS",task:"Saved on this device",meta:"EVIDENCE QUEUED SECURELY",status:"PENDING SYNC"},
  {id:"verify",label:"Verify",title:"Approve—or return the work.",body:"Verification is a decision, not an overwrite. Rework creates a new version while the original remains intact.",screen:"AWAITING REVIEW",task:"Rail connection check",meta:"SUBMISSION #1 · 1 PHOTO",status:"REVIEW"},
  {id:"understand",label:"Understand",title:"See the cause, owner and next action.",body:"Blocked work stays connected to the reason it stopped and the person who must act next.",screen:"OPERATING PICTURE",task:"2 blockers need action",meta:"3 SUBMISSIONS · 2 REVIEWS",status:"OPEN PULSE"},
];

export function ProductTour(){const [active,setActive]=useState(0);const s=steps[active];return <div className="tour-shell">
  <div className="tour-tabs" role="tablist" aria-label="QANRI product workflow">{steps.map((x,i)=><button key={x.id} role="tab" aria-selected={i===active} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,"0")}</span>{x.label}</button>)}</div>
  <div className="tour-content">
    <div className="tour-narrative"><p className="tour-overline">{s.screen}</p><h3>{s.title}</h3><p>{s.body}</p><div className="tour-progress"><span style={{width:`${(active+1)*20}%`}}/></div></div>
    <div className="phone-frame" aria-label={`${s.label} interface concept`}><div className="phone-notch"/><div className="phone-status"><span>9:41</span><span>● ● ▰</span></div><div className="phone-head"><span>Q</span><small>{s.screen}</small><i>•••</i></div><div className="phone-greeting">Good morning, Alex<small>Here is what needs attention.</small></div><div className="phone-card"><div><small>{s.meta}</small><strong>{s.task}</strong></div><span>{s.status}</span></div><div className="phone-evidence"><div className="photo-placeholder"><i/><i/><i/></div><div><small>FIELD RECORD</small><b>Evidence stays with the work.</b><p>Person, time, note and verification remain connected.</p></div></div><button>{s.status}</button><div className="phone-nav"><span>Today</span><span>Tasks</span><b>+</b><span>Alerts</span><span>Profile</span></div></div>
    <div className="tour-proof"><span>CONCEPTUAL PRODUCT WALKTHROUGH</span><p>Built from the verified QANRI operating model. Not presented as a live customer deployment.</p></div>
  </div>
</div>}
