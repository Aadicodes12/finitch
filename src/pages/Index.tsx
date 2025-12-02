"use client";

import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white relative overflow-hidden">
      <img
        src="/finitch-landing-new.png"
        alt="Finitch Landing Page"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute top-[43%] left-1/2 -translate-x-[43%] -translate-y-1/2 w-full px-4 md:left-[34%] md:translate-x-0">
        <WaitlistForm />
      </div>
    </div>
  );
};

export default Index;