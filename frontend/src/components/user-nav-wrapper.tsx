"use client"

import { useEffect, useState, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { createClient } from "@/utils/supabase/client"
import { NavUser } from "@/components/nav-user"

const defaultUser = {
  name: "[ viewing as guest ]",
  email: "→ log in to continue ←",
  avatar: "/avatars/shadcn.jpg",
}

export function UserNavWrapper() {
  const [user, setUser] = useState(defaultUser)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const supabase = createClient()

  const getUser = useCallback(async () => {
    try {
      const { data: { user: authUser }, error } = await supabase.auth.getUser()
      
      if (error || !authUser) {
        setUser(defaultUser)
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single()

      if (profile) {
        setUser({
          name: `[ ${profile.full_name} ]`,
          email: profile.email,
          avatar: profile.avatar_url || getInitialAvatar(profile.full_name),
        })
      } else {
        setUser(defaultUser)
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

    const handleAuthChange = async (event: string) => {
      if (!mounted) return

      if (event === 'SIGNED_OUT') {
        setUser(defaultUser)
        setIsLoading(false)
      } else {
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
  }, [supabase, getUser])

  // Verify session on navigation
  useEffect(() => {
    const verifySession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session && user.name !== defaultUser.name) {
        setUser(defaultUser)
      } else if (session && user.name === defaultUser.name) {
        await getUser()
      }
    }
    verifySession()
  }, [pathname, searchParams, supabase, user.name, getUser])

  if (isLoading && !user) {
    return null
  }

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
