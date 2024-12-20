import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const errorMessages = {
  invalid_credentials: {
    title: "Invalid Credentials",
    description: "The email or password you entered is incorrect. Please try again.",
  },
  signup_failed: {
    title: "Registration Failed",
    description: "We couldn't create your account. Please try again.",
  },
  signout_failed: {
    title: "Sign Out Failed",
    description: "There was a problem signing you out. Please try again.",
  },
  google_auth_failed: {
    title: "Google Authentication Failed",
    description: "There was a problem signing in with Google. Please try again.",
  },
  metadata_update_failed: {
    title: "Profile Update Failed",
    description: "There was a problem updating your profile. Please try again.",
  },
  profile_creation_failed: {
    title: "Profile Creation Failed",
    description: "There was a problem creating your profile. Please try again.",
  },
  session_exchange_failed: {
    title: "Authentication Failed",
    description: "There was a problem with your authentication. Please try again.",
  },
  email_verification_failed: {
    title: "Email Verification Failed",
    description: "We couldn't verify your email. The link might be expired or invalid.",
  },
  invalid_verification_params: {
    title: "Invalid Verification",
    description: "The verification link is invalid or missing required parameters.",
  },
  default: {
    title: "Something Went Wrong",
    description: "An unexpected error occurred. Please try again.",
  },
}

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const error = searchParams.error || "default"
  const errorMessage = errorMessages[error as keyof typeof errorMessages] || errorMessages.default

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>{errorMessage.title}</CardTitle>
          <CardDescription>{errorMessage.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Button asChild variant="default">
              <Link href="/login">Back to Login</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">Create Account</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
