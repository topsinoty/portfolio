import { FC, HTMLAttributes } from "react";

export interface BlockTextProps {
  children: string | string[];
  options?: HTMLAttributes<HTMLSpanElement> & {
    text?: HTMLAttributes<HTMLSpanElement>;
  };
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const BlockText: FC<BlockTextProps> = ({ options, children }) => (
  <div className="flex gap-1 items-center group/block-text text-muted justify-between select-none">
    <span {...options}>{"["}</span>
    <span {...options?.text}>{children}</span>
    <span {...options}>{"]"}</span>
  </div>
);
