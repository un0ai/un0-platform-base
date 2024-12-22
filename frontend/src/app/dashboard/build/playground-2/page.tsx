"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Bot,
  Play,
  Settings2,
  Share2,
  Save,
  Download,
  Upload,
  Wand2,
  MessageSquarePlus,
  FileCode2,
  Sparkles,
  Send,
  Eraser,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"

export default function PlaygroundPage() {
  const [messages, setMessages] = React.useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant powered by un0.ai. I can help you with agent development, testing, and deployment. What would you like to explore today?",
    },
  ])

  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Playground</h2>
          <p className="text-muted-foreground">
            Test and experiment with different models and configurations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            Beta
          </Badge>
          <BetaRestrictedAction>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </BetaRestrictedAction>
          <BetaRestrictedAction>
            <Button variant="ghost" size="icon">
              <Settings2 className="h-4 w-4" />
            </Button>
          </BetaRestrictedAction>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
          <div className="space-y-6">
            <Tabs defaultValue="chat" className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="chat" className="flex items-center">
                    <MessageSquarePlus className="mr-2 h-4 w-4" />
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="agent" className="flex items-center">
                    <Bot className="mr-2 h-4 w-4" />
                    Agent
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center">
                    <FileCode2 className="mr-2 h-4 w-4" />
                    Code
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="chat" className="space-y-4 mt-0">
                <Card className="border-none shadow-md">
                  <CardContent className="p-4 space-y-4">
                    <ScrollArea className="h-[500px] pr-4">
                      <div className="space-y-4">
                        {messages.map((message, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            {message.role === "assistant" ? (
                              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground">
                                <Bot className="h-4 w-4" />
                              </div>
                            ) : (
                              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-muted">
                                <span className="text-sm font-medium">You</span>
                              </div>
                            )}
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium">
                                {message.role === "assistant" ? "Assistant" : "You"}
                              </p>
                              <div className="text-sm text-muted-foreground">
                                {message.content}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="flex items-center space-x-2">
                      <Textarea
                        placeholder="Type your message or '/help' for commands..."
                        className="flex-1 min-h-[80px]"
                      />
                      <div className="flex items-center space-x-2">
                        <BetaRestrictedAction>
                          <Button className="flex-1">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button variant="outline">
                            <Eraser className="mr-2 h-4 w-4" />
                            Clear Chat
                          </Button>
                        </BetaRestrictedAction>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agent" className="space-y-4 mt-0">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Agent Configuration</CardTitle>
                    <CardDescription>
                      Configure your AI agent's behavior and capabilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label>Agent Type</Label>
                        <Select defaultValue="conversational">
                          <SelectTrigger>
                            <SelectValue placeholder="Select agent type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conversational">Conversational</SelectItem>
                            <SelectItem value="task">Task-Oriented</SelectItem>
                            <SelectItem value="research">Research Assistant</SelectItem>
                            <SelectItem value="coding">Code Assistant</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Tools & Integrations</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <BetaRestrictedAction>
                            <Button variant="outline" className="justify-start">
                              <FileCode2 className="mr-2 h-4 w-4" />
                              Code Interpreter
                            </Button>
                          </BetaRestrictedAction>
                          <BetaRestrictedAction>
                            <Button variant="outline" className="justify-start">
                              <Sparkles className="mr-2 h-4 w-4" />
                              Knowledge Base
                            </Button>
                          </BetaRestrictedAction>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Code Generation</CardTitle>
                    <CardDescription>
                      Generate and test agent code implementations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md bg-muted p-4">
                        <pre className="text-sm">
                          <code>{`from un0.agent import Agent
from un0.tools import CodeInterpreter

agent = Agent.create(
    name="my_agent",
    type="conversational",
    tools=[CodeInterpreter()]
)

# Add custom behaviors
@agent.on_message
async def handle_message(message: str):
    # Your agent logic here
    response = await agent.think(message)
    return response`}</code>
                        </pre>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <BetaRestrictedAction>
                          <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Export Code
                          </Button>
                        </BetaRestrictedAction>
                        <BetaRestrictedAction>
                          <Button>
                            <Play className="mr-2 h-4 w-4" />
                            Test Agent
                          </Button>
                        </BetaRestrictedAction>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Model Settings</CardTitle>
                <CardDescription>Fine-tune your model parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Model</Label>
                  <Select defaultValue="gpt4">
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt4">GPT-4</SelectItem>
                      <SelectItem value="gpt35">GPT-3.5 Turbo</SelectItem>
                      <SelectItem value="claude">Claude 2</SelectItem>
                      <SelectItem value="llama">Llama 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Temperature</Label>
                      <span className="text-xs text-muted-foreground">0.7</span>
                    </div>
                    <Slider
                      defaultValue={[0.7]}
                      max={1}
                      step={0.1}
                      className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Max Tokens</Label>
                      <Input
                        type="number"
                        className="w-20 h-8"
                        defaultValue={2048}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Top P</Label>
                      <span className="text-xs text-muted-foreground">0.9</span>
                    </div>
                    <Slider
                      defaultValue={[0.9]}
                      max={1}
                      step={0.1}
                      className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Monitoring</CardTitle>
                <CardDescription>Real-time agent metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Response Time</span>
                    <span className="text-sm font-medium">245ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tokens Used</span>
                    <span className="text-sm font-medium">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cost</span>
                    <span className="text-sm font-medium">$0.023</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
