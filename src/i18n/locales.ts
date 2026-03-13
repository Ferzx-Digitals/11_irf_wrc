export const supportedLocales = ["en", "es", "fr"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale => {
  return supportedLocales.includes(value as Locale);
};
