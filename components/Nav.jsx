"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex items-center gap-8 ">
      {Links.map((link, idx) => {
        return (
          <Link
            href={link.href}
            key={idx}
            className={`${
              link.href === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            }  capitalize font-medium hover:text-accent transition-colors duration-300`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
