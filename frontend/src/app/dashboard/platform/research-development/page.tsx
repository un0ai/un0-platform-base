"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Beaker,
  Brain,
  Blocks,
  Code2,
  Network,
  Bot,
  Puzzle,
  Sparkles,
  Workflow,
  BookOpen,
  GitBranch,
  Lightbulb,
  Zap,
  MessagesSquare,
  Share2,
  Database
} from "lucide-react"

export default function ResearchDevelopmentPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Beaker className="h-10 w-10 text-primary animate-pulse" />
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Research & Development
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Explore the capabilities of our AI Platform
            </p>
          </div>
        </div>
        <Alert>
          <Sparkles className="h-4 w-4" />
          <AlertDescription>
            Our platform provides a comprehensive environment for AI research, development, and integration.
          </AlertDescription>
        </Alert>
        <Separator className="my-4" />
      </div>

      <Tabs defaultValue="capabilities" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
          <TabsTrigger value="capabilities">Platform Capabilities</TabsTrigger>
          <TabsTrigger value="integration">Integration Guide</TabsTrigger>
          <TabsTrigger value="examples">Example Use Cases</TabsTrigger>
        </TabsList>

        {/* Platform Capabilities Tab */}
        <TabsContent value="capabilities" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-primary" />
                  <CardTitle>Core AI Features</CardTitle>
                </div>
                <CardDescription>
                  Built-in AI capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        <MessagesSquare className="h-4 w-4" />
                        Language Models
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Multiple LLM providers integration</li>
                        <li>• Custom model fine-tuning</li>
                        <li>• Context-aware responses</li>
                        <li>• Multi-language support</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        AI Agents
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Autonomous agent creation</li>
                        <li>• Custom behavior definition</li>
                        <li>• Multi-agent communication</li>
                        <li>• Task automation</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        <Code2 className="h-4 w-4" />
                        Code Generation
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Smart code completion</li>
                        <li>• Code transformation</li>
                        <li>• Documentation generation</li>
                        <li>• Multiple language support</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Blocks className="h-6 w-6 text-primary" />
                  <CardTitle>Development Tools</CardTitle>
                </div>
                <CardDescription>
                  Tools for AI development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        <GitBranch className="h-4 w-4" />
                        Version Control
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Model versioning</li>
                        <li>• Experiment tracking</li>
                        <li>• Collaborative development</li>
                        <li>• Change history</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Data Management
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Dataset versioning</li>
                        <li>• Data preprocessing</li>
                        <li>• Annotation tools</li>
                        <li>• Quality monitoring</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Testing Tools
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Model evaluation</li>
                        <li>• Performance metrics</li>
                        <li>• Automated testing</li>
                        <li>• Benchmark suites</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Integration Guide Tab */}
        <TabsContent value="integration" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Puzzle className="h-6 w-6 text-primary" />
                  <CardTitle>Integration Methods</CardTitle>
                </div>
                <CardDescription>Ways to integrate with our platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      API Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      RESTful APIs for seamless integration with your existing systems
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline">REST API</Badge>
                      <Badge variant="outline">WebSocket</Badge>
                      <Badge variant="outline">GraphQL</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      SDK Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Official SDKs for major programming languages
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">Go</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Network className="h-6 w-6 text-primary" />
                  <CardTitle>Infrastructure</CardTitle>
                </div>
                <CardDescription>Platform infrastructure details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Workflow className="h-4 w-4" />
                      Deployment Options
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Flexible deployment options for your needs
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline">Cloud</Badge>
                      <Badge variant="outline">On-Premise</Badge>
                      <Badge variant="outline">Hybrid</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Resources
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Development resources and documentation
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline">Docs</Badge>
                      <Badge variant="outline">Tutorials</Badge>
                      <Badge variant="outline">Examples</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Example Use Cases Tab */}
        <TabsContent value="examples" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardHeader>
                <MessagesSquare className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Conversational AI</CardTitle>
                <CardDescription>
                  Build advanced chatbots and virtual assistants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Customer support automation</li>
                  <li>• Virtual assistants</li>
                  <li>• Interactive documentation</li>
                  <li>• Educational chatbots</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <Code2 className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Code Intelligence</CardTitle>
                <CardDescription>
                  Enhance development workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Code completion</li>
                  <li>• Bug detection</li>
                  <li>• Code review</li>
                  <li>• Documentation generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <Bot className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Autonomous Agents</CardTitle>
                <CardDescription>
                  Create task-specific AI agents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Process automation</li>
                  <li>• Data analysis</li>
                  <li>• Decision support</li>
                  <li>• Workflow optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
