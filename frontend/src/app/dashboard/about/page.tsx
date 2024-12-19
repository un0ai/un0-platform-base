"use client"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">[ un0.ai ]</h1>
        <p className="text-lg text-muted-foreground">
          MLOps Playground for AI agents
        </p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">About the Project</h2>
        <p className="leading-7">
        un0.ai is a platform designed to automate and manage AI agents&apos; lifecycle by leveraging a comprehensive MLOps approach. It integrates essential components such as data pipelines, model training, deployment, and observability into a unified system. <br/>The platform supports real-time monitoring and provides tools for orchestrating workflows, ensuring the efficient operation and scalability of ML systems and autonomous AI agents.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
            To create an accessible AI agent playground that enables teams to experiment, prototype, and deploy advanced AI-driven solutions efficiently and collaboratively.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Technology</h3>
            <p className="text-muted-foreground">
            Built using LangFlow for workflow orchestration, and with native monitoring support via LangSmith and LangFuse, <br/>un0.ai integrates with services like Flowise, VectorShift, Voiceflow, n8n, Make.com and Zapier for efficient building and deployment of AI models and pipelines.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Interactive AI Playground</li>
          <li>Advanced Model Management</li>
          <li>Workflow Orchestration</li>
          <li>CI/CD Pipelines</li>
          <li>Real-Time Observability</li> 
        </ul>
      </div>
    </div>
  )
}
