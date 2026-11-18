import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/site";
import { ProjectVideo } from "@/components/project-video";
import { RichText } from "@/components/rich-text";

const backClass =
  "inline-flex items-center text-[11px] font-medium uppercase tracking-[0.18em] hover:text-mark";

const facts = (project: Project) =>
  [
    ["Role", project.role],
    ["Engine", project.engine],
    ["Platform", project.platform],
    ["Development Time", project.developmentTime],
    ["Team Size", project.teamSize],
  ].filter(([, value]) => value.trim().length > 0);

export function ProjectArticle({
  project,
  kind,
  showBackLink = false,
}: {
  project: Project;
  kind: "Work" | "Lab";
  showBackLink?: boolean;
}) {
  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
      {showBackLink ? (
        <Link href="/" className={backClass}>
          ← All work
        </Link>
      ) : null}

      <p
        className={`text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground ${showBackLink ? "mt-10" : ""}`}
      >
        {kind}
      </p>
      <h1 className="mt-3 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] font-medium uppercase leading-[0.92] tracking-[0.03em]">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl text-xl font-light leading-8 text-muted-foreground sm:text-[1.35rem] sm:leading-9">
        {project.subtitle}
      </p>

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 md:grid-cols-5">
        {facts(project).map(([label, value]) => (
          <div key={label}>
            <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {label}
            </dt>
            <dd className="mt-2 text-sm font-medium leading-5">{value}</dd>
          </div>
        ))}
      </dl>

      {project.links && project.links.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-mark hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {project.summary ? (
        <section className="mt-12 max-w-2xl">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
            Summary
            <span className="text-mark">.</span>
          </h2>
          <p className="mt-4 text-[17px] font-light leading-8">
            <RichText text={project.summary} />
          </p>
        </section>
      ) : null}

      {project.trailers && project.trailers.length > 0 ? (
        <div
          className={`mt-12 grid gap-8 ${
            project.trailers.length > 1
              ? "max-w-6xl lg:grid-cols-2"
              : "max-w-4xl"
          }`}
        >
          {project.trailers.map((video) => (
            <ProjectVideo key={video.youtubeId} video={video} />
          ))}
        </div>
      ) : project.trailer ? (
        <div className="mt-12 max-w-4xl">
          <ProjectVideo video={project.trailer} />
        </div>
      ) : null}

      {project.cover ? (
        <figure className="mt-12">
          <div
            className={`relative overflow-hidden bg-[#141414] ${
              project.cover.fit === "contain"
                ? "aspect-[21/9]"
                : "aspect-[16/9]"
            }`}
          >
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              unoptimized
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className={
                project.cover.fit === "contain" ? "object-contain" : "object-cover"
              }
            />
          </div>
          {project.cover.caption ? (
            <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {project.cover.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {project.designGoals.length > 0 ? (
        <section className="mt-14 max-w-3xl">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
            Design goals
            <span className="text-mark">.</span>
          </h2>
          <ol className="mt-6">
            {project.designGoals.map((goal, index) => (
              <li
                key={goal}
                className="grid grid-cols-[auto_1fr] gap-4 border-t border-border py-4 text-[17px] font-light leading-7"
              >
                <span className="pt-1 text-[11px] font-medium tracking-[0.16em] text-mark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <RichText text={goal} />
                </span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <div className="mt-4 flex flex-col gap-14 pb-16">
        {project.sections.map((section) => {
          const imageBelow =
            Boolean(section.image) &&
            (section.imageLayout === "below" || Boolean(section.video));
          const imageAside =
            Boolean(section.image) && !imageBelow && !section.video;
          const hasSideMedia = Boolean(section.video) || imageAside;

          return (
            <section
              key={section.heading}
              className={
                hasSideMedia || imageBelow ? "max-w-6xl" : "max-w-3xl"
              }
            >
              <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
                {section.heading}
                <span className="text-mark">.</span>
              </h2>
              <div
                className={
                  hasSideMedia
                    ? "mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start"
                    : "mt-4"
                }
              >
                <div className={hasSideMedia ? undefined : "max-w-3xl"}>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-[17px] font-light leading-8 first:mt-0"
                    >
                      <RichText text={paragraph} />
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[auto_1fr] gap-3 text-[17px] font-light leading-7"
                        >
                          <span
                            className="mt-2.5 size-1.5 bg-mark"
                            aria-hidden
                          />
                          <span>
                            <RichText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                {section.video ? <ProjectVideo video={section.video} /> : null}
                {imageAside && section.image ? (
                  <figure className="mt-2 lg:mt-0">
                    <div className="overflow-hidden bg-[#141414]">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={958}
                        height={800}
                        unoptimized
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    {section.image.caption ? (
                      <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        {section.image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </div>
              {imageBelow && section.image ? (
                <figure className="mt-8">
                  <div className="overflow-hidden bg-white p-4 sm:p-6">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={2104}
                      height={248}
                      unoptimized
                      sizes="(min-width: 1152px) 1088px, 100vw"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  {section.image.caption ? (
                    <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {section.image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
            </section>
          );
        })}
      </div>
    </article>
  );
}
