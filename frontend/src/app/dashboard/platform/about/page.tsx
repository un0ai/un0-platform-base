"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Server, 
  Workflow, 
  Shield, 
  Database, 
  GitBranch, 
  Cpu, 
  Network, 
  Activity, 
  History, 
  Brain,
  Code2,
  Bot,
  Cloud,
  Boxes,
  LineChart,
  Zap,
  Binary,
  Timer,
  Lock,
  Layers
} from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      {/* Hero Section */}
      <Card className="border-none shadow-md">
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">un0.ai Platform</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            Enterprise-grade MLOps and AIOps platform for orchestrating AI agents and tools at scale, 
            built on cloud-native architecture with advanced observability and automation.
          </p>
          <div className="flex gap-4">
            <a
              href="https://un0.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Visit Landing Page
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <Link
              href="/dashboard/about"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View Platform Overview
            </Link>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Origin Story */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <History className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">_hello-world</h2>
        </div>
        <p className="text-muted-foreground">
          un0.ai emerged from the real-world challenges of managing complex AI systems at scale. What began as an internal 
          solution for orchestrating AI agents has evolved into a comprehensive platform that addresses the critical needs 
          of modern MLOps and AIOps teams.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Initial Challenges</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Complex model deployment pipelines</li>
              <li>• Inconsistent agent scaling patterns</li>
              <li>• Limited model observability</li>
              <li>• Resource optimization issues</li>
              <li>• Model drift and monitoring gaps</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Evolution Milestones</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Kubernetes-native architecture</li>
              <li>• Advanced agent orchestration</li>
              <li>• Real-time model monitoring</li>
              <li>• Automated scaling solutions</li>
              <li>• Enterprise security integration</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* The Challenge of Modern Cloud Operations */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">The Challenge: Modern Cloud Operations</h2>
        </div>
        <p className="text-muted-foreground">
          In today's cloud-native landscape, the complexity of managing and operating distributed systems has grown exponentially. 
          Modern architectures involving microservices, serverless functions, and container orchestration have introduced new 
          layers of complexity that traditional operational approaches struggle to handle effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Operational Complexities</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Microservices interdependencies</li>
              <li>• Multi-cloud environment management</li>
              <li>• Container orchestration at scale</li>
              <li>• Service mesh complexity</li>
              <li>• Dynamic resource allocation</li>
              <li>• Distributed system debugging</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Scale Implications</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Increased operational overhead</li>
              <li>• Complex failure modes</li>
              <li>• Resource optimization challenges</li>
              <li>• Performance bottlenecks</li>
              <li>• Monitoring complexity</li>
              <li>• Cost management issues</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why AIOps Matters */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Why AIOps Matters</h2>
        </div>
        <p className="text-muted-foreground">
          The intersection of AI and Operations (AIOps) represents more than just automation - it's about creating intelligent
          systems that can understand, learn from, and adapt to the dynamic nature of modern cloud infrastructure. AIOps is
          becoming essential as traditional operational approaches reach their limits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Key Drivers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Growing system complexity</li>
              <li>• Need for real-time decision making</li>
              <li>• Scale and reliability demands</li>
              <li>• Dynamic infrastructure changes</li>
              <li>• Increasing security threats</li>
              <li>• Cost optimization needs</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">AIOps Benefits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Predictive incident management</li>
              <li>• Automated root cause analysis</li>
              <li>• Intelligent resource allocation</li>
              <li>• Pattern recognition in logs</li>
              <li>• Anomaly detection</li>
              <li>• Self-healing capabilities</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Technical Architecture */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Technical Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Cloud Infrastructure</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Built on modern cloud-native principles:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Kubernetes orchestration with custom controllers</li>
              <li>• Service mesh (Istio) for traffic management</li>
              <li>• Event-driven architecture with Apache Kafka</li>
              <li>• Multi-cluster federation support</li>
              <li>• Auto-scaling with KEDA and custom metrics</li>
              <li>• GitOps deployment with ArgoCD</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Agent Architecture</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Advanced agent management system:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Distributed task scheduling with Redis</li>
              <li>• State management using etcd</li>
              <li>• Custom CRDs for agent lifecycle</li>
              <li>• Prometheus metrics integration</li>
              <li>• Adaptive load balancing</li>
              <li>• Circuit breaker patterns</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">MLOps Pipeline</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              End-to-end model lifecycle management:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Model versioning with DVC</li>
              <li>• Training orchestration using Kubeflow</li>
              <li>• A/B testing infrastructure</li>
              <li>• Automated model validation</li>
              <li>• Feature store integration</li>
              <li>• Model serving with TensorRT</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Observability Stack</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Comprehensive monitoring solution:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Distributed tracing with OpenTelemetry</li>
              <li>• Custom model telemetry</li>
              <li>• Real-time model performance metrics</li>
              <li>• Grafana dashboards</li>
              <li>• ELK stack for log analytics</li>
              <li>• Custom alerting with Alertmanager</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Platform Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Security & Compliance</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Zero-trust security model</li>
              <li>• mTLS encryption</li>
              <li>• RBAC with OPA integration</li>
              <li>• Vault for secrets management</li>
              <li>• SOC 2 compliance tools</li>
              <li>• Audit logging system</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">DevOps Integration</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• GitOps workflow with Flux</li>
              <li>• CI/CD with GitHub Actions</li>
              <li>• Infrastructure as Code (Terraform)</li>
              <li>• Automated testing framework</li>
              <li>• Chaos engineering tools</li>
              <li>• Custom operator framework</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">AI Capabilities</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Multi-model orchestration</li>
              <li>• Automated model optimization</li>
              <li>• Custom model serving</li>
              <li>• Batch and real-time inference</li>
              <li>• Model A/B testing</li>
              <li>• Transfer learning pipeline</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Future Vision */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">The Future of AIOps</h2>
        </div>
        <p className="text-muted-foreground">
          Our vision extends beyond traditional MLOps and AIOps. We're building towards a future where AI systems are 
          truly autonomous, self-healing, and continuously evolving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Autonomous Systems</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Self-healing infrastructure</li>
              <li>• Automated capacity planning</li>
              <li>• Predictive scaling</li>
              <li>• Autonomous optimization</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Advanced AI</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Federated learning support</li>
              <li>• Multi-agent collaboration</li>
              <li>• Automated model architecture</li>
              <li>• Edge AI deployment</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Platform Evolution</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Quantum computing readiness</li>
              <li>• Cross-cloud federation</li>
              <li>• Advanced security features</li>
              <li>• Enhanced automation</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
