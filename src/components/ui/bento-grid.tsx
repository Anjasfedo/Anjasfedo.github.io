"use client";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Use auto-rows-auto to let items grow with content
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 auto-rows-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Removed h-full to allow natural growth, added min-h for consistent look
        "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-200 flex flex-col justify-between space-y-4 hover:z-50 min-h-[18rem]",
        className
      )}
    >
      {/* Content wrapper */}
      <div className="flex flex-col flex-1 w-full">
        {header}
      </div>

      {/* Label wrapper - z-index ensures it stays on top */}
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-30 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-1 rounded-lg">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};