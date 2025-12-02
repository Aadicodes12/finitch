"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    const GOOGLE_APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"; // <<< REPLACE THIS WITH YOUR DEPLOYED SCRIPT URL

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script as a simple POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      // Note: When using 'no-cors', the response object will be opaque.
      // We can't read the actual response body (like status: 'success').
      // For a simple waitlist, we'll assume success if the fetch doesn't throw an error.
      // For more robust error handling, you'd need a proper backend or a more complex Apps Script setup.

      toast.success(`Thanks for joining the waitlist, ${email}!`);
      setEmail("");
    } catch (error) {
      console.error("Error joining waitlist:", error);
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-[280px] items-center space-x-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-8 bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-blue-500 focus:ring-blue-500 flex-grow"
        disabled={isLoading}
      />
      <Button type="submit" size="icon" className="h-8 w-8 bg-black hover:bg-gray-800 text-white" disabled={isLoading}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default WaitlistForm;