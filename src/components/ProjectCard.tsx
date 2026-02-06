import Image from 'next/image'
import Link from 'next/link'

export function ProjectCard(project) {
  const year = project.date?.slice(0, 4)

  return (
    <Link
      href={project.url}
      className="group w-full rounded-2xl border border-secondary/30 bg-gradient-to-br from-neutral-900 to-neutral-950 px-4 pt-4 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)] ring-1 ring-white/10 backdrop-blur-md"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
            style={{ backgroundColor: project.color, color: '#ffffff' }}
          >
            {project.category}
          </span>
          <span className="inline-flex items-center rounded-full border border-secondary px-3 py-1 text-sm text-secondary">
            {year}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-primary group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-secondary">{project.description}</p>
        </div>
        <div className="overflow-hidden rounded-t-2xl bg-muted">
          <div className="relative aspect-[5/2]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
