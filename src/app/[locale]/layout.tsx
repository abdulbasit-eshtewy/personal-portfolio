import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/content";

export const metadata: Metadata = { title: "Portfolio", robots: { index: true, follow: true } };

export function generateStaticParams() { return [{ locale: "en" }, { locale: "ar" }]; }

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") notFound();
  const lang = locale as Locale;
  return <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "arabic" : ""}>{children}</div>;
}