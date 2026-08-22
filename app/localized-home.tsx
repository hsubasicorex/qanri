import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "./site-config";
import { copy, localeNames, productLanguages, type Locale } from "./i18n";
import { LanguageMenu } from "./language-menu";

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <div className="localized-site" lang={locale} dir={t.dir}>
    <header className="nav localized-nav">
      <Link className="brand-lockup" href={`/${locale}`} aria-label="QANRI home"><Image src="/qanri/QANRI_Web_Lockup_Transparent.png" width={1141} height={304} alt="QANRI. Know. Move. Prove." priority /></Link>
      <nav><a className="nav-link" href="#overview">{t.nav.overview}</a><a className="nav-link" href="#intelligence">{t.nav.intelligence}</a><a className="nav-link" href="#languages">{t.nav.languages}</a><a className="nav-link" href="#trust">{t.nav.trust}</a><LanguageMenu current={locale}/><a className="app-login" href={APP_URL} target="_blank" rel="noreferrer"><span className="app-login-dot"/>{t.appLogin}<span aria-hidden="true">↗</span></a><Link className="button small demo-nav" href="/demo">{t.walkthrough}</Link></nav>
    </header>
    <main>
      <section className="locale-hero" id="overview">
        <video autoPlay muted loop playsInline preload="metadata" poster="/qanri/editorial/field-operations-hero.png" aria-hidden="true"><source src="/qanri/editorial/envato/qanri-field-operations-hero.mp4" type="video/mp4" /></video>
        <div className="locale-hero-copy"><p className="micro-label">{t.hero.eyebrow}</p><h1>{t.hero.title}</h1><p>{t.hero.body}</p><div className="hero-cta-row"><Link className="button" href="/demo">{t.walkthrough}</Link><a className="quiet-link" href="#operating-model">{t.hero.explore} <span>↗</span></a></div><ul>{t.hero.proof.map(item=><li key={item}>{item}</li>)}</ul></div>
        <div className="locale-hero-visual"><div className="locale-interface"><header><span>QANRI / OPERATING PICTURE</span><b>LIVE MODEL</b></header><div className="locale-interface-body"><div className="interface-brand"><Image src="/qanri/QANRI_Icon_DarkBackground.png" width={240} height={180} alt=""/><span>ASK QANRI</span></div><div className="interface-answer"><small>{locale === "ar" ? "السياق التشغيلي" : locale === "ja" ? "運用コンテキスト" : "OPERATIONAL CONTEXT"}</small><b>{t.ai.managerQuestion}</b><p>{t.ai.managerAnswer}</p><span className="source-chip">4 SOURCES · LIVE</span></div></div></div></div>
      </section>

      <section className="locale-model" id="operating-model"><article><b>KNOW.</b><p>{t.model.know}</p></article><article><b>MOVE.</b><p>{t.model.move}</p></article><article><b>PROVE.</b><p>{t.model.prove}</p></article></section>

      <section className="locale-brand-story"><div className="locale-brand-intro"><p className="micro-label">{t.brand.eyebrow}</p><h2>{t.brand.title}</h2><p>{t.brand.body}</p></div><div className="locale-principles">{t.brand.principles.map(([letter,title,body])=><article key={letter}><span>{letter}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

      <section className="locale-flow"><div><p className="micro-label dark">{t.flow.eyebrow}</p><h2>{t.flow.title}</h2><p>{t.flow.body}</p></div><ol>{t.flow.steps.map(([title, body], index)=><li key={title}><span>{String(index + 1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>

      <section className="locale-ai" id="intelligence"><div className="locale-ai-intro"><p className="micro-label">{t.ai.eyebrow}</p><h2>{t.ai.title}</h2><p>{t.ai.body}</p></div><div className="locale-ai-orbit"><div className="orbit-ring orbit-one"/><div className="orbit-ring orbit-two"/><div className="orbit-core"><Image src="/qanri/QANRI_Icon_DarkBackground.png" width={240} height={180} alt="QANRI"/><b>ASK QANRI</b><span>{localeNames[locale]}</span></div></div><div className="locale-ai-cards"><article><span>01</span><p>{t.ai.fieldRole}</p><h3>“{t.ai.fieldQuestion}”</h3><small>{t.ai.fieldAnswer}</small></article><article><span>02</span><p>{t.ai.managerRole}</p><h3>“{t.ai.managerQuestion}”</h3><small>{t.ai.managerAnswer}</small></article></div><strong>{t.ai.close}</strong></section>

      <section className="locale-languages" id="languages"><div><p className="micro-label dark">{t.language.eyebrow}</p><h2>{t.language.title}</h2><p>{t.language.body}</p></div><div className="language-status-list">{productLanguages.map(item=><article key={item.locale}><b lang={item.locale}>{localeNames[item.locale]}</b><span className={item.status}>{item.status === "available" ? t.language.available : t.language.preparing}</span></article>)}</div><p className="language-note">{t.language.note}</p></section>

      <section className="locale-trust" id="trust"><div><p className="micro-label dark">{t.trust.eyebrow}</p><h2>{t.trust.title}</h2><p>{t.trust.body}</p></div><div>{t.trust.points.map(([title, body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section className="final-section locale-final"><div className="final-brand"><Image src="/qanri/QANRI_Icon_DarkBackground.png" width={240} height={180} alt="QANRI"/><span>QANRI</span></div><p className="micro-label">{t.final.eyebrow}</p><h2>{t.final.title}</h2><p>{t.final.body}</p><Link className="button" href="/demo">{t.final.button}</Link></section>
    </main>
    <footer className="locale-footer"><div className="footer-brand"><Image src="/qanri/QANRI_Web_Lockup_Transparent.png" width={1141} height={304} alt="QANRI"/><p>{t.footer}</p><strong>A COREX ROBOTICS PRODUCT</strong></div><LanguageMenu current={locale}/><p className="fine">QANRI is developed by CoreX Robotics Services LLC.<br/>© {new Date().getFullYear()} CoreX Robotics Services LLC. New Jersey, USA.</p></footer>
  </div>;
}
