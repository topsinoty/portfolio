import Link from "next/link";
import { BlockText } from "~/components/block-text";
import "./resume.css";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <section className="language-selector">
        <Link
          href="/resume/ee.pdf"
          className="aspect-3/5! max-h-96 w-full bg-background! group lang-card estonia"
        >
          <BlockText className="font-semibold cursor-pointer not-lg:text-white text-3xl lg:text-6xl group-hover:text-white">
            Eesti
          </BlockText>
        </Link>

        <Link
          href="/resume/en.pdf"
          className="aspect-3/5! max-h-96 w-full lg:bg-background! lg:hover:bg-white! group lang-card england"
        >
          <BlockText className="font-semibold cursor-pointer not-lg:text-black text-3xl lg:text-6xl group-hover:text-black">
            English
          </BlockText>
        </Link>
      </section>
    </main>
  );
}
