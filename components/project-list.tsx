import type { Project } from "@/content/site";
import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";

export function ProjectList({
  id,
  label,
  projects,
  hrefBase,
  empty,
}: {
  id: string;
  label: string;
  projects: Project[];
  hrefBase: string;
  empty: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <SectionLabel>{label}</SectionLabel>
      {projects.length === 0 ? (
        <p className="mt-8 max-w-xl text-base font-light leading-7 text-muted-foreground">
          {empty}
        </p>
      ) : (
        <div className="mt-8 flex flex-col gap-16 md:mt-10 md:gap-24">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              href={`${hrefBase}/${project.slug}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
