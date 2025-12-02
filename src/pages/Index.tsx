"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start bg-white relative">
      <img
        src="/finitch-landing.png"
        alt="Finitch Landing Page"
        className="w-full h-auto" // Image will scale to full width, height auto, maintaining aspect ratio
      />
      <div className="absolute top-[44%] left-[50.5%] -translate-x-[43%] -translate-y-1/2 w-full px-4 md:top-[43%] md:left-[34%] md:translate-x-0">
        <WaitlistForm />
      </div>
    </div>
  );
};

export default Index;