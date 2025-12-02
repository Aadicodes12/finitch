"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 relative">
      <img
        src="/finitch-landing.jpg"
        alt="Finitch Landing Page"
        className="max-w-full max-h-screen object-contain"
      />
      <div className="absolute top-[43%] left-1/2 -translate-x-[44%] -translate-y-1/2 w-full px-4 md:left-[34%] md:translate-x-0">
        <WaitlistForm />
      </div>
    </div>
  );
};

export default Index;