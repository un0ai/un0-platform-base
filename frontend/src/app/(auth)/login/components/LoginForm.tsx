import Link from "next/link";
import { Bot } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm border-none bg-card/50 shadow-lg backdrop-blur">
      <CardHeader className="space-y-4 pb-8">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Bot className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            
          </CardTitle>
          <CardDescription className="text-muted-foreground/60">
            Sign in to continue
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <SignInWithGoogleButton text="Sign in with Google" priority={true} />
          <div className="text-center text-sm">
            Don&apos;t have an account yet?{" "}
            <Link 
              href="/signup" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Create account
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
