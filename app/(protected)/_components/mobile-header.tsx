import { Logo } from "@/components/logo";
import { MobileNavigation } from "@/app/(protected)/_components/mobile-navigation";

export const MobileHeader = () => {
  return (
    <header className="flex md:hidden justify-between items-center fixed top-0 left-0 z-[99999] w-full h-16 px-4 sm:px-6 border-b border-secondary bg-white dark:bg-dark">
      <Logo />
      <MobileNavigation />
    </header>
  )
}