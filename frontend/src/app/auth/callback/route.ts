import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('Error exchanging code for session:', error)
        return NextResponse.redirect(new URL('/auth/error', requestUrl.origin))
      }

      return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
    }

    return NextResponse.redirect(new URL('/', requestUrl.origin))
  } catch (error) {
    console.error('Error in callback route:', error)
    return NextResponse.redirect(new URL('/auth/error', new URL(request.url).origin))
  }
}
