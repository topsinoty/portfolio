"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export interface ProjectManifest {
  id: string;
  name: string;
  version: string;
  lastModified: string;
  description: string;
  techStack: string[];
  role: string;
  complexity: string;
  outcome: string;
}

export interface Project {
  title: string;
  slug: string;
  image: string;
  brief: ProjectManifest;
  reflection: {
    content: string;
    type: "emerald" | "zinc" | "amber";
  };
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showManifest, setShowManifest] = useState(false);

  const getBorderColor = () => {
    switch (project.reflection.type) {
      case "emerald":
        return "border-emerald-500/20";
      case "zinc":
        return "border-zinc-500/20";
      case "amber":
        return "border-amber-500/20";
      default:
        return "border-white/5";
    }
  };

  const getTextColor = () => {
    switch (project.reflection.type) {
      case "emerald":
        return "text-accent";
      case "zinc":
        return "text-zinc-400";
      case "amber":
        return "text-amber-400";
      default:
        return "text-zinc-400";
    }
  };

  return (
    <article className="group mb-24 last:mb-0">
      <div className="flex items-center gap-2 mb-4 font-mono text-xxs text-muted px-1">
        <span>Project:</span>
        <span className="text-muted-foreground">{project.brief.id}</span>
        <div className="flex-1 flex justify-end gap-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="/github"
            className="hover:text-accent transition-colors"
          >
            code
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="/github"
            className="hover:text-accent transition-colors"
          >
            demo
          </Link>
        </div>
      </div>

      <div
        className={`relative w-full bg-background/80 rounded-sm overflow-hidden border border-white/5 group-hover:border-white/10 transition-all duration-500 shadow-2xl ${showManifest ? "aspect-4/5 md:aspect-video" : "aspect-video"}`}
      >
        {/* Main View: Image or Manifest */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${showManifest ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-10 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
          />
        </div>

        <div
          className={`absolute inset-0 bg-muted/10 p-4 md:p-6 font-mono text-xs md:text-sm overflow-auto transition-opacity duration-500 ${showManifest ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className="text-accent mb-2 md:mb-4">{`{`}</div>
          <div className="pl-3 md:pl-4 space-y-2 md:space-y-1">
            {Object.entries(project.brief).map(([key, value]) => (
              <div key={key} className="flex gap-2 flex-wrap md:flex-nowrap">
                <span className="text-zinc-500 shrink-0">
                  &quot;{key}&quot;:
                </span>
                <span className="text-zinc-200 break-all md:break-normal">
                  {Array.isArray(value)
                    ? `[${value.map((v) => `"${v}"`).join(", ")}]`
                    : `"${value}"`}
                  ,
                </span>
              </div>
            ))}
          </div>
          <div className="text-accent mt-2 md:mt-4">{`}`}</div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowManifest(!showManifest)}
          className="absolute bottom-4 right-4 z-20 px-3 py-1.5 bg-zinc-900/80 backdrop-blur border border-white/10 rounded-sm font-mono text-xs text-zinc-400 hover:text-accent hover:border-emerald-500/30 transition-all"
        >
          [ {showManifest ? "close_brief" : "the_brief"} ]
        </button>
      </div>

      <div className="mt-8 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h3 className="text-xl text-secondary font-medium mb-2">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            {project.brief.description}
          </p>
        </div>

        <div className="md:col-span-8">
          <div
            className={`h-full p-4 border-l-2 bg-white/1 ${getBorderColor()}`}
          >
            <div
              className={`font-mono text-xs uppercase tracking-widest mb-2 opacity-50 ${getTextColor()}`}
            >
              Post dev clarity
            </div>
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              &quot;{project.reflection.content}&quot;
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
