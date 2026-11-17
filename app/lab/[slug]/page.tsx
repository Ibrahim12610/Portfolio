import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/project-article";
import { getLabProject, site } from "@/content/site";

export function generateStaticParams() {
  return site.lab.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getLabProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.subtitle };
}

export default async function LabProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getLabProject(slug);
  if (!project) notFound();

  return (
    <main>
      <ProjectArticle project={project} kind="Lab" showBackLink />
    </main>
  );
}
