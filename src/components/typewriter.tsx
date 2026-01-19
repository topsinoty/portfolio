"use client";
import clsx from "clsx";
import { FC, HTMLAttributes, useEffect, useMemo, useState } from "react";
import { Cluster, lexer } from "~/fn/lexer";

/**
 * Configuration options for the `useTypewriter` hook.
 *
 * @public
 */
export interface TypewriterProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  /**
   * The text to be rendered by the typewriter effect.
   *
   * This string supports a **limited Markdown-style syntax** for emphasis:
   *
   * - `*text*` or `_text_` — italic text
   * - `**text**` or `__text__` — bold text
   *
   * Emphasis markers may be nested.
   *
   * @remarks
   * - Only emphasis markers (`*`, `_`) are supported.
   * - Other Markdown features are not parsed.
   * - Literal `*` or `_` characters can be escaped using a backslash (`\`).
   * - Recommended to use String.raw() when escaping.
   *
   * @example
   * ```ts
   * text: "*Italic text*"
   * ```
   *
   * @example
   * ```ts
   * text: "**Bold text**"
   * ```
   *
   * @example
   * ```ts
   * text: "_Italic_ and **bold** text"
   * ```
   *
   * @example
   * ```ts
   * text: "\*Not italic\* and \_not italic\_"
   * ```
   *
   * @type {string}
   */
  text: string;
  speed?: number;
}

export const Typewriter: FC<TypewriterProps> = ({
  text,
  speed = 30,
  ...props
}) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const clusters = useMemo(() => lexer(text), [text]);

  const clustersWithPositions = useMemo(() => {
    const initial: Array<Cluster & { start: number }> = [];

    return clusters.reduce((acc, cluster) => {
      const previousCluster = acc.at(-1);
      const start = previousCluster
        ? previousCluster.start + previousCluster.value.length
        : 0;

      acc.push({ ...cluster, start });
      return acc;
    }, initial);
  }, [clusters]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleChars(0);
    const interval = setInterval(() => {
      setVisibleChars((prev) => (prev < text.length ? prev + 1 : prev));
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {clustersWithPositions.map((cluster, i) => {
        const charsToShow = Math.max(
          0,
          Math.min(cluster.value.length, visibleChars - cluster.start),
        );

        if (charsToShow <= 0) return null;

        const displayedValue = cluster.value.slice(0, charsToShow);

        return (
          <span
            key={`${cluster.type}-${i}`}
            {...props}
            style={{ whiteSpace: "pre-wrap", ...props.style }}
            className={`tw ${props.className}`}
            data-tw-child
            data-tw-style={cluster.type}
            data-tw-last-child={i === clusters.length - 1}
          >
            {displayedValue}
          </span>
        );
      })}
    </>
  );
};
