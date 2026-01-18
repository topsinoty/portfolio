import React from "react";

const TechBadge = ({ name, type }: { name: string; type: "lang" | "tool" }) => (
  <div className="group relative flex items-center gap-3 px-3 py-2 bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 rounded-sm transition-all duration-300">
    <div
      className={`w-1 h-1 rounded-full ${type === "lang" ? "bg-primary shadow-sm shadow-accent" : "bg-muted"} group-hover:scale-125 transition-transform`}
    />
    <span className="font-mono text-xs text-secondary group-hover:text-secondary transition-colors uppercase tracking-tight">
      {name}
    </span>
  </div>
);

export const TechStack: React.FC = () => {
  const languages = ["TypeScript", "JavaScript", "Python", "SQL/NoSQL"];
  const tools = ["React", "Next.js", "Tailwind", "Git", "MySQL/Postgres"];

  return (
    <section id="stack" className="py-24 border-t border-white/5">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-sm font-mono text-muted uppercase tracking-widest">
          stack_trace
        </h2>
        <div className="h-px flex-1 bg-white/5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="top-24">
            <h3 className="text-xl text-secondary font-medium mb-4">
              The core logic.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Primary languages and environments I use to translate problems
              into functional software.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="space-y-10">
            <div>
              <div className="text-[10px] font-mono text-muted uppercase mb-4 tracking-widest">
                01. Languages
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <TechBadge key={lang} name={lang} type="lang" />
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-muted uppercase mb-4 tracking-widest">
                02. Daily Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <TechBadge key={tool} name={tool} type="tool" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
