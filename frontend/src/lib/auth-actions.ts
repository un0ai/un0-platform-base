'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function signInWithGoogle() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    console.error('OAuth error:', error)
    return redirect('/error')
  }

  return redirect(data.url)
}

export async function login(formData: FormData) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (error) {
    return redirect('/error')
  }

  return redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const firstName = formData.get('first-name') as string
  const lastName = formData.get('last-name') as string

  const { error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        full_name: `${firstName} ${lastName}`,
        email: formData.get('email') as string,
      },
    },
  })

  if (error) {
    return redirect('/error')
  }

  return redirect('/dashboard')
}

export async function signout() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    return redirect('/error')
  }

  return redirect('/')
}
