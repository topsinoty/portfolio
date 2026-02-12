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
      type: "good",
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
      type: "kinda bad",
    },
    source: {
      last_updated: null,
      repo_url: null,
      demo_url: null,
    },
  },
];
