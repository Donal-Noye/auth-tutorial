import { getPostById } from "@/data/post";
import Image from "next/image";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

export const Post = async ({ userId }: { userId: string }) => {
  const post = await getPostById(userId);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="w-full h-auto lg:h-[80vh] flex flex-wrap-reverse lg:grid lg:grid-cols-2 mb-16 md:mb-32">
        <div className="relative w-full h-80 lg:h-auto">
          <Image
            fill
            objectFit="cover"
            className="bg-secondary"
            src={post.image!}
            alt=""
          />
        </div>
        <div className="w-full flex flex-col justify-between lg:pl-16 pt-16 lg:pt-24 pb-16">
          <div className="mb-8 lg:mb-0">
            <sup className="text-base text-tertiary mb-2">
              {format(post.createdAt, "MMMM do, yyyy")}
            </sup>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">{post.title}</h1>
            <p className="text-lg text-tertiary mt-6">{post.content}</p>
          </div>
          <div className="flex items-center gap-x-2.5">
            <Avatar className="w-10 w-10 lg:w-12 lg:h-12">
              <AvatarImage className="object-cover" src={post?.user?.image || ""} />
              <AvatarFallback className="bg-sky-500">
                <FaUser className="text-white" />
              </AvatarFallback>
            </Avatar>
            <p className="text-base lg:text-lg font-semibold">{post?.user?.name}</p>
          </div>
        </div>
      </div>
      <div className="md:w-[720px] mx-auto space-y-12">
        <div className="space-y-6">
          <p className="text-lg text-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc
            at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla</p>
          <Separator />
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-primary">Introduction</h3>
          <p className="text-lg text-tertiary">Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse
            morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
            Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
            donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
          <div className="relative h-60 md:h-[380px] rounded-lg overflow-hidden">
            <Image
              fill
              objectFit="cover"
              src={post.image!}
              alt=""
            />
          </div>
        </div>
        <div className="space-y-6 bg-secondary rounded-lg p-8">
          <h3 className="text-3xl font-semibold text-primary">Conclusion</h3>
          <p className="text-base md:text-lg text-tertiary">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
            consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra
            consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh
            tortor commodo cursus.
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat
            dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere
            pharetra odio consequat scelerisque et, nunc tortor.</p>
        </div>
      </div>
    </div>
  );
};