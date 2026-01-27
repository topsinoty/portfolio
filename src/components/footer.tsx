import Link from "next/link";

export const Footer = () => (
  <footer className="py-20 items-center justify-center flex flex-col mt-20 border-t border-white/5 text-center font-mono text-xs text-muted">
    <div className="mb-4 gap-2 flex">
      <Link
        href="/github"
        className="hover:text-muted-foreground transition-colors"
      >
        github
      </Link>
      <Link
        href="/linkedin"
        className="hover:text-muted-foreground transition-colors"
      >
        linkedin
      </Link>
      <Link
        href="/mail"
        className="hover:text-muted-foreground transition-colors"
      >
        mail
      </Link>
    </div>
    <div>&copy; 2026 Made w :3 by Topsinoty</div>
  </footer>
);
