import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link
            href="/"
            className="flex items-center text-lg font-bold tracking-tight"
          >
            <span>Un0</span>
          </Link>
        </div>
      </div>
      <main className="flex flex-1 flex-col items-center justify-center py-10">
        {children}
      </main>
    </div>
  );
}
