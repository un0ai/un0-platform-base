"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error('Login error:', error);
    redirect("/auth/error?error=invalid_credentials");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const email = formData.get("email") as string;
  const fullName = `${firstName} ${lastName}`.trim();
  
  const data = {
    email: email,
    password: formData.get("password") as string,
    options: {
      data: {
        full_name: fullName,
        email: email,
        avatar_url: null // Will be generated from initials in the UI
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error('Signup error:', error);
    redirect("/auth/error?error=signup_failed");
  }

  // Redirect to email confirmation page
  redirect("/auth/verify-email");
}

export async function signout() {
  const supabase = createClient();
  
  // First clear the session
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Signout error:', error);
    redirect("/auth/error?error=signout_failed");
  }

  // Force revalidation of all pages
  revalidatePath("/", "layout");
  revalidatePath("/dashboard", "layout");
  
  // Add a timestamp to force a "new" URL even if it's the same path
  redirect("/dashboard?t=" + Date.now());
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      data: {
        full_name: undefined,  // This will be populated by Google OAuth data
        avatar_url: undefined, // This will be populated by Google OAuth data
        email: undefined,      // This will be populated by Google OAuth data
      }
    },
  });

  if (error) {
    console.error('Google sign-in error:', error);
    redirect("/auth/error?error=google_auth_failed");
  }

  redirect(data.url);
}
