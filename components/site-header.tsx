"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const tabs = [
  { href: "/", label: "Work", id: "work" },
  { href: "/resume", label: "Resume", id: "resume" },
  { href: "/contact", label: "Contact", id: "contact" },
] as const;

function currentTab(pathname: string) {
  if (pathname.startsWith("/resume")) return "resume";
  if (pathname.startsWith("/contact")) return "contact";
  return "work";
}

export function SiteHeader() {
  const pathname = usePathname();
  const active = currentTab(pathname);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="text-[13px] font-medium uppercase tracking-[0.18em]"
        >
          {site.profile.name}
          <span className="text-mark">.</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <li key={tab.id}>
                  <Link
                    href={tab.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b pb-0.5 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors hover:border-mark ${
                      isActive ? "border-mark" : "border-transparent"
                    }`}
                  >
                    {tab.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
