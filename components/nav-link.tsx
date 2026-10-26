"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const navLinkClassName =
  "inline-flex items-center gap-[0.45rem] rounded-full px-3 py-[0.4rem] font-bold whitespace-nowrap text-[#ffc905] no-underline hover:bg-[#f9572a] hover:text-white focus-visible:bg-[#f9572a] focus-visible:text-white aria-[current=page]:bg-[#f9572a] aria-[current=page]:text-white max-[720px]:gap-[0.35rem] max-[720px]:px-2 max-[720px]:py-[0.35rem] max-[720px]:text-[0.95rem]";

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      className={navLinkClassName}
    >
      {children}
    </Link>
  );
}
