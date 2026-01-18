"use client";
import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I like to code. I'm a software developer.";

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white">
          Hello, I&apos;m{" "}
          <span className="font-semibold text-primary">Promise Temitope</span>
        </h1>

        <div className="space-y-3 font-mono text-md md:text-base text-muted-foreground leading-relaxed">
          <p
            className={`inline-block ${displayText.length < fullText.length ? "typing-cursor" : ""}`}
          >
            {displayText}
          </p>
          <div className="">
            <p className="">
              Currently a student at{" "}
              <span className="text-secondary">#taltech</span>.{" "}
              {/** todo add taltech and lapikud colors */}
            </p>
            <p className="">
              Proud member of <span className="text-secondary">#lapikud</span>.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group cursor-pointer inline-flex items-center gap-2 text-sm md:text-md font-mono uppercase tracking-widest text-muted-foreground hover:text-primary/90 transition-all py-1.5 border-b border-muted hover:border-primary/30"
          >
            <span>view_projects</span>
            <FaLongArrowAltRight className="size-3 stroke-1 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
