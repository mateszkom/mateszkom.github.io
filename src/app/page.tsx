import Hero from '@/components/Hero'
import { PostCard } from '@/components/PostCard'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { allPosts, allProjects } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Bio from '@/components/Bio'
export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7 ">
        <Hero />
      </div>

      <div className="mb-10 mt-10 space-y-4 border-t border-accent pt-10 dark:border-accent dark:border-opacity-50">
        <h2 className="pb-2">My recent projects</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((post, idx) => (
            <ProjectCard key={idx} {...post} />
          ))}
        </div>
      </div>
      <div className="mb-10 mt-10 space-y-4 border-t border-accent  pt-10 dark:border-accent dark:border-opacity-50">
        <h2 className="pb-2">My recent blog posts</h2>
        {posts.map((post, idx) => (
          <>
            <PostCard key={idx} {...post} />
            <div className=" border-t border-muted  dark:border-muted dark:border-opacity-50"></div>
          </>
        ))}
      </div>
      <div className="space-y-7  border-t border-accent   dark:border-accent">
        <Bio />
      </div>
    </div>
  )
}
