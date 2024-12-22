"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/toaster"
import ContactForm from "@/components/contact-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  MessagesSquare,
  Mail,
  Bot,
  GitBranch,
  Globe,
  Clock,
  Rocket,
  MessageCircleQuestion,
  Code2,
} from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen bg-background">
        <div className="w-full max-w-[1200px] space-y-8 px-4 py-8">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MessagesSquare className="h-10 w-10 text-primary" />
              <div>
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Contact & Support
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Get help from our AI-powered support system or connect with our team
                </p>
              </div>
            </div>
            <Separator className="my-4" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column: Support Options */}
            <div className="space-y-6">
              {/* AI Support Card */}
              <Card className="border-none shadow-sm bg-muted/50">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">AI-Powered Support</CardTitle>
                  </div>
                  <CardDescription>Get instant help from our advanced AI support system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Platform Assistant */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-medium">Platform Assistant</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our AI assistant can help with platform usage, integration questions, and technical support.
                    </p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="w-full" variant="default">
                          <MessageCircleQuestion className="mr-2 h-4 w-4" />
                          Chat with AI
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Start AI Support Session</AlertDialogTitle>
                          <AlertDialogDescription>
                            Contact our AI support at <span className="font-medium">ai-support@un0.dev</span>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>

                  {/* Developer Support */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-medium">Developer Support</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get help with code examples, API usage, and integration patterns.
                    </p>
                    <Button className="w-full" variant="outline">
                      <GitBranch className="mr-2 h-4 w-4" />
                      Technical Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise Solutions Card */}
              <Card className="border-none shadow-sm bg-muted/50">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Enterprise Solutions</CardTitle>
                  </div>
                  <CardDescription>Get dedicated support and custom solutions for your organization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-background/80 p-2.5 rounded-lg">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">24/7 Priority Support</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background/80 p-2.5 rounded-lg">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm">Global Coverage</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Contact Enterprise Team
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Connect Card */}
              <Card className="border-none shadow-sm bg-muted/50">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Quick Connect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-2.5 bg-background/80 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Sales</span>
                    </div>
                    <span className="text-sm text-muted-foreground">sales@un0.dev</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-background/80 rounded-lg">
                    <div className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Partnerships</span>
                    </div>
                    <span className="text-sm text-muted-foreground">partners@un0.dev</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-background/80 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Press</span>
                    </div>
                    <span className="text-sm text-muted-foreground">press@un0.dev</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <Card className="border-none shadow-sm">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Send us a Message</CardTitle>
                  </div>
                  <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}
