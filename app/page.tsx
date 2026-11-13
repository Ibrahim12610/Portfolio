import { Portrait } from "@/components/portrait";
import { ProjectList } from "@/components/project-list";
import { RichText } from "@/components/rich-text";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/content/site";

export default function HomePage() {
  const greeting = site.profile.greeting.split("\n");

  return (
    <main>
      <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-24 md:pt-28">
        <h1 className="max-w-5xl text-[clamp(2.7rem,8vw,5.5rem)] font-light uppercase leading-[0.92] tracking-[0.045em]">
          {greeting.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block">
            {site.profile.name}
            <span className="text-mark">.</span>
          </span>
        </h1>

        <p className="mt-12 text-[clamp(1.8rem,4vw,3rem)] font-light leading-none tracking-[0.12em] uppercase">
          {site.profile.month}
          <span className="ml-4 text-[0.62em] tracking-[0.16em]">
            {site.profile.year}
          </span>
        </p>
        <p className="mt-6 text-[clamp(1.6rem,2.8vw,2.15rem)] font-bold leading-none tracking-[0.01em] text-foreground">
          {site.profile.role}
        </p>
        {site.profile.disciplines.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[clamp(1.08rem,1.8vw,1.4rem)] font-semibold uppercase leading-none tracking-[0.05em] text-foreground">
            {site.profile.disciplines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        <section id="about" className="mt-24 scroll-mt-24 md:mt-32">
          <SectionLabel>About</SectionLabel>
          <div className="mt-8 flex items-center gap-6 sm:gap-12 md:gap-16">
            <div className="flex min-w-0 max-w-xl flex-col gap-5">
              {site.profile.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[17px] font-light leading-8 md:text-lg md:leading-9"
                >
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
            <Portrait src={site.profile.portrait} name={site.profile.name} />
          </div>
        </section>

        <div className="mt-24 md:mt-36">
          <ProjectList
            id="work"
            label="Work"
            projects={site.work}
            hrefBase="/work"
            empty="Work projects will show up here."
          />
        </div>

        <div className="mt-24 mb-8 md:mt-36 md:mb-16">
          <ProjectList
            id="personal"
            label="Personal"
            projects={site.personal}
            hrefBase="/personal"
            empty="Personal projects will show up here."
          />
        </div>
      </div>
    </main>
  );
}
