import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const OfferCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center bg-background border-2 border-foreground border-black shadow-xl shadow-black p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl w-full max-w-sm h-[300px]">
      {/* Icon positioned in the upper-left corner */}
      <div className="absolute top-[-20px] left-[-20px] bg-background dark:bg-foreground p-4 rounded-full shadow-lg border-2 border-foreground shadow-black">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>

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
