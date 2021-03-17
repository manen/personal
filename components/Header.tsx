import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <div className="border-b border-accent-200 dark:border-accent-700">
    <header className="m-4 flex flex-row justify-center items-center">
      <div className="flex-1 text-left flex-row">
        {
          // If anyone knows how to center this, a PR would be extremely
          // appreciated
        }
        <h1 className="text-2xl">
          <Link href="/">manen</Link>
        </h1>
        <p className="text-xs">I do things sometimes</p>
      </div>
      <nav>
        <span className="m-2">
          <Link href="/projects">Projects</Link>
        </span>
        <span className="m-2">
          <Link href="/contact">Contact</Link>
        </span>
        <span className="m-2">
          <Link href="/about">About</Link>
        </span>
      </nav>
    </header>
  </div>
);

export default Header;
