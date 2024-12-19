import { createClient } from '@supabase/supabase-js'
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const requestData = await request.json()
    const { fullName, email, reason } = requestData

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables')
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    })

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

    if (error) throw error

    return NextResponse.json({ message: "Access request submitted successfully" })
  } catch (error) {
    console.error("Error submitting access request:", error)
    return NextResponse.json(
      { error: "Failed to submit access request" },
      { status: 500 }
    )
  }
}
