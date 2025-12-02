"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Hello, Dyad!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your application is ready. Let's build something amazing!
      </p>
      <MadeWithDyad />
    </div>
  );
};

export default Index;