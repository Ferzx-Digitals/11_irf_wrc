import { homeContentEn } from "@/content/home/en";
import { homeContentEs } from "@/content/home/es";
import { homeContentFr } from "@/content/home/fr";
import { HomeContent } from "@/content/home/types";
import { Locale } from "@/i18n/locales";

const byLocale: Record<Locale, HomeContent> = {
  en: homeContentEn,
  es: homeContentEs,
  fr: homeContentFr,
};

export const getHomeContent = (locale: Locale): HomeContent => {
  return byLocale[locale] ?? byLocale.en;
};
