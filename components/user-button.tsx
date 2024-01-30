"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { ExitIcon } from "@radix-ui/react-icons";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <>
      <div className="flex items-center gap-x-2">
        <Avatar>
          <AvatarImage className="object-cover" src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">{user?.name}</p>
          <p className="text-xs text-tertiary">{user?.email}</p>
        </div>
      </div>
      <LogoutButton>
        <ExitIcon className="h-5 w-5 text-tertiary group-hover:text-rose-500 transition" />
      </LogoutButton>
    </>
  );
};