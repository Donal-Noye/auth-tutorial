import { Header } from "@/app/(protected)/_components/header";
import { Heading } from "@/app/(protected)/dashboard/_components/heading";
import { CreateButton } from "@/app/(protected)/dashboard/_components/create-button";
import { PencilLine } from "lucide-react";
import { RecentPosts } from "@/app/(protected)/dashboard/_components/recent-posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
};

const DashboardPage = () => {
  return (
    <>
      <Header title="Dashboard" />
      <div className="space-y-8">
        <section className="flex items-start flex-col gap-x-6">
          <Heading title="Start creating content" />
          <CreateButton
            title="Create a new post"
            descr="Dive into the editor and start creating"
            icon={PencilLine}
            href="/new-post"
          />
        </section>
        <section className="flex items-start flex-col gap-x-6">
          <Heading title="Recent posts" />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecentPosts />
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardPage;
