import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import { type EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/dashboard'

  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')

  if (token_hash && type) {
    const supabase = createRouteHandlerClient({ cookies })

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // Email verified successfully, redirect to dashboard
      redirectTo.searchParams.delete('next')
      return NextResponse.redirect(redirectTo)
    }

    // Email verification failed
    redirectTo.pathname = '/auth/error'
    redirectTo.searchParams.set('error', 'email_verification_failed')
    return NextResponse.redirect(redirectTo)
  }

  // Missing verification parameters
  redirectTo.pathname = '/auth/error'
  redirectTo.searchParams.set('error', 'invalid_verification_params')
  return NextResponse.redirect(redirectTo)
}