'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const LogoutPage = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Error signing out:', error);
          router.push('/auth/error?error=signout_failed');
          return;
        }
        router.push('/');
      } catch (error) {
        console.error('Error signing out:', error);
        router.push('/auth/error?error=signout_failed');
      }
    };

    handleLogout();
  }, [router, supabase.auth]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Signing you out...</p>
    </div>
  );
};

export default LogoutPage;