import DefaultHeader from '@/app/posts/defaultHeader'
import IntervarHeader from '@/app/posts/intervarHeader'
import { Project } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export function ProjectCard(project: Project) {
  let projectContent = null
  if (project.title === 'Intervar') {
    projectContent = <IntervarHeader />
  } else {
    projectContent = <DefaultHeader />
  }
  return (
    <Link
      className=" mb-4 mr-4 flex h-36 flex-wrap items-start space-x-4 border sm:w-full md:w-1/3"
      href={project.url}
    >
      <article className="flex w-full  ">
        <div className="group relative">{projectContent}</div>
      </article>
    </Link>
  )
}
