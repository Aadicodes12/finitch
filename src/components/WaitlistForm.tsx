"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this email to your backend
      console.log("Joining waitlist with email:", email);
      toast.success(`Thanks for joining the waitlist, ${email}!`);
      setEmail("");
    } else {
      toast.error("Please enter your email address.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xs items-center space-x-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-blue-500 focus:ring-blue-500 flex-grow"
      />
      <Button type="submit" size="icon" className="h-12 w-12 bg-black hover:bg-gray-800 text-white">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default WaitlistForm;