import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${site.profile.name}.`,
};

export default function ResumePage() {
  const { resume, profile } = site;
  const contactBits = [profile.email, profile.phone, profile.location].filter(
    (item) => item.trim().length > 0,
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        Resume
      </p>
      <h1 className="mt-3 text-[clamp(2.6rem,6vw,4.5rem)] font-light uppercase leading-[0.92] tracking-[0.04em]">
        {profile.name}
        <span className="text-mark">.</span>
      </h1>
      <p className="mt-5 font-display text-[clamp(1.45rem,2.4vw,1.9rem)] font-bold leading-none text-foreground">
        {profile.role}
      </p>
      {contactBits.length > 0 ? (
        <p className="mt-3 text-sm font-light">{contactBits.join("  ·  ")}</p>
      ) : null}
      <p className="mt-8 max-w-2xl text-[17px] font-light leading-8">
        {resume.summary}
      </p>
      {resume.pdf ? (
        <Button
          nativeButton={false}
          render={<Link href={resume.pdf} />}
          variant="outline"
          className="mt-6 h-10 rounded-none px-4 text-[11px] font-medium uppercase tracking-[0.18em]"
        >
          Download PDF
        </Button>
      ) : null}

      <section className="mt-16">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
          Experience
          <span className="text-mark">.</span>
        </h2>
        {resume.experience.length === 0 ? (
          <p className="mt-6 text-base font-light text-muted-foreground">
            Roles you add will be listed here.
          </p>
        ) : (
          <div className="mt-4">
            {resume.experience.map((role) => (
              <article
                key={`${role.organization}-${role.dates}`}
                className="grid gap-3 border-t border-border py-8 md:grid-cols-[11rem_1fr] md:gap-10"
              >
                <p className="text-sm font-light text-muted-foreground">
                  {role.dates}
                </p>
                <div>
                  <h3 className="text-lg font-medium leading-snug">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm font-light text-muted-foreground">
                    {role.organization}
                    {role.location ? ` — ${role.location}` : ""}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="grid grid-cols-[auto_1fr] gap-3 text-[15px] font-light leading-7"
                      >
                        <span className="mt-2.5 size-1.5 bg-mark" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
          Education
          <span className="text-mark">.</span>
        </h2>
        {resume.education.length === 0 ? (
          <p className="mt-6 text-base font-light text-muted-foreground">
            Schools you add will be listed here.
          </p>
        ) : (
          <div className="mt-4">
            {resume.education.map((school) => (
              <article
                key={`${school.school}-${school.dates}`}
                className="grid gap-3 border-t border-border py-8 md:grid-cols-[11rem_1fr] md:gap-10"
              >
                <p className="text-sm font-light text-muted-foreground">
                  {school.dates}
                </p>
                <div>
                  <h3 className="text-lg font-medium">{school.credential}</h3>
                  <p className="mt-1 text-sm font-light text-muted-foreground">
                    {school.school}
                  </p>
                  {school.detail ? (
                    <p className="mt-3 max-w-xl text-[15px] font-light leading-7">
                      {school.detail}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="mt-12 grid gap-12 border-t border-border pt-10 md:grid-cols-2">
        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
            Skills
            <span className="text-mark">.</span>
          </h2>
          {resume.skills.length === 0 ? (
            <p className="mt-6 text-base font-light text-muted-foreground">
              Skill groups you add will be listed here.
            </p>
          ) : (
            <dl className="mt-6 space-y-5">
              {resume.skills.map((group) => (
                <div key={group.group}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {group.group}
                  </dt>
                  <dd className="mt-2 text-[15px] font-light leading-7">
                    {group.items}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </section>
        <section>
          <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
            Awards
            <span className="text-mark">.</span>
          </h2>
          {resume.awards.length === 0 ? (
            <p className="mt-6 text-base font-light text-muted-foreground">
              Awards and talks you add will be listed here.
            </p>
          ) : (
            <ul className="mt-6 space-y-3">
              {resume.awards.map((award) => (
                <li
                  key={award}
                  className="border-t border-border pt-3 text-[15px] font-light leading-7"
                >
                  {award}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
