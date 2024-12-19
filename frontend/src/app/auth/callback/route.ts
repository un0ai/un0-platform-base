import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (!code) {
      console.error('No code present in callback')
      return NextResponse.redirect(new URL('/auth/error', requestUrl.origin))
    }

    const supabase = await createClient()
    console.log('Exchanging code for session')
    
    const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('Error exchanging code for session:', error)
      return NextResponse.redirect(new URL('/auth/error', requestUrl.origin))
    }

    if (!session?.user) {
      console.error('No session or user after code exchange')
      return NextResponse.redirect(new URL('/auth/error', requestUrl.origin))
    }

    console.log('Session obtained for user:', session.user.email)

    // Get the existing metadata
    const existingMetadata = session.user.user_metadata || {}
    
    // Prepare the user data
    const userData = {
      full_name: existingMetadata.full_name || 
                 existingMetadata.name || 
                 `${existingMetadata.given_name || ''} ${existingMetadata.family_name || ''}`.trim(),
      avatar_url: existingMetadata.avatar_url || null,
      email: session.user.email
    }

    console.log('Prepared user data:', userData)

    // Check if profile exists
    console.log('Checking for existing profile')
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (!existingProfile) {
      console.log('No existing profile found, creating one')
      const { error: insertError } = await supabase
        .from('profiles')
        .insert([{
          id: session.user.id,
          ...userData
        }])

      if (insertError) {
        console.error('Error creating profile:', insertError)
        // Don't redirect to error as the user is still authenticated
      }
    } else {
      console.log('Existing profile found:', existingProfile.id)
    }

    // Update the user metadata to ensure consistency
    const { error: updateError } = await supabase.auth.updateUser({
      data: userData
    })

    if (updateError) {
      console.error('Error updating user metadata:', updateError)
      // Continue anyway as this is not critical
    }

    return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
  } catch (error) {
    console.error('Error in callback route:', error)
    return NextResponse.redirect(new URL('/auth/error', new URL(request.url).origin))
  }
}
