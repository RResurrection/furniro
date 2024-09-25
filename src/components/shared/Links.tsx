"use client";

import { links } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const urlPath = usePathname();

  return (
    <nav className="flex  gap-16">
      {links.map((link) => (
        <Link
          className={`text-[18px] font-bold ${
            urlPath === link.href ? "text-green-600" : ""
          }`}
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Links;
