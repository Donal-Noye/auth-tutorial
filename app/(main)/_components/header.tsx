"use client"

import { Logo } from "@/components/logo";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/container";
import { LogIn } from "lucide-react";
import { useCurrentStatus } from "@/hooks/use-current-status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";

export const Header = () => {
  const status = useCurrentStatus();
  const user = useCurrentUser()

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between h-[80px]">
          <Logo />
          {status === "authenticated" ? (
            <Button asChild>
              <Link className="flex items-center gap-x-2" href="/dashboard">
                Go to Dashboard
                <Avatar className="w-6 h-6">
                  <AvatarImage className="object-cover" src={user?.image || ""} />
                  <AvatarFallback className="bg-sky-500">
                    <FaUser className="text-white" />
                  </AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          ) : (
            <div className="flex gap-x-3">
              <LoginButton asChild>
                <Button variant="outline">
                  <p className="hidden min-[410px]:block">Log in</p>
                  <LogIn className="w-4 h-4 block min-[410px]:hidden" />
                </Button>
              </LoginButton>
              <Button asChild className="hidden min-[410px]:block">
                <Link href="/auth/register">
                  Sign up
                </Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};