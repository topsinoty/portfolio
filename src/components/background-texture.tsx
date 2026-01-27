"use client";

import React from "react";
import { clsx } from "clsx";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: [number, number][];
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

export function GridPattern({
  width = 16,
  height = 16,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: Readonly<GridPatternProps>) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute inset-0 h-full w-full fill-primary stroke-primary/5",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          height={height}
          id={id}
          patternUnits="userSpaceOnUse"
          width={width}
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
      {squares && (
        <svg aria-label="Grid squares" className="overflow-visible" x={x} y={y}>
          {squares.map(([x, y], index) => (
            <rect
              height={height - 1}
              key={`${x}-${y}-${index}`}
              strokeWidth="0"
              width={width - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-background">
      <GridPattern />
    </div>
  );
}
