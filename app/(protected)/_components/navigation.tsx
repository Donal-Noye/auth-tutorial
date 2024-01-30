"use client"

import { NavigationItem } from "@/app/(protected)/_components/navigation-item";
import { BarChart4, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: BarChart4,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="mt-8 flex flex-col gap-y-1">
      {navItems.map(item => (
        <NavigationItem
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={pathname === item.href}
        />
      ))}
    </nav>
  )
}