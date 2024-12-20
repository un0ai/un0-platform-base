"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";
import Image from "next/image";

interface SignInWithGoogleButtonProps {
  text?: string;
  priority?: boolean;
}

const SignInWithGoogleButton = ({ 
  text = "Login with Google",
  priority = false 
}: SignInWithGoogleButtonProps) => {
  return (
    <Button
      type="button"
      variant={priority ? "default" : "outline"}
      size="lg"
      className={`w-full relative ${priority ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-slate-100'}`}
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <div className="flex items-center justify-center gap-3">
        <div className="bg-white p-1 rounded-sm">
          <Image
            src="/google.svg"
            alt="Google"
            width={18}
            height={18}
            className="flex-shrink-0"
          />
        </div>
        <span className={priority ? 'text-white font-medium' : ''}>
          {text}
        </span>
      </div>
    </Button>
  );
};

export default SignInWithGoogleButton;