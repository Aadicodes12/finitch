"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    // The main container for the landing page.
    // Setting background to bg-gray-100 for a slightly darker grey.
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-gray-100">
      <img
        src="/finitch-landing-new.png"
        alt="Finitch Landing Page"
        className="absolute inset-0 w-full h-full object-contain"
      />

      <div className="absolute top-[40.5%] left-1/2 -translate-x-1/2 w-full px-4 flex justify-center z-10">
        <WaitlistForm />
      </div>
    </div>
  );
};

export default Index;