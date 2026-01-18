import { CurrentFocus } from "~/components/cuurent-focus";
import { Hero } from "~/components/hero";
import { ProjectCard } from "~/components/project-card";
import { TechStack } from "~/components/tech-stack";

const PROJECTS = [
  {
    title: "Lapikud E-Shop",
    slug: "lapikud-shop",
    image: "https://picsum.photos/seed/lapikud/1200/800",
    brief: {
      id: "lapikud.manifest",
      name: "Student Org E-Commerce",
      version: "1.2.4",
      lastModified: "2024-03-15",
      description:
        "Custom built marketplace for IT student organization merchandise.",
      techStack: ["Next.js", "PostgreSQL", "Tailwind", "Stripe"],
      role: "Lead Frontend Engineer",
      complexity: "High - Real-time inventory syncing",
      outcome: "Successfully launched with 200+ orders in week 1.",
    },
    reflection: {
      content:
        "Learned that state management for multi-currency carts is trickier than it looks. Proud of the clean checkout flow.",
      type: "emerald",
    },
  },
  {
    title: "Synth UI System",
    slug: "synth-ui",
    image: "https://picsum.photos/seed/synth/1200/800",
    brief: {
      id: "synth_ui.manifest",
      name: "React Component Library",
      version: "0.8.0-beta",
      lastModified: "2024-05-20",
      description:
        "A developer-first component library focusing on accessibility and raw speed.",
      techStack: ["React", "TypeScript", "Radix UI", "Vanilla Extract"],
      role: "Solo Creator",
      complexity: "Medium - High documentation effort",
      outcome: "Open sourced on GitHub with 50+ stars.",
    },
    reflection: {
      content:
        "Spending time on accessibility (WAI-ARIA) early on saved dozens of hours of refactoring later.",
      type: "zinc",
    },
  },
  {
    title: "TalTech Schedule Sync",
    slug: "schedule-sync",
    image: "https://picsum.photos/seed/taltech/1200/800",
    brief: {
      id: "taltech_sync.manifest",
      name: "University Schedule Automation",
      version: "2.0.1",
      lastModified: "2024-01-10",
      description:
        "API bridge to sync university schedules with Google/Apple calendars.",
      techStack: ["Node.js", "Express", "iCal.js", "Redis"],
      role: "Backend Architect",
      complexity: "Extreme - Handling legacy university API formats",
      outcome: "Used by 1,200 students across various faculties.",
    },
    reflection: {
      content:
        "The challenge was the parsing. Legacy SOAP APIs are a nightmare, but Redis caching made it fast.",
      type: "amber",
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
            selected_works
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
