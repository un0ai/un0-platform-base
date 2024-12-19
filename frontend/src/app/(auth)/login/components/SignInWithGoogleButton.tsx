"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

const SignInWithGoogleButton = () => {
  const handleGoogleSignIn = async () => {
    try {
      const url = await signInWithGoogle();
      if (url) window.location.href = url;
    } catch (error) {
      console.error('Failed to sign in with Google:', error);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={handleGoogleSignIn}
    >
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;
