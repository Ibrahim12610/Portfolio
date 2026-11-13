import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/project-article";
import { ProjectDialog } from "@/components/project-dialog";
import { getPersonalProject, site } from "@/content/site";

export function generateStaticParams() {
  return site.personal.map((project) => ({ slug: project.slug }));
}

export default async function PersonalProjectModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPersonalProject(slug);
  if (!project) notFound();

  return (
    <ProjectDialog title={project.title} description={project.subtitle}>
      <ProjectArticle project={project} kind="Personal" />
    </ProjectDialog>
  );
}
