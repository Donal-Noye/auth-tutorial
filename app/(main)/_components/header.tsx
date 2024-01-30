"use client"

import { Logo } from "@/components/logo";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/container";
import { LogIn } from "lucide-react";
import { useCurrentStatus } from "@/hooks/use-current-status";

export const Header = () => {
  const status = useCurrentStatus();

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between h-[80px]">
          <Logo />
          {status === "authenticated" ? (
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
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