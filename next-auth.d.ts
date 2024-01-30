import { type DefaultSession } from "next-auth";
import { UserRole, UserTheme } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  theme: UserTheme;
  isTwoFactorEnabled: boolean
  isOAuth: boolean
  image: string
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}