import { Post } from "@/components/post";

const PostPage = async ({ params }: { params: { id: string } }) => {
  return (
    <Post userId={params.id} />
  );
};

export default PostPage;
