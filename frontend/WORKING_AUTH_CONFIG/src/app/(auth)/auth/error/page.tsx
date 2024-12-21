import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthError({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  const error = searchParams?.error || "unknown_error";
  
  let title = "Authentication Error";
  let description = "An error occurred during authentication. Please try again.";

  switch (error) {
    case "invalid_credentials":
      title = "Invalid Credentials";
      description = "The email or password you entered is incorrect. Please try again.";
      break;
    case "signup_failed":
      title = "Sign Up Failed";
      description = "There was a problem creating your account. Please try again.";
      break;
    case "google_auth_failed":
      title = "Google Sign In Failed";
      description = "There was a problem signing in with Google. Please try again.";
      break;
    case "signout_failed":
      title = "Sign Out Failed";
      description = "There was a problem signing you out. Please try again.";
      break;
    case "email_not_verified":
      title = "Email Not Verified";
      description = "Please verify your email address before signing in.";
      break;
    case "session_expired":
      title = "Session Expired";
      description = "Your session has expired. Please sign in again.";
      break;
    default:
      title = "Authentication Error";
      description = "An unexpected error occurred. Please try again.";
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button asChild variant="outline">
          <Link href="/login">Back to login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Create an account</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
