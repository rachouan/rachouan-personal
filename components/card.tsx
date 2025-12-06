import clsx from "clsx";
import { HTMLAttributes } from "react";

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("bg-white dark:bg-gray-800 p-4 md:p-8", className)}
      {...rest}
    />
  );
}
