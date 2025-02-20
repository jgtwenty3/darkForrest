// components/ProcessCards.js
import React from 'react';

type ProcessCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function ProcessCards({ title, subtitle, description }: ProcessCardProps) {
  return (
    <div className="relative group w-full h-64 border-2 border-foreground overflow-hidden shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center bg-background p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <h1 className="text-xl md:text-5xl font-sans font-semibold">{title}</h1>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h2 className="text-lg md:text-3xl mb-2">{subtitle}</h2>
        <p className="text-center md:text-2xl">{description}</p>
      </div>
    </div>
  );
}
