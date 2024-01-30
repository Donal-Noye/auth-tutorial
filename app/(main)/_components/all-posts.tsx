import { getAllPosts } from "@/data/post";
import { PostCard } from "@/components/post-card";
import { Separator } from "@/components/ui/separator";

export const AllPosts = async () => {
  const posts = await getAllPosts()

  if (!posts) {
    return <div>Loading...</div>
  }

  return (
    <div className="py-16 md:py-24">
      <h5 className="text-2xl font-semibold">All blog posts</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.user?.name}
            id={post.id}
            date={post.createdAt}
            image={post.image!}
          />
        ))}
      </div>
      <Separator />
    </div>
  )
}