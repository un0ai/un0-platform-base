import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VerifyEmail() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle>Check your email</CardTitle>
        <CardDescription>
          We&apos;ve sent you a verification link. Please check your email to
          verify your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button asChild>
          <Link href="/login">Back to login</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
