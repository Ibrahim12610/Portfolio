import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/project-article";
import { getPersonalProject, site } from "@/content/site";

export function generateStaticParams() {
  return site.personal.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPersonalProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.subtitle };
}

export default async function PersonalProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPersonalProject(slug);
  if (!project) notFound();

  return (
    <main>
      <ProjectArticle project={project} kind="Personal" showBackLink />
    </main>
  );
}
