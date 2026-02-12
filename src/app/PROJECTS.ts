import { Project } from "~/components/project-card";

export const PROJECTS: Project[] = [
  {
    title: "Flave",
    slug: "flave",
    image: "/images/flave.png",
    brief: {
      id: "flave.ee",
      name: "Flave",
      description:
        "Final project MVP for a recipe search application where users can find recipes based on available ingredients.",
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
      type: "good",
    },
    source: {
      last_updated: null,
      repo_url: "https://github.com/topsinoty/flave-ee",
      demo_url: "https://flave.ee",
    },
    quality: 80,
  },
  {
    title: "Remondikohvik info site",
    slug: "remondikohvik",
    image: "/images/remondikohvik.png",
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
      type: "good",
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
    image: "/images/alinea.png",
    brief: {
      id: "alinea_hackathon",
      name: "Alinea",
      description:
        "A hackathon project where we built a web interface for organizing and evaluating business ideas.",
      techStack: [
        "Next.js",
        "Typescript",
        "Tailwind",
        "Postgres",
        "Prisma",
        "Local LLM integration",
      ],
      role: "Frontend Engineer, Project Lead",
    },
    reflection: {
      content:
        "Hackathons reward speed, but structure still matters. Clear boundaries and simple architecture make iteration easier.",
      type: "kinda bad",
    },
    source: {
      last_updated: null,
      repo_url: null,
      demo_url: null,
    },
  },
];
