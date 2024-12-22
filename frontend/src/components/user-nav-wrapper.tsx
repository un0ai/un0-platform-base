"use client"

import { useEffect, useState, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { createClient } from "@/utils/supabase/client"
import { NavUser } from "@/components/nav-user"

const defaultUser = {
  name: "[ viewing as guest ]",
  email: "→ sign in to continue ←",
  avatar: "/avatars/un0-image4.jpeg",
}

function getInitialAvatar(name: string) {
  return `/avatars/un0-image${Math.floor(Math.random() * 5) + 1}.jpeg`
}

export function UserNavWrapper() {
  const [user, setUser] = useState(defaultUser)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  const getUser = useCallback(async () => {
    try {
      const { data: { session }, error: authError } = await supabase.auth.getSession()
      
      if (authError || !session) {
        setUser(defaultUser)
        setIsLoading(false)
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (profile) {
        setUser({
          name: `[ ${profile.full_name} ]`,
          email: profile.email,
          avatar: profile.avatar_url || getInitialAvatar(profile.full_name),
        })
      } else {
        setUser({
          name: `[ ${session.user.email?.split('@')[0]} ]`,
          email: session.user.email || '',
          avatar: getInitialAvatar(session.user.email || ''),
        })
      }
    } catch (error) {
      console.error('Error fetching user:', error)
      setUser(defaultUser)
    } finally {
      setIsLoading(false)
    }
  }, [supabase])

  const handleSignOut = useCallback(async () => {
    // Immediately update UI
    setUser(defaultUser)
    
    // Then clear the session
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
    }
  }, [supabase])

  useEffect(() => {
    let mounted = true

    const handleAuthChange = async (event: string, session: any) => {
      if (!mounted) return

      if (event === 'SIGNED_OUT') {
        setUser(defaultUser)
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        await getUser()
      }
    }

    // Initial fetch
    getUser()

    // Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(handleAuthChange)

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [getUser, supabase])

  if (isLoading) {
    return null
  }

  return <NavUser user={user} onSignOut={handleSignOut} />
}
