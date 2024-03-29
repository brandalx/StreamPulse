import { cn } from "@/lib/utils";
import React from "react";

interface LiveBadgeProps {
  className?: string;
}
const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] tracking-wide font-semibold",
        className
      )}
    >
      Live
    </div>
  );
};

export default LiveBadge;
