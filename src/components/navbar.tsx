import Link from "next/link";
import React from "react";
import { FaFile } from "react-icons/fa";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background backdrop-blur-md py-4 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between font-mono text-xs md:text-md text-accent">
        <div className="flex items-center gap-1 select-none">
          <span className="text-muted">[</span>
          <Link
            href="/"
            className="cursor-pointer text-foreground hover:text-accent transition-colors"
          >
            promise_temitope
          </Link>
          <span className="text-muted">]</span>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="https://github.com/topsinoty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            github
          </Link>
          <Link
            href="/promise_temitope.pdf"
            className="group relative px-3 py-1.5 bg-accent/5 border border-accent/30 text-accent/90 hover:text-accent hover:bg-accent/10 hover:border-accent/50 rounded-md transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>resume</span>
              <FaFile />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
