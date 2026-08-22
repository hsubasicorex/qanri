"use client";
import { useEffect } from "react";
import type { Locale } from "./i18n";
export function DocumentLocale({locale,dir}:{locale:Locale;dir:"ltr"|"rtl"}){useEffect(()=>{const html=document.documentElement;const previousLang=html.lang;const previousDir=html.dir;html.lang=locale;html.dir=dir;return()=>{html.lang=previousLang;html.dir=previousDir}},[locale,dir]);return null}
