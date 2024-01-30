import { Sidebar } from "@/app/(protected)/_components/sidebar";
import { MobileHeader } from "@/app/(protected)/_components/mobile-header";

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full">
      <Sidebar />
      <MobileHeader />
      <main className="w-full md:pl-[200px] lg:pl-[280px] bg-white dark:bg-dark">
        <div className="pt-24 md:pt-8 pb-12 px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ProtectedLayout;
