"use client"

import { Navigation } from "@/app/(protected)/_components/navigation";
import { UserButton } from "@/components/user-button";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname]);


  return (
    <div className="flex">
      <Button
        onClick={() => setOpen(!open)}
        variant="ghost"
        size="icon"
      >
        <div className={cn("burger-button", open ? "open" : "")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>
      <div
        className={cn(
          "fixed w-full h-full top-16 left-0 z-[99999] flex flex-col pb-24 px-6 bg-white dark:bg-dark transition-transform duration-300",
          open ?  "translate-x-0" : "translate-x-full"
        )}
      >
        <Navigation />
        <UserButton />
      </div>
    </div>
  );
};
