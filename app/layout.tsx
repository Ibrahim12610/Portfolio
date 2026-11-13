import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Barlow, Cinzel } from "next/font/google";
import { ModalSlot } from "@/components/modal-slot";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
});

const lol = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-lol-family",
});

const description = site.profile.about[0] ?? site.profile.role;

export const metadata: Metadata = {
  title: {
    default: site.profile.name,
    template: `%s — ${site.profile.name}`,
  },
  description,
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${lol.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="content" className="flex-1">
          {children}
        </div>
        <SiteFooter />
        <ModalSlot>{modal}</ModalSlot>
      </body>
    </html>
  );
}
