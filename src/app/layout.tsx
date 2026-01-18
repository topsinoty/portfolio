import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { Background } from "~/components/background-texture";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promise | Topsinoty",
  description: "My Personal portfolio. I like to code :p",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased relative min-h-screen`}
      >
        <Background />
        <Navbar />
        <div id="observerSentinel" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
