import Link from "next/link";
import { localeNames, locales, type Locale } from "./i18n";

export function LanguageMenu({ current = "en" }: { current?: Locale }) {
  return <details className="language-menu">
    <summary aria-label="Select language"><span>{current.toUpperCase()}</span><i aria-hidden="true">⌄</i></summary>
    <div className="language-popover">
      {locales.map(locale => <Link key={locale} href={locale === "en" ? "/" : `/${locale}`} hrefLang={locale} lang={locale} aria-current={locale === current ? "page" : undefined}>
        <span>{localeNames[locale]}</span><small>{locale.toUpperCase()}</small>
      </Link>)}
    </div>
  </details>;
}
