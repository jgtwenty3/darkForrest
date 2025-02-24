import React from "react";

interface CardProps {

  title: string;
  description: string;
}

const OfferCard: React.FC<CardProps> = ({title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center bg-background border-2 border-foreground border-black shadow-xl shadow-black p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl w-full max-w-sm h-[300px]">
      {/* Icon positioned in the upper-left corner */}
      
      {/* Title */}
      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mt-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-foreground dark:text-gray-300 mt-6 text-xl md:text-2xl flex-grow">{description}</p>
    </div>
  );
};

export default OfferCard;
