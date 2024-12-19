import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const requestData = await request.json()
    const { fullName, email, reason } = requestData

    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      }
    )

    const { error } = await supabase
      .from("access_requests")
      .insert([
        {
          name: fullName,
          email,
          reason,
          status: "pending",
        },
      ])

    if (error) {
      throw error
    }

    return NextResponse.json(
      { message: "Access request submitted successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error submitting access request:", error)
    return NextResponse.json(
      { error: "Failed to submit access request" },
      { status: 500 }
    )
  }
}
