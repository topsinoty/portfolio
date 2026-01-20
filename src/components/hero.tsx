"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Typewriter } from "./typewriter";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

export const Hero: React.FC = () => {
  const text = "I like to __code__. I'm a //software developer//...";
  const speed = 40;
  const [ready, setReady] = useState(false);
  setTimeout(() => setReady(true), text.length * speed);
  return (
    <header className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white animate-reveal">
          Hello, I&apos;m{" "}
          <span className="font-semibold text-primary">Promise Temitope</span>
        </h1>

        <div className="space-y-3 font-mono text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
          <Typewriter
            className="inline"
            data-tw-no-blink
            speed={speed}
            text={text}
          />

          <div
            className={clsx(
              "opacity-0 translate-y-2 flex flex-col not-sm:text-xs mt-2 gap-1 transition-all duration-700 ease-out",
              ready ? "opacity-100 translate-y-0" : "invisible",
            )}
          >
            <p className="md:inline-flex items-center gap-2">
              Currently a student at{" "}
              <Link
                href="https://taltech.ee"
                target="_blank"
                className="text-taltech hover:border-taltech transition-all duration-200 border-taltech/40 border-r-2 border-b-2 font-semibold bg-taltech/10 px-1.5 py-0.5 rounded"
              >
                #taltech
              </Link>
            </p>
            <p className="inline-flex items-center gap-2">
              Member of{" "}
              <Link
                href="https://lapikud.ee"
                target="_blank"
                className="text-lapikud hover:border-lapikud transition-all duration-200 border-lapikud/40 border-r-2 border-b-2 font-semibold bg-lapikud/10 px-1.5 py-0.5 rounded"
              >
                #lapikud
              </Link>
            </p>
          </div>
        </div>

        <div
          className={clsx(
            "pt-2 transition-all duration-1000 delay-300",
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group cursor-pointer inline-flex items-center gap-2 text-sm md:text-md font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-all py-1.5 border-b border-muted hover:border-primary"
          >
            <span>view_projects</span>
            <FaLongArrowAltRight className="size-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </header>
  );
};
