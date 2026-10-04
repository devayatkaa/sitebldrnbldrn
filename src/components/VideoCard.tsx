'use client';

import type { Project } from '../data/projects';


const youtubeIcon = '/images/youtube.svg';

interface VideoCardProps {
  project: Project;
}

export default function VideoCard({ project }: VideoCardProps) {
  const linkLabel = `Смотреть «${project.title}» на YouTube (в новой вкладке)`;
  const youtubeLabel = project.youtubeLabel ? `${project.youtubeLabel} просмотров` : 'Смотреть на YouTube';

  return (
    <article className="video-card group flex flex-col gap-4">
      <div className="video-card-preview relative aspect-video overflow-hidden rounded-[20px] border border-white/10 bg-white/5 md:rounded-[24px]">
        <video
          src={project.videoUrl}
          poster={project.poster || undefined}
          aria-label={`Превью: ${project.title}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover pointer-events-none"
        />
        {project.youtubeUrl && (
          <a
            href={project.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={linkLabel}
            className="video-youtube-overlay absolute inset-0 flex items-center justify-center bg-black/[0.08]"
          >
            <span className="video-youtube-button flex h-12 w-12 items-center justify-center rounded-full bg-black/40">
              <img src={youtubeIcon} alt="" width={28} height={20} className="h-5 w-7 object-contain" />
            </span>
          </a>
        )}
      </div>
      <div className="video-card-details flex flex-col gap-2.5 px-2 md:px-4">
        <div className="flex items-center gap-3 text-white/40">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 md:text-[11px]">{project.category}</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="video-card-heading flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          {project.youtubeUrl ? (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkLabel}
              className="video-title-link min-w-0"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-white/90 transition-colors group-hover:text-white md:text-2xl">
                {project.title}
              </h3>
            </a>
          ) : (
            <h3 className="font-display text-xl font-semibold tracking-tight text-white/90 transition-colors group-hover:text-white md:text-2xl">
              {project.title}
            </h3>
          )}
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${linkLabel}: ${youtubeLabel}`}
              title={youtubeLabel}
              className="video-youtube-caption inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-sm text-[11px] font-medium tabular-nums text-white/50 transition-colors hover:text-white"
            >
              <img src={youtubeIcon} alt="" width={20} height={15} className="h-4 w-5 object-contain" />
              <span>{youtubeLabel}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
