import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      const supabase = await createClient()
      const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('Error exchanging code for session:', error)
        return NextResponse.redirect(new URL('/auth/error', requestUrl.origin))
      }

      if (session?.user) {
        // Update the user metadata in auth.users which will trigger our database function
        const { error: updateError } = await supabase.auth.updateUser({
          data: {
            full_name: session.user.user_metadata.name || session.user.user_metadata.full_name,
            avatar_url: session.user.user_metadata.avatar_url,
            email: session.user.email
          }
        })

        if (updateError) {
          console.error('Error updating user metadata:', updateError)
          // Continue anyway as this is not critical
        }

        // Manually insert into profiles if the trigger failed
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (!existingProfile) {
          const { error: insertError } = await supabase
            .from('profiles')
            .insert([{
              id: session.user.id,
              full_name: session.user.user_metadata.name || session.user.user_metadata.full_name,
              avatar_url: session.user.user_metadata.avatar_url,
              email: session.user.email
            }])

          if (insertError) {
            console.error('Error creating profile:', insertError)
          }
        }
      }

      return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
    }

    return NextResponse.redirect(new URL('/', requestUrl.origin))
  } catch (error) {
    console.error('Error in callback route:', error)
    return NextResponse.redirect(new URL('/auth/error', new URL(request.url).origin))
  }
}
