import { NewPostForm } from "@/components/post/new-post-form";
import { Header } from "@/app/(protected)/_components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Post',
};

const NewPost = () => {
  return (
    <>
      <Header title="Create a new post" />
      <NewPostForm />
    </>
  );
};

export default NewPost;
