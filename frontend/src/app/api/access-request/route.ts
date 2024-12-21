import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })

    // Get the request data
    const data = await request.json()
    const { fullName, email, reason } = data

    // Create the access request
    const { error } = await supabase
      .from('access_requests')
      .insert([
        {
          name: fullName,
          email,
          reason,
          status: 'pending'
        }
      ])

    if (error) {
      console.error('Error creating access request:', error)
      return NextResponse.json(
        { error: 'Failed to create access request' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Access request created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in access request route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
