"use client"
import React, { useState } from 'react';

interface SpecialtyCardProps {
  id: string;
  title: string;
  description: string;
  listTitle: string;
  listItems: string[];
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ id, title, description, listTitle, listItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id={id} className="border-1 border-foreground p-4 cursor-pointer border-b-1 py-20" onClick={toggleList}>
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className=" ">
          <h5 className="text-5xl mb-2">{title}</h5>
          <p className="text-3xl">
            {description}
          </p>
          <div className="font-display text-4xl text-right">
              {listTitle}
            </div>
        </div>

        {isOpen && (
          <div className=" mt-5 md:mt-0 md:ml-5">
            
            <ul className="text-3xl text-right">
              {listItems.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpecialtyCard;
