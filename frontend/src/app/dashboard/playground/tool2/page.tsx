"use client"

import { Tool2 } from "@/components/features/Tool2"
import { RequireAuth } from "@/components/auth/require-auth"

export default function Tool2Page() {
  return (
    <RequireAuth>
      <Tool2 />
    </RequireAuth>
  )
}
