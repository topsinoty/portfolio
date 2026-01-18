"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFile } from "react-icons/fa";
import { Logo } from "./logo";
import clsx from "clsx";

export const Navbar: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const observerSentinel = document.getElementById("observerSentinel");
    if (!observerSentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setHasScrolled(!entry.isIntersecting);
    });

    observer.observe(observerSentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-40 bg-background backdrop-blur-md py-4 px-6 md:px-8 border-b border-b-transparent transition-colors duration-500",
        { "border-b-accent!": hasScrolled },
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between font-mono text-xs md:text-md lg:text-lg text-accent">
        <Logo />

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
