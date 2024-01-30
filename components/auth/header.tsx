import Image from "next/image";

interface HeaderProps {
  label: string;
  subLabel?: string;
}

export const Header = ({ label, subLabel }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Image
        className="rounded-lg mb-6"
        width={88}
        height={88}
        src="/logo.png"
        alt="Write Space"
      />
      <h1 className="text-3xl font-semibold text-center">
        {label}
      </h1>
      {subLabel && <p className="text-tertiary text-sm mt-3">
        {subLabel}
      </p>}
    </div>
  );
};