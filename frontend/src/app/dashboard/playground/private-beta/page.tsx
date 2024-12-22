"use client"

import { AccessRequestForm } from "@/components/forms/AccessRequestForm"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Zap, Shield, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProtectedPage } from "@/components/auth/protected-page"

const features = [
  {
    icon: Sparkles,
    title: "Early Access",
    description: "Be among the first to experience our cutting-edge AI technology.",
  },
  {
    icon: Shield,
    title: "Priority Support",
    description: "Get dedicated support and direct access to our development team.",
  },
  {
    icon: Zap,
    title: "Exclusive Features",
    description: "Access experimental features before they're publicly available.",
  },
  {
    icon: Rocket,
    title: "Shape the Future",
    description: "Provide feedback that directly influences product development.",
  },
]

export default function PrivateBetaPage() {
  return (
    <ProtectedPage
      title="Private Beta Access"
      description="Join our exclusive beta program and help shape the future of AI development."
    >
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-4xl font-bold">Private Beta Access</h1>
            <Badge variant="secondary" className="text-sm">Limited Availability</Badge>
          </div>
          <p className="text-muted-foreground text-lg">
            Join our exclusive beta program and help shape the future of AI development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "animate-fade-in-up",
                "opacity-0",
                `animation-delay-${index * 100}`
              )}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards"
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Request Access</h2>
                <p className="text-muted-foreground">
                  Fill out the form below to join our private beta program.
                </p>
              </div>
              <AccessRequestForm />
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Applications are reviewed within 48 hours. We'll notify you via email once your access is granted.
          </p>
        </div>
      </div>
    </ProtectedPage>
  )
}
