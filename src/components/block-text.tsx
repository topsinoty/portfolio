import { FC, HTMLAttributes } from "react";

export interface BlockTextProps extends HTMLAttributes<HTMLDivElement> {
  options?: HTMLAttributes<HTMLSpanElement> & {
    text?: HTMLAttributes<HTMLSpanElement>;
  };
}

export const BlockText: FC<BlockTextProps> = ({
  options,
  children,
  className,
  ...props
}) => (
  <div
    {...props}
    className={`flex gap-1 items-center group/block-text text-muted not-dark:text-black/50 justify-between select-none ${className}`}
  >
    <span {...options}>{"["}</span>
    <span {...options?.text}>{children}</span>
    <span {...options}>{"]"}</span>
  </div>
);
