import { Navigation } from "@/app/(protected)/_components/navigation";
import { UserButton } from "@/components/user-button";
import { Logo } from "@/components/logo";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 md:w-[200px] lg:w-[280px] hidden md:flex flex-col h-screen dark:bg-dark bg-white border-r border-secondary px-4 py-8">
      <Logo />
      <Navigation />
      <div className="flex items-start flex-wrap-reverse gap-y-2 justify-between mt-auto pt-4 border-t dark:border-t-secondary">
        <UserButton />
      </div>
    </aside>
  )
}