"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useBetaAccess } from "@/hooks/use-beta-access"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, CheckCircle2, Clock } from "lucide-react"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

const projectTypes = [
  { value: 'ai_agent', label: 'AI Agent Development' },
  { value: 'integration', label: 'Platform Integration' },
  { value: 'automation', label: 'Workflow Automation' },
  { value: 'research', label: 'Research & Development' },
  { value: 'other', label: 'Other' },
] as const

const formSchema = z.object({
  projectType: z.enum(['ai_agent', 'integration', 'automation', 'research', 'other'], {
    required_error: "Please select a project type.",
  }),
  projectDescription: z.string().min(25, {
    message: "Please provide at least 25 characters describing your project.",
  }),
  useCase: z.string().min(25, {
    message: "Please provide at least 25 characters describing your use case.",
  }),
})

export function AccessRequestForm() {
  const { status, isLoading, requestAccess } = useBetaAccess()
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const supabase = createClient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: undefined,
      projectDescription: "",
      useCase: "",
    },
  })

  useEffect(() => {
    async function getUserData() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name, email')
          .eq('id', user.id)
          .single()

        if (profile) {
          setUserData({
            name: profile.full_name,
            email: profile.email
          })
        }
      }
    }
    getUserData()
  }, [supabase])

  if (isLoading || !userData) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (status === 'pending') {
    return (
      <Alert className="bg-muted">
        <Clock className="h-5 w-5" />
        <AlertTitle className="text-lg font-semibold">Application Under Review</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-2">
            Thanks for your interest in the private beta! Our team is currently reviewing your application.
          </p>
          <p className="text-sm text-muted-foreground">
            We'll notify you at {userData.email} once your access is granted. This usually takes 24-48 hours.
          </p>
        </AlertDescription>
      </Alert>
    )
  }

  if (status === 'approved') {
    return (
      <Alert className="bg-primary/10">
        <CheckCircle2 className="h-5 w-5 text-primary" />
        <AlertTitle className="text-lg font-semibold">Welcome to the Private Beta!</AlertTitle>
        <AlertDescription className="mt-2">
          <p>You have full access to all beta features. Start exploring and building amazing things!</p>
        </AlertDescription>
      </Alert>
    )
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      await requestAccess({
        fullName: userData.name,
        email: userData.email,
        projectType: values.projectType,
        projectDescription: values.projectDescription,
        useCase: values.useCase
      })
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What type of project do you want to build?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your project</FormLabel>
              <FormDescription>
                What are you planning to build? What problems are you trying to solve?
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="I'm working on a project that..."
                  className="resize-none min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="useCase"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How do you plan to use our platform?</FormLabel>
              <FormDescription>
                Describe your specific use case and what features you're most interested in.
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="I plan to use the platform for..."
                  className="resize-none min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  )
}
