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
  const image = project.cardCover ?? project.cover;

  return (
    <article>
      <Link href={href} className="group block">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#141414]">
          {image ? (
            <Image
              src={image.src}
              alt={project.cardCover ? image.alt : ""}
              fill
              unoptimized
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          ) : null}
          <p className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pt-12 pb-4 text-base font-light leading-7 text-[#efece4] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:text-lg sm:leading-8 motion-reduce:transition-none">
            {project.subtitle}
          </p>
        </div>
        <div className="mt-5 max-w-3xl">
          <h3 className="text-[clamp(1.25rem,2vw,1.7rem)] font-medium uppercase leading-none tracking-[0.04em]">
            {project.title}
          </h3>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-mark">
            View project
          </p>
        </div>
      </Link>
    </article>
  );
}
