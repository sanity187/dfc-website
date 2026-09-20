import Image from "next/image";

interface BrandMarkProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

export function BrandMark({
  className = "h-9 w-9",
  size = 36,
  priority = false,
}: BrandMarkProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Dallas Skydive Center"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority={priority}
    />
  );
}
