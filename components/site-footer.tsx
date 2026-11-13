import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border print:hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {site.profile.name}
          <span className="text-mark">.</span>
        </p>
        <p>
          {site.profile.month} {site.profile.year}
        </p>
      </div>
    </footer>
  );
}
