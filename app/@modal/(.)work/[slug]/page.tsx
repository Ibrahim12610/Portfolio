import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/project-article";
import { ProjectDialog } from "@/components/project-dialog";
import { getWorkProject, site } from "@/content/site";

export function generateStaticParams() {
  return site.work.map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  return (
    <ProjectDialog title={project.title} description={project.subtitle}>
      <ProjectArticle project={project} kind="Work" />
    </ProjectDialog>
  );
}
