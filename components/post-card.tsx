"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface PostCardProps {
  title: string
  content: string
  author: string | null | undefined
  id: string
  date: any,
  image: string
}

export const PostCard = ({ title, author, content, id, date, image }: PostCardProps) => {
  const router = useRouter();

  return (
    <Card
      className="border-none p-0 bg-transparent cursor-pointer shadow-none hover:bg-secondary/50 transition"
      onClick={() => router.push(`/post/${id}`)}
    >
      <CardHeader className="p-0 rounded-xl overflow-hidden relative w-full h-[200px] sm:h-[240px]">
        <Image
          fill
          objectFit="cover"
          src={image}
          alt=""
        />
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <p className="text-sm font-semibold mb-2 text-purple dark:text-[#CECFD2]">
          {author} • {format(date, "MMMM do, yyyy")}
        </p>
        <div className="flex justify-between">
          <p className="text-lg font-medium pr-8">
            {title}
          </p>
          <ArrowUpRight className="flex-shrink-0" width={24} height={24} />
        </div>
        <p className="mt-3 text-tertiary truncate-2 pr-8">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};