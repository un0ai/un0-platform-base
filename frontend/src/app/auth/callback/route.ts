import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      const supabase = await createClient()
      
      // Exchange the code for a session
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('Error exchanging code for session:', error)
        return NextResponse.redirect(new URL('/error', request.url))
      }

      // Redirect to the dashboard on success
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // If no code, redirect to home page
    return NextResponse.redirect(new URL('/', request.url))
  } catch (error) {
    console.error('Error in callback route:', error)
    return NextResponse.redirect(new URL('/error', request.url))
  }
}
