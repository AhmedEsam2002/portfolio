"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-center items-center bg-primary">
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-xl capitalize hover:text-accent transition-all"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
