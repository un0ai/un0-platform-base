"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export function UserGreetText() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  if (user !== null) {
    return (
      <div className="text-sm text-muted-foreground">
        Welcome back, {user.user_metadata.full_name ?? "there"}!
      </div>
    );
  }

  return null;
}
