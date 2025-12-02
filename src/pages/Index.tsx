"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/finitch-landing.png')` }}
    >
      <div className="absolute top-[44%] left-[51.5%] -translate-x-[43%] -translate-y-1/2 w-full px-4 md:top-[43%] md:left-[34%] md:translate-x-0">
        <WaitlistForm />
      </div>

      {/* Temporary element to force scrolling on desktop/tablet */}
      <div className="hidden md:block w-full h-[100vh] bg-transparent">
        {/* This empty div ensures there's content below the initial viewport height on desktop/tablet */}
        {/* You can replace this with your actual content that needs to be scrolled */}
      </div>
    </div>
  );
};

export default Index;