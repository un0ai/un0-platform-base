"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, LayoutDashboard, MessageCircle, MonitorSmartphone, Users } from "lucide-react";

export default function UseCasesPage() {
  const useCases = [
    {
      title: "AI Workflow Orchestration",
      description: "Design, test, and deploy complex AI workflows seamlessly, integrating multiple AI models and services for comprehensive solutions.",
      icon: Cpu,
      badges: ["Workflow Integration", "Model Coordination", "Service Orchestration"],
    },
    {
      title: "Real-Time Data Integration",
      description: "Incorporate live data streams into AI models, enhancing decision-making and responsiveness in dynamic environments.",
      icon: MonitorSmartphone,
      badges: ["Live Data", "Dynamic Modeling", "Real-Time Processing"],
    },
    {
      title: "Custom AI Tool Development",
      description: "Create bespoke AI tools through a user-friendly interface, allowing for rapid prototyping and deployment without extensive coding.",
      icon: LayoutDashboard,
      badges: ["Tool Creation", "Rapid Prototyping", "No-Code Solutions"],
    },
    {
      title: "Multi-Model AI Integration",
      description: "Combine various AI models, enabling users to leverage diverse capabilities within a single workflow.",
      icon: Database,
      badges: ["Model Integration", "Diverse Capabilities", "Unified Workflow"],
    },
    {
      title: "Autonomous Agent Simulation",
      description: "Develop and test AI agents capable of autonomous decision-making, applicable in scenarios like automated customer interactions or process optimizations.",
      icon: Users,
      badges: ["Agent Simulation", "Autonomous Decision-Making", "Process Optimization"],
    },
    {
      title: "Collaborative AI Development",
      description: "Enable teams to collaboratively build and manage AI projects, sharing resources and insights within a centralized platform.",
      icon: MessageCircle,
      badges: ["Team Collaboration", "Resource Sharing", "Centralized Management"],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Use Cases
        </h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Explore the diverse applications of un0.ai in AI development and integration.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </div>
              <useCase.icon className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {useCase.badges.map((badge, idx) => (
                    <Badge key={idx} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}