import Link from 'next/link'
import Image from 'next/image'

export function ProjectCard(project) {
  return (
    <div className="flex w-full flex-col items-start">
      <div className="rounded-2xl bg-muted p-2">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl object-cover"
          width={480}
          height={320}
        />
      </div>
      <Link
        href={project.url}
        className="flex w-full flex-row justify-between py-2"
      >
        <div className="flex items-center gap-x-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: project.color }}
          />
          <span>{project.title}</span>
          <span className="text-secondary dark:text-secondary md:hidden lg:block">
            - {project.description}
          </span>
        </div>
        <span className="flex items-center gap-x-4">
          <span className="rounded-xl border border-secondary bg-background px-2 text-xs hover:bg-muted dark:bg-muted dark:hover:bg-accent">
            See more
          </span>
        </span>
      </Link>
    </div>
  )
}
