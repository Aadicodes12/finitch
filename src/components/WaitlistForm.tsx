"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client"; // Import the Supabase client

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

    try {
      const { data, error } = await supabase
        .from("waitlist_emails")
        .insert([{ email: email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          toast.info("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        toast.success(`Thanks for joining the waitlist, ${email}!`);
        setEmail("");
      }
    } catch (error: any) {
      console.error("Error joining waitlist:", error.message);
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