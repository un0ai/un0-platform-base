"use client"

import { useEffect, useState } from 'react'
import { createClient } from "@/utils/supabase/client"
import { useToast } from "@/hooks/use-toast"

export type BetaStatus = 'not_requested' | 'pending' | 'approved' | 'rejected'

export function useBetaAccess() {
  const [status, setStatus] = useState<BetaStatus>('not_requested')
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()
  const { toast } = useToast()

  const checkBetaAccess = async () => {
    try {
      const { data: { session }, error: authError } = await supabase.auth.getSession()
      
      if (authError) {
        console.error('Auth error:', authError.message)
        setStatus('not_requested')
        setIsLoading(false)
        return
      }

      if (!session) {
        setStatus('not_requested')
        setIsLoading(false)
        return
      }

      const { data: accessRequest, error: dbError } = await supabase
        .from('access_requests')
        .select('status')
        .eq('email', session.user.email)
        .maybeSingle()

      if (dbError) {
        console.error('Database error:', dbError.message)
        setStatus('not_requested')
      } else if (accessRequest) {
        setStatus(accessRequest.status as BetaStatus || 'pending')
      } else {
        setStatus('not_requested')
      }
    } catch (error: any) {
      console.error('Error checking beta access:', error.message || error)
      setStatus('not_requested')
    } finally {
      setIsLoading(false)
    }
  }

  const requestAccess = async (values: { 
    fullName: string, 
    email: string, 
    projectType: string,
    projectDescription: string,
    useCase: string 
  }) => {
    try {
      const { data: { session }, error: authError } = await supabase.auth.getSession()
      
      if (authError) throw authError
      if (!session) throw new Error('Please sign in to request beta access')

      // Check if user already requested access
      const { data: existingRequest, error: checkError } = await supabase
        .from('access_requests')
        .select('status')
        .eq('email', session.user.email)
        .maybeSingle()

      if (checkError) throw checkError

      if (existingRequest) {
        toast({
          title: "Already Requested",
          description: "You have already submitted a request for beta access. We'll notify you via email when access is granted.",
        })
        setStatus(existingRequest.status as BetaStatus || 'pending')
        return false
      }

      // Format the reason field to include all information
      const formattedReason = `
Project Type: ${values.projectType}

Project Description:
${values.projectDescription}

Use Case:
${values.useCase}
`.trim()

      // Submit new request
      const { error: insertError } = await supabase
        .from('access_requests')
        .insert([
          {
            name: values.fullName,
            email: session.user.email,
            reason: formattedReason,
            status: 'pending'
          }
        ])

      if (insertError) throw insertError

      setStatus('pending')
      toast({
        title: "Request Submitted",
        description: "Your beta access request has been submitted successfully. We'll review it shortly.",
      })
      return true
    } catch (error: any) {
      console.error('Error requesting beta access:', error.message || error)
      toast({
        title: "Error",
        description: error.message || "Failed to submit beta access request. Please try again.",
        variant: "destructive",
      })
      return false
    }
  }

  useEffect(() => {
    let mounted = true

    const handleAuthChange = async (event: string) => {
      if (!mounted) return
      if (event === 'SIGNED_OUT') {
        setStatus('not_requested')
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        await checkBetaAccess()
      }
    }

    // Initial check
    checkBetaAccess()

    // Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(handleAuthChange)

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  return {
    status,
    isLoading,
    checkBetaAccess,
    requestAccess
  }
}
