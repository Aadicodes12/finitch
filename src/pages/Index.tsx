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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-background p-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-foreground mb-4">Finitch</h1>
        <p className="text-2xl text-gray-700 dark:text-muted-foreground">Financial news.Decoded</p>
        <p className="text-xl text-gray-800 dark:text-foreground mt-8">Get on our waitlist now!</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-sm w-full sm:w-auto px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:outline-none dark:bg-card dark:text-card-foreground"
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
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;