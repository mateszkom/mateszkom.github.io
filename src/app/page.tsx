import Hero from '@/components/Hero'
import { PostCard } from '@/components/PostCard'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { allPosts, allProjects } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7">
        <Hero />
      </div>
      <div className="mb-10 mt-10 space-y-4 border-t border-gray-200  pt-10 dark:border-gray-700 dark:border-opacity-50">
        <h3>Latest blog posts</h3>

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <div className="mb-10 mt-10 space-y-4 border-t border-gray-200 pt-10 dark:border-gray-700 dark:border-opacity-50">
        <h3>Latest projects</h3>
        <div className="mt-10 flex flex-wrap    ">
          {projects.map((post, idx) => (
            <ProjectCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
