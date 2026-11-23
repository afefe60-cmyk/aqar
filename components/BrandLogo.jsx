import Link from "next/link";
import Image from "next/image";

export default function BrandLogo({ size = "default", className = "" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  // Aspect ratio is 1180 / 285 = ~4.14
  const width = isLarge ? 240 : isSmall ? 150 : 190;
  const height = Math.round(width * (285 / 1180));

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center select-none group transition-transform hover:scale-[1.02] active:scale-95 ${className}`}
      title="سودان زون للعقارات والأراضي"
    >
      <div className="relative" style={{ width, height }}>
        <Image
          src="/brand-logo-clean.png"
          alt="سودان زون للعقارات والأراضي - SudanZon Real Estate"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
}
