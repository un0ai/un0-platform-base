import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  
  if (!code) {
    console.error('No code in request')
    return NextResponse.redirect(new URL('/error', url))
  }

  const supabase = createClient()
  
  try {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) {
      console.error('Error exchanging code:', error)
      return NextResponse.redirect(new URL('/error', url))
    }
  } catch (error) {
    console.error('Exception exchanging code:', error)
    return NextResponse.redirect(new URL('/error', url))
  }

  return NextResponse.redirect(new URL('/dashboard', url))
}
