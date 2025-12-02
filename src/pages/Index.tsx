"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center
                 md:h-screen md:overflow-y-auto" // Added md:h-screen and md:overflow-y-auto here
      style={{ backgroundImage: `url('/finitch-landing.png')` }}
    >
      <div className="absolute top-[44%] left-[51.5%] -translate-x-[43%] -translate-y-1/2 w-full px-4 md:top-[43%] md:left-[34%] md:translate-x-0">
        <WaitlistForm />
      </div>

      {/* Placeholder content to demonstrate scrolling on desktop/tablet */}
      <div className="hidden md:block mt-[100vh] p-8 bg-white bg-opacity-80 w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Scroll Down for More!</h2>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="py-1 text-gray-800">This is additional content that will cause scrolling on desktop and tablet. Line {i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default Index;