import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const requestData = await request.json()
    const { fullName, email, reason } = requestData

    const supabase = createRouteHandlerClient({ cookies })

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
