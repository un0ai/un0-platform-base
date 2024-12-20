import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Get the user data after successful authentication
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user && user.user_metadata) {
        // Ensure we're setting raw_user_meta_data correctly for the database trigger
        const metadata = {
          full_name: user.user_metadata.name || user.user_metadata.full_name,
          avatar_url: user.user_metadata.picture || user.user_metadata.avatar_url,
          email: user.email
        }

        // Update the user's raw metadata to match our trigger requirements
        const { error: updateError } = await supabase.auth.updateUser({
          data: metadata
        })

        if (updateError) {
          console.error('Error updating user metadata:', updateError)
          return NextResponse.redirect(`${requestUrl.origin}/auth/error?error=metadata_update_failed`)
        }

        // Force trigger profile creation if it doesn't exist
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            ...metadata
          }, {
            onConflict: 'id'
          })

        if (profileError) {
          console.error('Error creating profile:', profileError)
          return NextResponse.redirect(`${requestUrl.origin}/auth/error?error=profile_creation_failed`)
        }

        // Successful OAuth login, redirect to dashboard
        return NextResponse.redirect(`${requestUrl.origin}/dashboard`)
      }
    } else {
      console.error('Error exchanging code for session:', error)
      return NextResponse.redirect(`${requestUrl.origin}/auth/error?error=session_exchange_failed`)
    }
  }

  // If no code present, redirect to home with error
  return NextResponse.redirect(`${requestUrl.origin}/auth/error?error=no_code_provided`)
}
