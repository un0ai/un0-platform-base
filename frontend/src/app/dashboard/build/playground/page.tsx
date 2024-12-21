"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Bot, Play, Settings2, Share2 } from "lucide-react"

export default function PlaygroundPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Playground</h2>
          <p className="text-muted-foreground">
            Test and experiment with un0.ai's capabilities
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Settings2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="completion">Completion</TabsTrigger>
          <TabsTrigger value="vision">Vision</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Chat Playground</CardTitle>
              <CardDescription>
                Test conversational capabilities with our AI models
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4 space-y-4">
                <div className="flex items-start space-x-4">
                  <Bot className="h-6 w-6 mt-2" />
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">Assistant</p>
                    <p className="text-sm text-muted-foreground">
                      Hello! I'm your AI assistant. How can I help you today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-primary mt-2" />
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">You</p>
                    <p className="text-sm text-muted-foreground">
                      Can you help me understand how to use the un0.ai platform?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Bot className="h-6 w-6 mt-2" />
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">Assistant</p>
                    <p className="text-sm text-muted-foreground">
                      Of course! The un0.ai platform is designed to help you build, deploy, and manage AI agents. You can start by exploring our Visual Agent Builder, which allows you to create custom AI agents without coding. Would you like me to guide you through the basics?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Textarea
                  placeholder="Type your message here..."
                  className="flex-1"
                />
                <Button size="icon">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Model Settings</CardTitle>
              <CardDescription>
                Configure the model parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="space-y-1 col-span-1">
                    <p className="text-sm font-medium">Model</p>
                    <p className="text-xs text-muted-foreground">Select AI model</p>
                  </div>
                  <select className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option>un0-large-v2</option>
                    <option>un0-medium-v2</option>
                    <option>un0-small-v2</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="space-y-1 col-span-1">
                    <p className="text-sm font-medium">Temperature</p>
                    <p className="text-xs text-muted-foreground">Adjust creativity</p>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="col-span-3"
                    defaultValue="70"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="space-y-1 col-span-1">
                    <p className="text-sm font-medium">Max Length</p>
                    <p className="text-xs text-muted-foreground">Response length</p>
                  </div>
                  <input
                    type="number"
                    className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    defaultValue="2048"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completion">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Text Completion</CardTitle>
              <CardDescription>
                Generate text completions for various use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Enter your prompt here..."
                  className="min-h-[200px]"
                />
                <div className="flex justify-end">
                  <Button>
                    Generate
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vision">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Vision Analysis</CardTitle>
              <CardDescription>
                Process and analyze images with AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-12">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Drop an image here or click to upload
                  </p>
                  <Button variant="outline" className="mt-4">
                    Upload Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audio">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Audio Processing</CardTitle>
              <CardDescription>
                Convert speech to text and analyze audio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-12">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Drop an audio file here or click to upload
                  </p>
                  <Button variant="outline" className="mt-4">
                    Upload Audio
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
