import { Project } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export function ProjectCard(project: Project) {
  return (
    <Link
      className=" flex flex-row items-start justify-between"
      href={project.url}
    >
      <article className="flex w-full flex-row items-start justify-between">
        <div className="group relative">
          <h3 className="nav-post text-base font-semibold leading-6 hover:underline">
            <span className="absolute inset-0" />
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={project.date}>
            {format(parseISO(project.date), 'LLLL d, yyyy')}
          </time>
        </div>
      </article>
    </Link>
  )
}
