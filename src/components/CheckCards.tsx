import React from 'react'

type Props = {
 
  title: string;
  description: string;
}

const CheckCards: React.FC<Props> = ({  title, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 p-6 border-2 border-black shadow-xl shadow-black">
        {/* <div className="absolute top-[-20px] left-[-20px] bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-lg border-2 border-foreground shadow-black">
         <img src={icon} alt={title} className="w-10 h-10" />
        </div> */}
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">
          {title}
        </h4>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CheckCards;
