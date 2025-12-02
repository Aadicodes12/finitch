"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <>
      {/* Initial landing page section - always takes exactly full screen height */}
      <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
        {/* Using an <img> tag with object-contain to ensure the entire image is visible without clipping.
            Note: This might result in empty space (letterboxing/pillarboxing) if the image's aspect ratio
            doesn't perfectly match the screen's aspect ratio. */}
        <img
          src="/finitch-landing.jpg"
          alt="Finitch Landing Page"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Adjusted positioning for the WaitlistForm to align with the "Get on our waitlist now!" text in the image */}
        <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-full px-4 flex justify-center z-10">
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
    </>
  );
};

export default Index;