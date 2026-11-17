import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/project-article";
import { ProjectDialog } from "@/components/project-dialog";
import { getLabProject, site } from "@/content/site";

export function generateStaticParams() {
  return site.lab.map((project) => ({ slug: project.slug }));
}

export default async function LabProjectModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getLabProject(slug);
  if (!project) notFound();

  return (
    <ProjectDialog title={project.title} description={project.subtitle}>
      <ProjectArticle project={project} kind="Lab" />
    </ProjectDialog>
  );
}
