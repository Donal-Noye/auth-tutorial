import { useSession } from "next-auth/react";

export const useCurrentStatus = () => {
  const { status } = useSession()

  return status
}