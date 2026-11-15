import type { ProjectVideo as ProjectVideoData } from "@/content/site";

export function ProjectVideo({ video }: { video: ProjectVideoData }) {
  return (
    <figure className="mt-2 lg:mt-0">
      <div className="relative aspect-video overflow-hidden bg-[#141414]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.caption ?? "Project video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      {video.caption ? (
        <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {video.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
