"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="dark:bg-black"></div>;

  return (
    <div
      className="p-6 md:p-10 border-t-2 border-foreground flex md:flex-row justify-between bg-background relative"
      style={{
        backgroundImage: `url(${
          theme === "dark" ? "/images/whiteForest.svg" : "/images/forrest.svg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className='mb-6 md:mb-0 relative z-10 border-2 border-foreground bg-background p-2 md:p-4'>
        <h6 className='text-sm font-bitter lowercase'>dark forest.</h6>
        <p className='text-xs mt-2 mb-2'>
          You can do better. Let us help.
        </p>
        {/* <button className="w-full sm:w-auto px-6 py-2 text-lg md:text-2xl bg-black hover:bg-background dark:hover:bg-foreground dark:hover:text-background text-background dark:text-foreground hover:text-black border-2 border-foreground hover:border-black font-display">
          CALL US
        </button> */}
      </div>
    
      <div className='mb-6 md:mb-0 relative z-10 border-2 border-foreground bg-background p-2 md:p-4'>
        <h6 className='text-sm mb-2 font-bitter lowercase'>
          DROP A LINE
        </h6>
        <p className='text-xs'>
          justinguerrerowork@gmail.com
        </p>
          
      </div>
    </div>
  );
}
