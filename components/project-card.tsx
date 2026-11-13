import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/site";

export function ProjectCard({
  project,
  href,
}: {
  project: Project;
  href: string;
}) {
  return (
    <article>
      <Link href={href} className="group block">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#f3f0ea]">
          <Image
            src={project.cover.src}
            alt=""
            fill
            unoptimized
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="mt-5 max-w-3xl">
          <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium uppercase leading-none tracking-[0.04em]">
            {project.title}
          </h3>
          <p className="mt-3 text-base font-light leading-7 text-muted-foreground">
            {project.subtitle}
          </p>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-mark">
            View project
          </p>
        </div>
      </Link>
    </article>
  );
}
