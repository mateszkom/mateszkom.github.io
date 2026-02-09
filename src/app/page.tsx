import Bio from '@/components/Bio'
import Hero from '@/components/Hero'
import { PostCard } from '@/components/PostCard'
import { ProjectCard } from '@/components/ProjectCard'
import { getAllPosts, getAllProjects } from '@/lib/content'
export default function Home() {
  const posts = getAllPosts()
  const projects = getAllProjects()

  return (
    <div>
      <div className="space-y-7">
        <Hero />
      </div>

      <div className="mb-10 mt-10 space-y-4 border-t border-accent pt-10 dark:border-accent dark:border-opacity-50">
        <h2 className="pb-2">My recent projects</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.url} {...project} />
          ))}
        </div>
      </div>
      <div className="mb-10 mt-10 space-y-0 border-t border-accent pt-10 dark:border-accent dark:border-opacity-50">
        <h2 className="mb-4">My recent blog posts</h2>
        {posts.map((post, index) => (
          <div key={post.url}>
            <PostCard {...post} />
            {index < posts.length - 1 && (
              <div className="my-2 border-t border-muted border-neutral-700 dark:border dark:border-opacity-50"></div>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-7 border-t border-accent dark:border-accent">
        <Bio />
      </div>
    </div>
  )
}
