"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Headphones, Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          Contact & Support
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Get in touch with our team
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Send us a message and we'll get back to you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Support Channels</CardTitle>
              <CardDescription>
                Multiple ways to get help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">
                      Chat with our support team in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Email Support</h4>
                    <p className="text-sm text-muted-foreground">
                      support@un0.ai
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Headphones className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Phone Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Available for Enterprise customers
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Community Forum</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with other developers
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Office Locations</CardTitle>
              <CardDescription>
                Find us around the world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">San Francisco</h4>
                  <p className="text-sm text-muted-foreground">
                    123 AI Street, San Francisco, CA 94105
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">London</h4>
                  <p className="text-sm text-muted-foreground">
                    456 Tech Lane, London, UK EC2A 4NE
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Singapore</h4>
                  <p className="text-sm text-muted-foreground">
                    789 Innovation Way, Singapore 018936
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
