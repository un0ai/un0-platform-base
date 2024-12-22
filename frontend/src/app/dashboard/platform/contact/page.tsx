"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Headphones, Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
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

        {/* AI Support Section */}
        <Card className="border-none shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="h-6 w-6 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full animate-ping" />
              </div>
              <CardTitle>AI-Powered Support</CardTitle>
            </div>
            <CardDescription>Get instant help from our advanced AI support system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5" />
                    Platform Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our AI assistant can help with platform usage, integration questions, and technical support.
                  </p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="w-full">
                        <MessageCircleQuestion className="mr-2 h-4 w-4" />
                        Chat with AI
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Start AI Support Session</AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            Contact our AI support at <span className="font-medium">ai-support@un0.dev</span>
                            <div className="mt-2">Or use our platform's built-in AI assistant through:</div>
                            <ul className="list-disc list-inside">
                              <li>CLI tool: un0 support</li>
                              <li>API endpoint: /api/support</li>
                              <li>Web interface: Support tab</li>
                            </ul>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    Developer Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get help with code examples, API usage, and integration patterns.
                  </p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="w-full" variant="outline">
                        <GitBranch className="mr-2 h-4 w-4" />
                        Technical Support
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Developer Support Options</AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            Contact our developer support at <span className="font-medium">dev-support@un0.dev</span>
                            <div className="mt-2">Available Resources:</div>
                            <ul className="list-disc list-inside">
                              <li>API Documentation</li>
                              <li>Integration Examples</li>
                              <li>GitHub Discussions</li>
                              <li>Community Forums</li>
                            </ul>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Human Support Section */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-primary" />
              <CardTitle>Human Support</CardTitle>
            </div>
            <CardDescription>Connect with our team for specialized assistance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Enterprise Solutions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get dedicated support and custom solutions for your organization
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">24/7 Priority Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Global Coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Custom Integration Support</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Contact Enterprise Team
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Quick Connect</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Sales</span>
                      </div>
                      <span className="text-sm text-muted-foreground">sales@un0.dev</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Partnerships</span>
                      </div>
                      <span className="text-sm text-muted-foreground">partners@un0.dev</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Press</span>
                      </div>
                      <span className="text-sm text-muted-foreground">press@un0.dev</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Send us a Message</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
                <ContactForm />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="text-center space-y-2 pt-4">
          <p className="text-sm text-muted-foreground">
            General Inquiries: <span className="font-medium">contact@un0.dev</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Based in Silicon Valley, California • Available Globally
          </p>
        </div>
      </div>
      <Toaster />
    </>
  )
}
