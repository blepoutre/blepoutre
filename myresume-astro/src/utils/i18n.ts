export function getLocalized<T>(
  data: Record<"fr" | "en", T>,
  lang: "fr" | "en" = "fr"
): T {
  return data[lang];
}
