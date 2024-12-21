import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SignInWithGoogleButtonProps {
  text?: string;
  priority?: boolean;
}

export function SignInWithGoogleButton({ 
  text = "Sign in with Google",
  priority = false 
}: SignInWithGoogleButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant={priority ? "default" : "outline"}
      type="button"
      onClick={() => signInWithGoogle()}
      className={`w-full relative ${priority ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-slate-100'}`}
    >
      <div className="flex items-center justify-center gap-3">
        <div className="bg-white p-1 rounded-sm">
          <Image
            src="/google.svg"
            alt="Google"
            width={18}
            height={18}
            className="flex-shrink-0"
          />
        </div>
        <span>{text}</span>
      </div>
    </Button>
  );
}
