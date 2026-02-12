"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BlockText } from "./block-text";
import Link from "next/link";
import clsx from "clsx";

export interface ProjectManifest {
  id: string;
  name: string;
  version?: string;
  lastModified?: string;
  description: string;
  techStack: string[];
  role: string;
  complexity?: string;
  outcome?: string;
}

export interface ProjectSource {
  last_updated: string | null;
  repo_url: string | null;
  demo_url: string | null;
}

export interface Project {
  quality?: number;
  title: string;
  slug: string;
  image: string;
  brief: ProjectManifest;
  reflection: {
    content: string;
    type: "good" | "meh" | "kinda bad";
  };
  source?: ProjectSource;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showManifest, setShowManifest] = useState(false);

  const getBorderColor = () => {
    switch (project.reflection.type) {
      case "good":
        return "border-primary/20";
      case "meh":
        return "border-muted/30";
      case "kinda bad":
        return "border-lapikud/20";
      default:
        return "border-white/5";
    }
  };

  const getTextColor = () => {
    switch (project.reflection.type) {
      case "good":
        return "text-primary";
      case "meh":
        return "text-muted-foreground";
      case "kinda bad":
        return "text-lapikud";
      default:
        return "text-muted-foreground";
    }
  };

  const formatKey = (key: string) =>
    key.replaceAll(/([A-Z])/g, " $1").toLowerCase();

  return (
    <article
      className={`group mb-24 last:mb-0 ${getBorderColor()} backdrop-blur-3xl not-dark:shadow-xl border-accent/30 transition-all duration-500 rounded-sm border py-4 px-6`}
    >
      <div className="flex items-center gap-3 mb-4 font-mono text-xxs text-muted-foreground/80 px-1 uppercase tracking-tight">
        <span className="flex items-center gap-1.5">
          <span
            className={`w-1.5 h-1.5 rounded-full bg-accent ${getBorderColor()} border-4 `}
          />
          {project.brief.id}
        </span>
      </div>

      <div
        className={`relative w-full bg-background rounded-sm overflow-hidden border border-white/5 not-dark:border-black/10 dark:group-hover:border-white/10 transition-all duration-500 dark:shadow-2xl ${
          showManifest ? "h-125 md:h-112.5" : "aspect-video"
        }`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showManifest ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            width={800}
            height={600}
            src={project.image}
            alt={project.title}
            quality={project?.quality ?? 100}
            className="w-full h-full object-fit filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
          />
          <button
            onClick={() => setShowManifest(true)}
            className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-background/90 backdrop-blur border not-dark:border-black/20 border-white/10 rounded-sm font-mono text-xxs text-muted-foreground hover:text-primary hover:border-primary/30 transition-all shadow-lg"
          >
            <BlockText
              options={{
                className: "text-accent",
                text: { className: "text-muted-foreground/80" },
              }}
            >
              read_manifest
            </BlockText>
          </button>
        </div>

        <div
          className={`absolute inset-0 bg-background flex flex-col transition-opacity duration-500 ${
            showManifest ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex-none flex items-center justify-between border-b border-white/5 not-dark:border-black/10 p-6 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xxs lowercase font-mono tracking-widest font-semibold">
                /{project.slug}
              </span>
              <span className="text-xxs text-muted font-mono hidden xs:inline">
                <BlockText>[read_only]</BlockText>
              </span>
            </div>
            <button
              onClick={() => setShowManifest(false)}
              className="text-xxs font-mono text-muted hover:text-foreground transition-colors uppercase font-bold tracking-tight"
            >
              <BlockText>close_manifest</BlockText>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 pt-4 custom-scrollbar">
            <div className="space-y-6">
              {Object.entries(project.brief).map(([key, value], i, arr) => {
                const isLast = i === arr.length - 1;
                if (key === "id") return null;
                return (
                  <div
                    key={key}
                    className={clsx(
                      "grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 not-last:border-b not-dark:border-black/6 border-white/3 pb-4 last:border-0",
                      isLast && "border-b-0!",
                    )}
                  >
                    <span className="text-foreground text-xxs uppercase tracking-tighter font-mono">
                      {formatKey(key)}
                    </span>
                    <div className="md:col-span-3">
                      {Array.isArray(value) ? (
                        <div className="flex flex-wrap gap-1.5">
                          {value.map((v, i) => (
                            <span
                              key={`${v} - ${i}`}
                              className="text-xxs bg-foreground/10 px-2 py-0.5 text-muted-foreground border border-white/10 rounded-sm font-mono leading-none"
                            >
                              {v as string}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-xs leading-relaxed font-mono">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}

              {project.source && (
                <div className="pt-6 mt-2 border-t text-foreground border-primary/10 flex flex-wrap gap-x-6 gap-y-4 pb-4">
                  {project.source.repo_url && (
                    <Link
                      href={project.source.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xxs font-mono text-muted hover:text-primary transition-colors"
                    >
                      <span className="text-primary opacity-50">/</span>
                      <span className="text-foreground">repository</span>
                    </Link>
                  )}
                  {project.source.demo_url && (
                    <Link
                      href={project.source.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xxs font-mono text-muted hover:text-primary transition-colors"
                    >
                      <span className="text-primary opacity-50">/</span>
                      <span className="text-foreground">live_demo</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h3 className="text-xl text-foreground font-medium mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed">
            {project.brief.description}
          </p>
        </div>

        <div className="md:col-span-8">
          <div
            className={`h-full p-5 border-l-2 bg-muted/5 ${getBorderColor()}`}
          >
            <div
              className={`font-mono text-xxs uppercase tracking-widest mb-3 opacity-80 ${getTextColor()}`}
            >
              post_dev_clarity
            </div>
            <p className="text-muted-foreground text-xs italic leading-relaxed whitespace-pre-line">
              {project.reflection.content}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
