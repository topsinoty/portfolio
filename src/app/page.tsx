import { CurrentFocus } from "~/components/cuurent-focus";
import { Hero } from "~/components/hero";
import { ProjectCard } from "~/components/project-card";
import { TechStack } from "~/components/tech-stack";
import { SpotifyWidget } from "~/components/spotify-widget";
import { BlockText } from "~/components/block-text";
import Link from "next/link";
import { TimeWidget } from "~/components/time-widget";
import { PROJECTS } from "./PROJECTS";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 container">
      <Hero />
      <section id="projects" className="py-20">
        <div className="grid grid-cols-1">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-sm font-mono  uppercase tracking-widest">
              <BlockText
                options={{
                  text: {
                    className:
                      "text-muted-foreground/90 hover:text-primary transition-all",
                  },
                }}
              >
                featured_projects
              </BlockText>
            </h2>
          </div>
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
                  "text-secondary not-dark:text-foreground group-hover/check-my-git:text-muted-foreground/80",
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
            <h2 className="text-sm font-mono text-muted-foreground/80 uppercase tracking-widest mb-6">
              live_state
            </h2>
            <SpotifyWidget />
            <TimeWidget />
          </div>
          <div className="md:col-span-8">
            <h2 className="text-sm font-mono text-muted-foreground/80 uppercase tracking-widest mb-6">
              terminal_env
            </h2>
            <CurrentFocus />
          </div>
        </div>
      </section>
    </main>
  );
}
