import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-2.5">
      <Image
        width={32}
        height={32}
        src="/logo.png"
        alt=""
      />
      <p className="text-lg font-semibold dark:text-white">WriteSpace</p>
    </Link>
  )
}