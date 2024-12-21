import Link from "next/link";
import { Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInWithGoogleButton from "../../login/components/SignInWithGoogleButton";

export function SignUpForm() {
  return (
    <Card className="mx-auto max-w-sm border-none bg-card/50 shadow-lg backdrop-blur">
      <CardHeader className="space-y-4 pb-8">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription className="text-muted-foreground/60">
            Join un0.ai to start building AI agents
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <SignInWithGoogleButton text="Sign up with Google" priority={true} />
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link 
              href="/login" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Sign in
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
