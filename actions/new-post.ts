"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { PostSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const newPost = async (
  values: z.infer<typeof PostSchema>
) => {
  const user = await currentUser();
  const validatedFields = PostSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { title, content } = validatedFields.data;

  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  await db.post.create({
    data: {
      title,
      content,
      userEmail: dbUser.email
    },
  });

  return { success: "Post created!" };
};