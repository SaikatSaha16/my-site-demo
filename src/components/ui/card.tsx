"use client";

import * as React from "react";
import clsx from "clsx";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx(
                "rounded-lg border border-white/10 bg-neutral-900/30 backdrop-blur-sm",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";
