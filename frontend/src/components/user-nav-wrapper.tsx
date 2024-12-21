"use client"

import { useEffect, useState, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { NavUser } from "@/components/nav-user"

const defaultUser = {
  name: "guest",
  email: "→ sign in to continue ←",
  avatar: "/avatars/shadcn.jpg",
}

export function UserNavWrapper() {
  const [user, setUser] = useState(defaultUser)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const supabase = createClientComponentClient()

  const getUser = useCallback(async () => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      
      if (sessionError || !session?.user) {
        setUser(defaultUser)
        setIsLoading(false)
        return
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (profileError) {
        console.error('Error fetching profile:', profileError)
        setUser({
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
          avatar: session.user.user_metadata?.avatar_url || '/avatars/shadcn.jpg',
        })
        setIsLoading(false)
        return
      }

      if (profile) {
        setUser({
          name: profile.full_name || session.user.email?.split('@')[0] || 'User',
          email: profile.email || session.user.email || '',
          avatar: profile.avatar_url || '/avatars/shadcn.jpg',
        })
      } else {
        setUser({
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
          avatar: session.user.user_metadata?.avatar_url || '/avatars/shadcn.jpg',
        })
      }
    } catch (error) {
      console.error('Error fetching user:', error)
      setUser(defaultUser)
    } finally {
      setIsLoading(false)
    }
  }, [supabase])

  // Effect for auth state changes
  useEffect(() => {
    let mounted = true

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return

      if (event === 'SIGNED_OUT' || !session) {
        setUser(defaultUser)
        setIsLoading(false)
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        await getUser()
      }
    })

    // Initial fetch
    getUser()

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [supabase, getUser])

  // Verify session on navigation
  useEffect(() => {
    getUser()
  }, [pathname, searchParams, getUser])

  // Always render the NavUser component, just update its data
  return <NavUser user={user} />
}

function getInitialAvatar(name: string) {
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const canvas = document.createElement('canvas')
  canvas.width = 100
  canvas.height = 100

  const context = canvas.getContext('2d')
  if (!context) return ''

  context.fillStyle = '#4f46e5'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = '#ffffff'
  context.font = 'bold 40px sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(initials, canvas.width / 2, canvas.height / 2)

  return canvas.toDataURL()
}
