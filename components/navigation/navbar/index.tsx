import Link from "next/link";
import Image from "next/image";
import Theme from "@/components/navigation/Theme";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200 dark:shadow-nonesm:px-12 fixed z-50
    w-full p-6 shadow-light-300 sm:px-12"
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
