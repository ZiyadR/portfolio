"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  return (
    <header className="bg-base-100 w-full">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link className="text-2xl font-semibold text-orange-500 hover:text-orange-600" href={"/"}>HADIL MIARI</Link>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1">
          <div className="w-24">
              <Link
                className={`text-xl font-semibold ${pathname === '/' ? "text-orange-500 hover:text-orange-600" : "hover:text-orange-500"}`}
                href={"/"}
              >
                Home
              </Link>
            </div>
            <div className="w-24">
              <Link
                className={`text-xl font-semibold ${pathname === '/work' ? "text-orange-500 hover:text-orange-600" : "hover:text-orange-500"}`}
                href={"/work"}
              >
                Work
              </Link>
            </div>
            <div className="w-24">
              <Link
                className={`text-xl font-semibold ${pathname === '/about' ? "text-orange-500 hover:text-orange-600" : "hover:text-orange-500"}`}
                href={"/about"}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
