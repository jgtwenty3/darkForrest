"use client"
import React, { useState } from 'react';

type Props = {
  title: string;
  description: string;
};

export default function PlanCard({ title, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div 
        className="flex flex-col md:flex-row items-center justify-between relative hover:bg-foreground hover:text-background cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Title Section */}
        <div className="font-display uppercase text-4xl md:text-7xl md:w-1/2 md:mb-1">
          {title}
        </div>

        {/* Icon */}
        <div className="md:ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-arrow-down transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </div>
      </div>

      {/* Description (Visible on Click) */}
      {isOpen && (
        <div className="mt-2 p-4 text-xl md:text-lg font-sans font-semibold md:w-1/2 md:ml-auto md:text-right">
          {description}
        </div>
      )}
    </div>
  );
}
