import { CurrentFocus } from "~/components/cuurent-focus";
import { Hero } from "~/components/hero";
import { Project, ProjectCard } from "~/components/project-card";
import { TechStack } from "~/components/tech-stack";

const PROJECTS: Project[] = [
  {
    title: "Flave",
    slug: "flave",
    image: "https://picsum.photos/seed/lapikud/1200/800",
    brief: {
      id: "flave.ee",
      name: "Flave",
      lastModified: "2024-03-15", //todo get the acc date from repo
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
  },
  {
    title: "Remondikohvik info site",
    slug: "remondikohvik",
    image: "https://picsum.photos/seed/lapikud/1200/800",
    brief: {
      id: "remondikohvik.lapikud.ee",
      name: "remondikohvik",
      lastModified: "2024-03-15", //todo get the acc date from repo
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
  },
  {
    title: "Alinea",
    slug: "alinea",
    image: "https://picsum.photos/seed/lapikud/1200/800",
    brief: {
      id: "alinea_hackathon",
      name: "Alinea",
      lastModified: "2024-03-15", //todo get the acc date from repo
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
      </section>

      <TechStack />
      <section id="personal" className="py-20 border-t border-white/5">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
              live_state
            </h2>
            {/* <SpotifyWidget /> */}
          </div>
          <div className="md:col-span-8">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
              terminal_env
            </h2>
            <CurrentFocus />
          </div>
        </div>
      </section>
    </main>
  );
}
