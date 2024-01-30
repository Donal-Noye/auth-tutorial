import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const user = await currentUser();

  try {
    if (!user?.email) {
      return NextResponse.json({ message: "Not Authenticated!" }, { status: 401 });
    }

    const { title, content, image } = await req.json();

    const newPost = await db.post.create({
      data: {
        title,
        content,
        image,
        userEmail: user.email
      }
    });
    return NextResponse.json({ newPost }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}