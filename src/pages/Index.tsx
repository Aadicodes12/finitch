"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission, e.g., send it to an API
    console.log("Email submitted:", email);
    alert(`Thank you for joining the waitlist, ${email}!`);
    setEmail(""); // Clear the input after submission
  };

  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-center p-4"
    >
      {/* Diagnostic: Using an <img> tag to check if the image loads */}
      <img
        src="/finitch-landing.jpg"
        alt="Finitch Landing"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto text-gray-900 space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4">Finitch</h1>
        <p className="text-2xl md:text-3xl mb-8">Financial news.Decoded</p>
        <p className="text-xl md:text-2xl mb-6">Get on our waitlist now!</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:outline-none bg-white/80 text-gray-900 placeholder-gray-500"
            required
          />
          <Button 
            type="submit" 
            className="w-full sm:w-auto px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
      <div className="absolute bottom-4 z-10">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;