import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Oluwatobiloba Promise Temitope",
  alias: "topsinoty",
  url: "https://topsinoty.com",
  description:
    "Fullstack developer specializing in Next.js, TypeScript, and Python.",
};

export const seoMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} (@${SITE_CONFIG.alias}) | Fullstack Developer`,
    template: `%s | ${SITE_CONFIG.alias}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    SITE_CONFIG.name,
    SITE_CONFIG.alias,
    "Promise",
    "Temitope",
    "Taltech",
    "Lapikud",
    "Java",
    "Python",
    "Fullstack Developer",
    "Next.js Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.alias,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} (@${SITE_CONFIG.alias})`,
    description: SITE_CONFIG.description,
    creator: `@${SITE_CONFIG.alias}`,
  },
  appleWebApp: {
    capable: true,
    title: SITE_CONFIG.name,
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
  },
};
