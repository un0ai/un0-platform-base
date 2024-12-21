import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function ProtectedRoute() {
  const supabase = createClient()

  const { data: { session }, error } = await supabase.auth.getSession()

  if (error || !session) {
    redirect('/login')
  }

  return null
}
