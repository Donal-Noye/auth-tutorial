import { NewPostForm } from "@/components/post/new-post-form";
import { Header } from "@/app/(protected)/_components/header";

const NewPost = () => {
  return (
    <>
      <Header title="Create a new post" />
      <NewPostForm />
    </>
  );
};

export default NewPost;
