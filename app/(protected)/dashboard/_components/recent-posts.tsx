import { PostCard } from "@/components/post-card";
import { getAllPostsByEmail } from "@/data/post";
import { currentUser } from "@/lib/auth";

export const RecentPosts = async () => {
  const user = await currentUser()

  const posts = await getAllPostsByEmail(user?.email!)

  if (!posts?.length) {
    return (
      <p>You don&apos;t have any posts :(</p>
    )
  }

  return (
    <>
      {posts?.slice(0, 3).map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            image={post.image!}
            title={post.title}
            content={post.content}
            author={post.user?.name}
            date={post.createdAt}
          />
        )
      })}
    </>
  )
}