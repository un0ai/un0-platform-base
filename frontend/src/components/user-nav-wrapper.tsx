"use client"

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { createClient } from "@/utils/supabase/client"
import { NavUser } from "@/components/nav-user"

const defaultUser = {
  name: "[ guest user ]",
  email: "→ log in to your dashboard",
  avatar: "/avatars/shadcn.jpg",
}

export function UserNavWrapper() {
  const [user, setUser] = useState(defaultUser)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const supabase = createClient()

  const getUser = async () => {
    try {
      setIsLoading(true)
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
  }

  // Effect for auth state changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        setUser(defaultUser)
        setIsLoading(false)
      } else {
        await getUser()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  // Effect for initial load and path/search changes
  useEffect(() => {
    getUser()
  }, [pathname, searchParams])

  if (isLoading) {
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
