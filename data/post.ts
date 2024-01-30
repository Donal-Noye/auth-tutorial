import { db } from "@/lib/db";

export const getAllPosts = async () => {
  try {
    const posts = await db.post.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: true
      }
    })

    return posts;
  } catch (e) {
    return null;
  }
}

export const getAllPostsByEmail = async (userEmail: string) => {
  try {
    const posts = await db.post.findMany({
      where: {
        userEmail
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: true
      }
    })

    return posts;
  } catch (e) {
    return null;
  }
}


export const getPostById = async (id: string) => {
  try {
    const post = await db.post.findFirst({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });

    return post;
  } catch (e) {
    return null;
  }
}

