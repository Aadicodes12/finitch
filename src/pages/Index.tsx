"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url('/finitch-landing.png')` }}
    >
      <div className="absolute top-[44%] left-[51.5%] -translate-x-[43%] -translate-y-1/2 w-full px-4 md:top-[43%] md:left-[34%] md:translate-x-0">
        <WaitlistForm />
      </div>
    </div>
  );
};

export default Index;