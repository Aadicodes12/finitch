"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-background p-4">
      <div className="flex-grow flex items-center justify-center w-full h-full">
        <img 
          src="/finitch-landing.jpg" 
          alt="Finitch Landing Page" 
          className="max-w-full h-auto object-contain"
        />
      </div>
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;