import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function ProductListCard({ title, description }: Props) {
  return (
    <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-6 py-6 md:py-20 border-b-2 border-foreground">
      {/* Title Section */}
      <div className="md:w-1/2 text-4xl md:text-6xl font-bold font-display leading-tight">
        {title}
      </div>

      {/* Description Section */}
      <div className="md:w-1/2 text-lg md:text-2xl font-sans leading-relaxed">
        {description}
      </div>
    </div>
  );
}
