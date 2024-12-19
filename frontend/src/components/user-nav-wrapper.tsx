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
  const supabase = createClient()

  useEffect(() => {
    async function getUser() {
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
    }

    // Initial fetch
    getUser()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async () => {
      getUser()
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  return <NavUser user={user} />
}

function getInitialAvatar(name: string) {
  if (!name) return "/avatars/shadcn.jpg"
  
  // Create a canvas to generate the initial avatar
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200
  
  const context = canvas.getContext('2d')
  if (!context) return "/avatars/shadcn.jpg"
  
  // Set background
  context.fillStyle = '#0f172a' // Dark background
  context.fillRect(0, 0, canvas.width, canvas.height)
  
  // Set text properties
  context.fillStyle = '#f8fafc' // Light text
  context.font = 'bold 100px system-ui'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  
  // Get the first letter of the name
  const initial = name.charAt(0).toUpperCase()
  
  // Draw the initial
  context.fillText(initial, canvas.width / 2, canvas.height / 2)
  
  // Convert to data URL
  return canvas.toDataURL('image/png')
}
