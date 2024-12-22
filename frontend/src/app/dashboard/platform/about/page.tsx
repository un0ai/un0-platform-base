"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Code2, Cpu, GitBranch, LineChart, Rocket, Zap, Blocks } from "lucide-react"

export default function AboutPlatformPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      {/* Hero Section */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">About</h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          un0.ai is an AI agent playground streamlining the entire lifecycle of agent development. It integrates MLOps best practices—version control, CI/CD, infrastructure as code—to enable rapid prototyping, testing, and scalability.
        </p>
      </div>
      
      {/* Tech Stack Section */}
      <div className="p-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Blocks className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Tech Stack</h2>
            </div>
          </div>
          <p className="px-6 pb-6 leading-7 text-foreground/90 dark:text-foreground/90 [&_a]:relative [&_a]:inline-flex [&_a]:text-primary [&_a]:font-semibold [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-200 [&_a]:after:absolute [&_a]:after:bottom-0 [&_a]:after:left-0 [&_a]:after:h-[2px] [&_a]:after:w-full [&_a]:after:origin-bottom-right [&_a]:after:scale-x-100 [&_a]:after:bg-gradient-to-r [&_a]:after:from-primary/40 [&_a]:after:to-primary/40 [&_a]:after:transition-transform [&_a]:after:duration-200 [&_a]:hover:text-primary [&_a]:hover:after:origin-bottom-left [&_a]:hover:after:scale-x-100 [&_a]:hover:after:bg-gradient-to-r [&_a]:hover:after:from-primary [&_a]:hover:after:to-primary dark:[&_a]:text-primary/90 dark:[&_a]:after:from-primary/50 dark:[&_a]:after:to-primary/50 dark:[&_a]:hover:text-primary">
            Built using <a href="https://python.langchain.com/" target="_blank">LangChain</a> and <a href="https://langchain-ai.github.io/langgraph/" target="_blank">LangGraph</a> for AI workflow orchestration, and with native monitoring support via <a href="https://smith.langchain.com/" target="_blank">LangSmith</a> and <a href="https://langfuse.com/" target="_blank">LangFuse</a>, un0.ai integrates seamlessly with services such as <a href="https://flowiseai.com/" target="_blank">Flowise</a>, <a href="https://vectorshift.ai/" target="_blank">VectorShift</a>, <a href="https://www.voiceflow.com/" target="_blank">Voiceflow</a>, <a href="https://n8n.io/" target="_blank">n8n</a>, <a href="https://www.make.com/" target="_blank">Make.com</a>, and <a href="https://zapier.com/" target="_blank">Zapier</a> to streamline the design and deployment of AI models and pipelines. Real-time observability and monitoring ensure continuous optimization, while <a href="https://github.com/logspace-ai/langflow" target="_blank">LangFlow</a>, <a href="https://www.datastax.com/products/datastax-astra" target="_blank">DataStax Astra</a>, and <a href="https://cassandra.apache.org/" target="_blank">Apache Cassandra DB</a> deliver reliable and scalable data management.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 p-6 pt-0">
            <Card className="rounded-lg border bg-card shadow-sm transition-colors hover:bg-accent/50">
              <CardHeader className="p-4 space-y-1">
                <div className="flex items-center space-x-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Rapid Iteration</h3>
                </div>
                <p className="text-muted-foreground">
                  Validate ideas quickly, iterate faster, and refine agents in a scalable environment.
                </p>
              </CardHeader>
            </Card>
            
            <Card className="rounded-lg border bg-card shadow-sm transition-colors hover:bg-accent/50">
              <CardHeader className="p-4 space-y-1">
                <div className="flex items-center space-x-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">MLOps Integration</h3>
                </div>
                <p className="text-muted-foreground">
                  Incorporate best practices and tooling for consistent, efficient workflows.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">Key Features</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>Interactive AI Playground</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Experiment with AI models in a hands-on environment designed for innovation
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <Rocket className="h-5 w-5 text-primary" />
                <span>Rapid Prototyping</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Build and test AI solutions in minutes, not days
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <Cpu className="h-5 w-5 text-primary" />
                <span>Advanced Model Management</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Centralized control for your AI models and versions
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>Agentic AI Workflows</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Orchestrate complex AI agents with intuitive workflow tools
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <LineChart className="h-5 w-5 text-primary" />
                <span>Scalable Design</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Deploy agents that grow seamlessly with your needs
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <GitBranch className="h-5 w-5 text-primary" />
                <span>CI/CD Integration</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Automated pipelines for continuous AI deployment
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <LineChart className="h-5 w-5 text-primary" />
                <span>Real-Time Monitoring</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Live insights into your AI systems' performance
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span>Flexible Integration</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Connect with the latest AI tools and services
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base space-x-2">
                <GitBranch className="h-5 w-5 text-primary" />
                <span>MLOps Excellence</span>
              </CardTitle>
              <CardContent className="p-0 pt-2 text-sm text-muted-foreground">
                Industry-leading practices for AI lifecycle management
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
