"use client"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Acme Corp.</h1>
        <p className="text-lg text-muted-foreground">
          Startup Plan
        </p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">About the Project</h2>
        <p className="leading-7">
          Welcome to our innovative AI tools platform. We&apos;re dedicated to providing cutting-edge artificial intelligence solutions that help businesses and developers streamline their workflows and unlock new possibilities.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              To democratize access to advanced AI tools and empower teams to build better software faster.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Technology</h3>
            <p className="text-muted-foreground">
              Built with the latest technologies including Next.js, TypeScript, and state-of-the-art AI models.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Interactive AI Playground</li>
          <li>Advanced Model Management</li>
          <li>Comprehensive Documentation</li>
          <li>Team Collaboration Tools</li>
        </ul>
      </div>
    </div>
  )
}
