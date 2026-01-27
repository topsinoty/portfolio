import { CurrentFocus } from "~/components/cuurent-focus";
import { Hero } from "~/components/hero";
import { Project, ProjectCard } from "~/components/project-card";
import { TechStack } from "~/components/tech-stack";
import { SpotifyWidget } from "~/components/spotify-widget";
import { BlockText } from "~/components/block-text";
import Link from "next/link";
import { TimeWidget } from "~/components/time-widget";

const PROJECTS: Project[] = [
  {
    title: "Flave",
    slug: "flave",
    image: "https://picsum.photos/seed/lapikud/1200/800",
    brief: {
      id: "flave.ee",
      name: "Flave",
      description:
        "MVP of a finals project. Was supposed to be a recipe search engine. Users can search for recipes based on ingredients they have available.",
      techStack: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Tailwind",
        "Express.js",
        "C++",
        "Figma",
      ],
      role: "Lead Frontend Engineer, Devops",
    },
    reflection: {
      content:
        "Mobile-first is the most important thing for a consumer product. \n\nAuthentication is different from authorization!!",
      type: "emerald",
    },
    source: {
      last_updated: null,
      repo_url: "https://github.com/topsinoty/flave-ee",
      demo_url: "https://flave.ee",
    },
  },
  {
    title: "Remondikohvik info site",
    slug: "remondikohvik",
    image: "https://picsum.photos/seed/lapikud/1200/800",
    brief: {
      id: "remondikohvik.lapikud.ee",
      name: "remondikohvik",
      description:
        "Info page for remondikohvik. An event hosted annually by Lapikud MTÜ. I was one of the major contributors.",
      techStack: ["Next.js", "Typescript", "Tailwind", "Figma"],
      role: "Frontend Engineer",
    },
    reflection: {
      content:
        "Sometimes you may not need a framework. Simple HTML/CSS sometimes is the answer.",
      type: "emerald",
    },
    source: {
      repo_url: "https://github.com/Lapikud/remondikohvik",
      demo_url: "https://remondikohvik.lapikud.ee",
      last_updated: "12-01-26",
    },
  },
  {
    title: "Alinea",
    slug: "alinea",
    image: "https://picsum.photos/seed/lapikud/1200/800",
    brief: {
      id: "alinea_hackathon",
      name: "Alinea",
      description:
        "AI-powered application for analyzing workforce, structure, SWOT and other factors for a startup idea.",
      techStack: [
        "Next.js",
        "Typescript",
        "Tailwind",
        "Postgres",
        "Prisma",
        "Ollama - Llama 3.2:3b",
      ],
      role: "Frontend Engineer, Project Lead",
    },
    reflection: {
      content:
        "For quick prototyping, don't be ashamed to use AI. AI might not be creative but it is statistical.",
      type: "amber",
    },
    source: {
      last_updated: null,
      repo_url: null,
      demo_url: null,
    },
  },
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 container">
      <Hero />
      <section id="projects" className="py-20">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-sm font-mono text-muted/90 uppercase tracking-widest">
            featured_projects
          </h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="grid grid-cols-1">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="https://github.com/topsinoty"
          className="mt-16 lg:mt-32 block mx-auto container"
        >
          <BlockText
            className="text-lg! lg:text-xl group/check-my-git hover:border-y-accent border-y border-y-transparent py-4 transition-all **:transition-all **:duration-300 duration-300"
            options={{
              className: "text-accent group-hover/check-my-git:opacity-0",
              text: {
                className:
                  "text-secondary group-hover/check-my-git:text-muted-foreground/80",
              },
            }}
          >
            Hey! Check out my github :p
          </BlockText>
        </Link>
      </section>

      <TechStack />
      <section id="personal" className="py-20 border-t border-white/5">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-sm font-mono text-muted uppercase tracking-widest mb-6">
              live_state
            </h2>
            <SpotifyWidget />
            <TimeWidget />
          </div>
          <div className="md:col-span-8">
            <h2 className="text-sm font-mono text-muted uppercase tracking-widest mb-6">
              terminal_env
            </h2>
            <CurrentFocus />
          </div>
        </div>
      </section>
    </main>
  );
}
