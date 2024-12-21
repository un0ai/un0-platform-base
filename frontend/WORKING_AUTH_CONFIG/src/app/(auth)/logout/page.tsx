import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Logout() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle>You have been logged out</CardTitle>
        <CardDescription>
          Thank you for using Un0. Have a great day!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href="/login">Sign in again</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
