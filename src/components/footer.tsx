import Link from "next/link";

export const Footer = () => (
  <footer className="py-20 items-center justify-center flex flex-col mt-20 border-t border-white/5 text-center font-mono text-xs text-zinc-600">
    <div className="mb-4 gap-2 flex">
      <Link href="/github" className="hover:text-zinc-400 transition-colors">
        github
      </Link>
      <Link href="/linkedin" className="hover:text-zinc-400 transition-colors">
        linkedin
      </Link>
      <Link href="/mail" className="hover:text-zinc-400 transition-colors">
        mail
      </Link>
    </div>
    <div>&copy; {new Date().getFullYear()} Made w :3 by Topsinoty</div>
  </footer>
);
