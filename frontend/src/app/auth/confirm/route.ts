import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    
    if (token_hash && type) {
      const supabase = await createClient()
      
      // Exchange the token hash for a session
      const { error } = await supabase.auth.verifyOtp({
        token_hash,
        type: type as any,
      })

      if (error) {
        console.error('Error verifying email:', error)
        return NextResponse.redirect(new URL('/error', request.url))
      }

      // Redirect to the dashboard on success
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // If no token_hash or type, redirect to home page
    return NextResponse.redirect(new URL('/', request.url))
  } catch (error) {
    console.error('Error in confirm route:', error)
    return NextResponse.redirect(new URL('/error', request.url))
  }
}
