"use client";

import { usePathname, useRouter } from "next/navigation";
import { BlockText } from "./block-text";

export const Logo = () => {
  const currentLocation = usePathname();
  const router = useRouter();

  function navigateToIndexOrTop() {
    if (currentLocation === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  }

  return (
    <button onClick={() => navigateToIndexOrTop()} className="cursor-pointer">
      <BlockText
        options={{
          className:
            "text-accent group-hover/block-text:text-muted/50 transition-colors duration-300",
          text: {
            className:
              "text-foreground group-hover/block-text:text-accent transition-colors delay-150 duration-300",
          },
        }}
      >
        promise_temitope
      </BlockText>
    </button>
  );
};
