"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Bot,
  Plus,
  Save,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Settings2,
  Share2,
  Code2,
  Database,
  Workflow,
  MessageSquare,
  Search,
  FileCode,
  Sparkles,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BetaPageWrapper, BetaRestrictedAction } from "@/components/beta-notice"

export default function VisualAgentBuilderPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Visual Agent Builder</h2>
          <p className="text-muted-foreground">
            Build and customize your AI agents visually
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BetaRestrictedAction>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Agent
            </Button>
          </BetaRestrictedAction>
          <BetaRestrictedAction>
            <Button variant="default" size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </BetaRestrictedAction>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle>Agent Canvas</CardTitle>
                  <div className="flex items-center space-x-2">
                    <BetaRestrictedAction>
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </BetaRestrictedAction>
                    <BetaRestrictedAction>
                      <Button variant="outline" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    </BetaRestrictedAction>
                  </div>
                </div>
                <CardDescription>
                  Drag and drop components to build your agent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-dashed bg-muted/50 p-8 text-center space-y-4 min-h-[500px]">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Example Components */}
                    <Card className="border shadow-sm cursor-move hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 space-y-1">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                          <span className="font-medium">Chat Interface</span>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card className="border shadow-sm cursor-move hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Database className="h-4 w-4 text-primary" />
                          <span className="font-medium">Knowledge Base</span>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card className="border shadow-sm cursor-move hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Code2 className="h-4 w-4 text-primary" />
                          <span className="font-medium">Code Executor</span>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Component Library</CardTitle>
                <CardDescription>
                  Available components for your agent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="core" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="core">Core</TabsTrigger>
                    <TabsTrigger value="io">I/O</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                    <TabsTrigger value="custom">Custom</TabsTrigger>
                  </TabsList>
                  <TabsContent value="core" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <BetaRestrictedAction>
                        <Button variant="outline" className="h-auto p-4 justify-start">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4" />
                            <div className="text-left">
                              <div className="font-medium">Agent Core</div>
                              <div className="text-xs text-muted-foreground">Base agent functionality</div>
                            </div>
                          </div>
                        </Button>
                      </BetaRestrictedAction>
                      <BetaRestrictedAction>
                        <Button variant="outline" className="h-auto p-4 justify-start">
                          <div className="flex items-center space-x-2">
                            <Workflow className="h-4 w-4" />
                            <div className="text-left">
                              <div className="font-medium">Flow Control</div>
                              <div className="text-xs text-muted-foreground">Decision making</div>
                            </div>
                          </div>
                        </Button>
                      </BetaRestrictedAction>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Agent Properties</CardTitle>
                <CardDescription>Configure your agent settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Agent Name</Label>
                  <Input placeholder="My Custom Agent" />
                </div>
                <div className="space-y-2">
                  <Label>Base Model</Label>
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
                <div className="space-y-2">
                  <Label>Agent Type</Label>
                  <Select defaultValue="conversational">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conversational">Conversational</SelectItem>
                      <SelectItem value="task">Task-Oriented</SelectItem>
                      <SelectItem value="research">Research Assistant</SelectItem>
                      <SelectItem value="coding">Code Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Capabilities</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Web Search</Badge>
                    <Badge variant="outline">Code Generation</Badge>
                    <Badge variant="outline">Data Analysis</Badge>
                    <BetaRestrictedAction>
                      <Button variant="ghost" size="sm" className="h-6">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </BetaRestrictedAction>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Testing & Validation</CardTitle>
                <CardDescription>Verify agent behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Test Cases</Label>
                    <BetaRestrictedAction>
                      <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </BetaRestrictedAction>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg border p-2 flex items-center justify-between">
                      <span className="text-sm">Basic Conversation</span>
                      <BetaRestrictedAction>
                        <Button variant="ghost" size="icon">
                          <Play className="h-4 w-4" />
                        </Button>
                      </BetaRestrictedAction>
                    </div>
                    <div className="rounded-lg border p-2 flex items-center justify-between">
                      <span className="text-sm">Code Generation</span>
                      <BetaRestrictedAction>
                        <Button variant="ghost" size="icon">
                          <Play className="h-4 w-4" />
                        </Button>
                      </BetaRestrictedAction>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <Label>Test Cases</Label>
                    <div className="space-y-2">
                      <div className="rounded-lg border p-2 flex items-center justify-between">
                        <span className="text-sm">Basic Conversation</span>
                        <BetaRestrictedAction>
                          <Button variant="ghost" size="icon">
                            <Play className="h-4 w-4" />
                          </Button>
                        </BetaRestrictedAction>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <BetaRestrictedAction>
                      <Button variant="outline" size="sm">
                        Generate Documentation
                      </Button>
                    </BetaRestrictedAction>
                    <BetaRestrictedAction>
                      <Button variant="outline" size="sm">
                        Version History
                      </Button>
                    </BetaRestrictedAction>
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
