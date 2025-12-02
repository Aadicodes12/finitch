"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-start">
      {/* Initial landing page section - always takes at least full screen height */}
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
        style={{ backgroundImage: `url('/finitch-landing.png')` }}
      >
        <div className="absolute top-[44%] left-[51.5%] -translate-x-[43%] -translate-y-1/2 w-full px-4 md:top-[43%] md:left-[34%] md:translate-x-0">
          <WaitlistForm />
        </div>
      </div>

      {/* This is the content that should cause scrolling on desktop/tablet */}
      <div className="hidden md:block w-full bg-white bg-opacity-90 p-8 text-center text-gray-800">
        <h2 className="text-3xl font-bold mb-6">Welcome to the Scrollable Section!</h2>
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i} className="py-2 text-lg">
            This is line {i + 1} of content. It should definitely make the page scroll on desktop and tablet.
          </p>
        ))}
        <p className="mt-8 text-xl font-semibold">If you see this and no scrollbar, something is fundamentally wrong!</p>
      </div>
    </div>
  );
};

export default Index;