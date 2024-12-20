"use client"

import { useEffect, useState } from 'react'
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
  const supabase = createClient()

  useEffect(() => {
    async function getUser() {
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
        }
      } catch (error) {
        console.error('Error fetching user:', error)
        setUser(defaultUser)
      } finally {
        setIsLoading(false)
      }
    }

    // Initial fetch
    getUser()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === 'SIGNED_OUT') {
        setUser(defaultUser)
      } else {
        await getUser()
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [supabase])

  // Show nothing while loading to prevent flash of guest user
  if (isLoading) {
    return null
  }

  return <NavUser user={user} />
}

function getInitialAvatar(name: string) {
  // Get initials from the name
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // Create a simple avatar with initials
  const canvas = document.createElement('canvas')
  canvas.width = 100
  canvas.height = 100

  const context = canvas.getContext('2d')
  if (!context) return ''

  // Draw background
  context.fillStyle = '#4f46e5' // Indigo color
  context.fillRect(0, 0, canvas.width, canvas.height)

  // Draw text
  context.fillStyle = '#ffffff'
  context.font = 'bold 40px sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(initials, canvas.width / 2, canvas.height / 2)

  return canvas.toDataURL()
}
