"use client";

import { Button } from "@/components/ui/button";
import { ClientOnly } from "@/components/client-only";
import { signInWithGoogle } from "@/lib/auth-actions";
import Image from "next/image";
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
    <ClientOnly>
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2 h-10"
        onClick={handleGoogleSignIn}
      >
        <div className="relative size-5">
          <Image
            src="/google.svg"
            alt="Google"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span>Sign in with Google</span>
      </Button>
    </ClientOnly>
  );
};

export default SignInWithGoogleButton;
