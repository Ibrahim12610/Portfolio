import type { Metadata } from "next";
import { CopyEmail } from "@/components/copy-email";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.profile.name}.`,
};

export default function ContactPage() {
  const { profile } = site;
  const details = [
    profile.phone
      ? { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` }
      : null,
    profile.location
      ? { label: "Location", value: profile.location, href: "" }
      : null,
  ].filter((item) => item !== null);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-20">
      <h1 className="text-[clamp(2.7rem,8vw,5.5rem)] font-light uppercase leading-[0.92] tracking-[0.045em]">
        Reaching Me
        <span className="text-mark">.</span>
      </h1>
      <p className="mt-8 max-w-xl text-[17px] font-light leading-8 md:text-lg">
        {profile.contactNote}
      </p>

      {profile.email ? (
        <div className="mt-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Email
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block w-fit text-[clamp(1.5rem,4vw,2.4rem)] font-medium tracking-tight underline-offset-4 hover:text-mark hover:underline"
          >
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>
      ) : (
        <p className="mt-12 text-base font-light text-muted-foreground">
          An email address will show up here.
        </p>
      )}

      {details.length > 0 ? (
        <dl className="mt-12 grid max-w-xl gap-6 sm:grid-cols-2">
          {details.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 text-base font-light">
                {item.href ? <a href={item.href}>{item.value}</a> : item.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      <section className="mt-14 max-w-xl">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
          Elsewhere
          <span className="text-mark">.</span>
        </h2>
        {profile.links.length === 0 ? (
          <p className="mt-6 text-base font-light text-muted-foreground">
            Links you add will be listed here.
          </p>
        ) : (
          <ul className="mt-4 border-t border-border">
            {profile.links.map((link) => (
              <li key={link.label} className="border-b border-border">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-4 text-[13px] font-medium uppercase tracking-[0.16em] hover:text-mark"
                >
                  {link.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
