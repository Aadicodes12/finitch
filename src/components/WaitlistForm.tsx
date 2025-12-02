"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      />
    </form>
  );
};

export default WaitlistForm;