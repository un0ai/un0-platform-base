"use client"

import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type LucideIcon,
} from "lucide-react"

import { ClientOnly } from "@/components/client-only"

export type Icon = LucideIcon

export const Icons = {
  logo: (props: LucideProps) => (
    <ClientOnly>
      <Command {...props} />
    </ClientOnly>
  ),
  close: (props: LucideProps) => (
    <ClientOnly>
      <X {...props} />
    </ClientOnly>
  ),
  spinner: (props: LucideProps) => (
    <ClientOnly>
      <Loader2 {...props} />
    </ClientOnly>
  ),
  chevronLeft: (props: LucideProps) => (
    <ClientOnly>
      <ChevronLeft {...props} />
    </ClientOnly>
  ),
  chevronRight: (props: LucideProps) => (
    <ClientOnly>
      <ChevronRight {...props} />
    </ClientOnly>
  ),
  trash: (props: LucideProps) => (
    <ClientOnly>
      <Trash {...props} />
    </ClientOnly>
  ),
  settings: (props: LucideProps) => (
    <ClientOnly>
      <Settings {...props} />
    </ClientOnly>
  ),
  user: (props: LucideProps) => (
    <ClientOnly>
      <User {...props} />
    </ClientOnly>
  ),
  arrowRight: (props: LucideProps) => (
    <ClientOnly>
      <ArrowRight {...props} />
    </ClientOnly>
  ),
  help: (props: LucideProps) => (
    <ClientOnly>
      <HelpCircle {...props} />
    </ClientOnly>
  ),
  pizza: (props: LucideProps) => (
    <ClientOnly>
      <Pizza {...props} />
    </ClientOnly>
  ),
  sun: (props: LucideProps) => (
    <ClientOnly>
      <SunMedium {...props} />
    </ClientOnly>
  ),
  moon: (props: LucideProps) => (
    <ClientOnly>
      <Moon {...props} />
    </ClientOnly>
  ),
  laptop: (props: LucideProps) => (
    <ClientOnly>
      <Laptop {...props} />
    </ClientOnly>
  ),
  google: (props: LucideProps) => (
    <ClientOnly>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
        {...props}
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        ></path>
      </svg>
    </ClientOnly>
  ),
}
