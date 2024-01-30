import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CreateButtonProps {
  icon: LucideIcon;
  title: string;
  descr: string;
  href: string;
}

export const CreateButton = ({ title, descr, href, icon: Icon }: CreateButtonProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-3 p-4 md:p-5 w-full sm:w-auto border dark:border-secondary cursor-pointer rounded-[10px] shadow-sm hover:opacity-70 transition"
      role="button"
    >
      <div className="border dark:border-secondary rounded-[10px] p-2.5 md:p-3">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#344054] dark:text-[#CECFD2]" />
      </div>
      <div className="">
        <p className="font-semibold text-[#344054] dark:text-[#CECFD2]">{title}</p>
        <p className="text-sm text-tertiary">{descr}</p>
      </div>
    </Link>
  );
};