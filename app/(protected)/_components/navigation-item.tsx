import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  active: boolean;
}

export const NavigationItem = ({ icon: Icon, href, label, active }: NavigationItemProps) => {
  return (
    <Link
      className={cn(
        "group flex items-center gap-x-3 p-2 lg:p-3 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-secondary transition",
        active ? "bg-[#F9FAFB] dark:bg-secondary" : "bg-transparent"
      )}
      href={href}
    >
      <Icon className={cn(
        "md:w-5 md:h-5 lg:w-6 lg:h-6 dark:group-hover:text-[#ECECED] transition",
        active ? "text-[#667085] dark:text-[#ECECED]" : "text-[#667085] dark:text-[#94969C]"
      )} />
      <p className={cn(
        "text-base font-semibold group-hover:text-[#182230] dark:group-hover:text-[#ECECED] transition",
        active ? "text-[#182230] dark:text-[#ECECED]" : "text-[#344054] dark:text-[#CECFD2]"
      )}>{label}</p>
    </Link>
  );
};