"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  try {
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log('Starting signup process for:', email);

    if (!firstName || !lastName || !email || !password) {
      console.error("Missing required fields");
      redirect("/error");
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        data: {
          full_name: `${firstName} ${lastName}`.trim(),
          email: email,
          avatar_url: null
        }
      }
    });

    console.log('Signup response:', { data, error });

    if (error) {
      console.error("Signup error:", error.message);
      redirect("/error");
    }

    if (!data.user) {
      console.error("No user returned from signup");
      redirect("/error");
    }

    // Manually create the profile since the trigger might not work immediately
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: data.user.id,
          full_name: `${firstName} ${lastName}`.trim(),
          email: email,
          avatar_url: null
        }
      ]);

    if (profileError) {
      console.error('Error creating profile:', profileError);
      // Continue anyway - the trigger might handle it
    }

    console.log('Redirecting to verify-email page');
    redirect("/auth/verify-email");

  } catch (error) {
    console.error("Unexpected error during signup:", error);
    redirect("/error");
  }
}

export async function signout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      scopes: "email profile",
    },
  });

  if (error) {
    console.error("Google sign-in error:", error);
    redirect("/error");
  }

  if (!data?.url) {
    console.error("No redirect URL received from Google auth");
    redirect("/error");
  }

  redirect(data.url);
}
