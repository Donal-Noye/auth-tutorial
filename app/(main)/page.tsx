import { Hero } from "@/app/(main)/_components/hero";
import { FeaturedPostCard } from "@/app/(main)/_components/featured-post-card";
import { AllPosts } from "@/app/(main)/_components/all-posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPostCard />
      <AllPosts />
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Let’s get started on something great</h3>
        <Button asChild size="lg">
          <Link href="/auth/register">
            Get started
          </Link>
        </Button>
      </div>
    </>
  );
}
