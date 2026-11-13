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
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
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
