"use client";
import { useState } from "react";

export const CurrentFocus: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "$ system_check",
    "Status: Operational",
    "Environment: TALTECH_PROD",
    "$ cat current_focus.txt",
  ]);
  const focus =
    "Building resilient e-commerce systems with low-latency interfaces.";

  return (
    <div className="p-4 bg-black border border-white/5 rounded-sm font-mono text-[10px] leading-relaxed h-full">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
      </div>
      <div className="space-y-1">
        {logs.map((log, i) => (
          <div
            key={i}
            className={
              log.startsWith("$") ? "text-secondary" : "text-accent/70"
            }
          >
            {log}
          </div>
        ))}
        <div className="text-foreground">{focus}</div>
        <div className="text-muted typing-cursor inline-block w-full">$ _</div>
      </div>
    </div>
  );
};
