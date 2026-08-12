"use client";
import { FormEvent, useState } from "react";
import { Shell } from "../site";

export default function Demo(){
  const [state,setState]=useState<"idle"|"sending"|"done"|"error">("idle");
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const endpoint=process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT?.trim();if(!endpoint){setState("error");return}setState("sending");const form=new FormData(e.currentTarget);try{const r=await fetch(endpoint,{method:"POST",body:form});setState(r.ok?"done":"error")}catch{setState("error")}}
  return <Shell><main>
    <section className="page-hero demo-head"><p className="eyebrow">PRIVATE DEMO / PILOT</p><h1>See your own operation in the flow.</h1><p className="lede">Tell us how your field work runs today. We will show you where QANRI fits—and where it deliberately does not.</p><div className="demo-expect"><span><b>01</b>Map your current field workflow</span><span><b>02</b>Walk through assignment-to-proof</span><span><b>03</b>Decide whether a pilot is a fit</span></div></section>
    <section className="form-wrap"><div className="form-intro"><p className="micro-label dark">QUALIFIED PILOT CONVERSATION</p><h2>Help us understand the operation before the call.</h2><p>QANRI is currently presented through private demos and pilot conversations. No pricing or implementation commitment is implied by this request.</p></div>{state==="done"?<div className="success"><h2>Request received.</h2><p>We will review your operation and follow up with the right next step. No generic sales sequence.</p></div>:<form onSubmit={submit}>
      <label>First name<input name="firstName" autoComplete="given-name" required/></label><label>Last name<input name="lastName" autoComplete="family-name" required/></label><label>Work email<input type="email" name="email" autoComplete="email" required/></label><label>Company<input name="company" autoComplete="organization" required/></label><label>Role<input name="role" autoComplete="organization-title" required/></label>
      <label>Field team size<select name="teamSize" required defaultValue=""><option value="" disabled>Select</option>{["1-4","5-15","16-40","41-100","101-250","250+"].map(x=><option key={x}>{x}</option>)}</select></label>
      <label>Primary type of work<select name="workType" required defaultValue=""><option value="" disabled>Select</option>{["Elevator installation / service","Industrial installation","Electrical / mechanical contracting","Automation / commissioning","Field service","Other specialty contracting","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
      <label className="wide">What are you trying to get under control?<textarea name="challenge" rows={5}/></label><button className="button wide" disabled={state==="sending"}>{state==="sending"?"Sending…":"Request a private demo"}</button>{state==="error"&&<p className="error wide"><b>Demo requests are not open yet.</b> Your information has not been sent or stored. The verified pilot contact channel will be connected before public launch.</p>}<p className="fine wide">By submitting this form, you agree that QANRI may contact you about your request. We do not sell your contact information.</p>
    </form>}</section>
  </main></Shell>
}
