import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getPostById } from "@/data/post";
import { format } from "date-fns";
import { BeatLoader } from "react-spinners";

export const FeaturedPostCard = async () => {
  const post = await getPostById("clrytkdxe0003gj0v1ynqdppt");

  return (
    <Link
      href="/post/clrytkdxe0003gj0v1ynqdppt"
      className="group flex flex-col justify-end h-auto sm:h-96 lg:h-[720px] relative overflow-hidden sm:rounded-2xl"
    >
      <Image
        className="hidden sm:block w-full h-full brightness-50 group-hover:brightness-[.45] transition"
        fill
        loading="lazy"
        objectFit="cover"
        src={post?.image!}
        alt=""
      />
      <Image
        className="mb-5 block sm:hidden w-full h-full rounded-2xl brightness-50 group-hover:brightness-[.45] transition object-cover"
        width={0}
        loading="lazy"
        height={240}
        sizes="100vw"
        style={{ width: "100%", height: "240px" }}
        src={post?.image!}
        alt=""
      />
      <div className="relative z-10 sm:p-4 md:p-8">
        <div className="flex justify-between">
          <div>
            <h5 className="text-white text-xl md:text-2xl font-semibold mb-2 pr-6">{post?.title}</h5>
            <p className="text-tertiary sm:text-white truncate-2">{post?.content}</p>
          </div>
          <ArrowUpRight className="flex-shrink-0" width={24} height={24} />
        </div>
        <div className="flex gap-x-8 mt-8">
          <div className="flex flex-col gap-y-2">
            <p className="text-white hidden sm:block text-sm font-semibold">Written by</p>
            <div className="flex items-center gap-x-2.5">
              <Avatar>
                <AvatarImage className="object-cover" src={post?.user?.image || ""} />
                <AvatarFallback className="bg-sky-500">
                  <FaUser className="text-white" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white text-sm font-semibold">{post?.user?.name}</p>
                <p className="block sm:hidden text-sm text-tertiary">{format(post?.createdAt!, "MMMM do, yyyy")}</p>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-4">
            <p className="text-white text-sm font-semibold">Published on</p>
            <p className="text-white font-semibold">{format(post?.createdAt!, "MMMM do, yyyy")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};