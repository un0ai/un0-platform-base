"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

interface SignInWithGoogleButtonProps {
  text?: string;
  priority?: boolean;
}

export function SignInWithGoogleButton({ 
  text = "Login with Google",
  priority = false 
}: SignInWithGoogleButtonProps) {
  return (
    <Button
      type="button"
      variant={priority ? "default" : "outline"}
      className="w-full"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      {text}
    </Button>
  );
};