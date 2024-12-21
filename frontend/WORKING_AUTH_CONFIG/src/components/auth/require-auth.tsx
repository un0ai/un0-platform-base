import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

interface RequireAuthProps {
  children: React.ReactNode
}

export default async function RequireAuth({ children }: RequireAuthProps) {
  const supabase = createClient()

  const { data: { session }, error } = await supabase.auth.getSession()

  if (error || !session) {
    redirect('/login')
  }

  return <>{children}</>
}
