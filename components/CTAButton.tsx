import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = true,
}: Props) {
  const base =
    "inline-flex items-center gap-2 font-medium transition-colors duration-150 whitespace-nowrap";
  const sizes = {
    md: "px-5 py-3 text-[15px] rounded-sm",
    lg: "px-7 py-4 text-base rounded-sm",
  };
  const variants = {
    primary: "bg-forest text-white hover:bg-[#125e18]",
    secondary:
      "bg-transparent text-ink border border-ink/25 hover:border-forest hover:text-forest",
    ghost: "bg-transparent text-forest hover:text-[#125e18] px-0 py-0",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowUpRight size={16} strokeWidth={2} />}
    </Link>
  );
}
