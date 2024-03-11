import DefaultHeader from '@/app/projects/defaultHeader'
import IntervarHeader from '@/app/projects/intervarHeader'
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
    <>
      <Link
        className=" mb-4 flex-wrap  border  sm:w-full md:w-1/2"
        href={project.url}
      >
        <article className="mr-2  ">
          <div className="group   overflow-hidden">{projectContent}</div>
        </article>
      </Link>
    </>
  )
}
