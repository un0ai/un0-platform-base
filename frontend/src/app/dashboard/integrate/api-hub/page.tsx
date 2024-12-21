"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function APIHubPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-primary/70">
          API Hub
        </h1>
        <p className="text-lg text-foreground/80 dark:text-foreground/80 leading-relaxed">
          Discover and manage API integrations
        </p>
      </div>

      <Tabs defaultValue="rest" className="space-y-4">
        <TabsList>
          <TabsTrigger value="rest">REST APIs</TabsTrigger>
          <TabsTrigger value="graphql">GraphQL</TabsTrigger>
          <TabsTrigger value="websocket">WebSocket</TabsTrigger>
        </TabsList>

        <TabsContent value="rest" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Available REST APIs</CardTitle>
              <CardDescription>Browse and integrate REST APIs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Agent Management API</p>
                    <p className="text-sm text-muted-foreground">v1.0</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">Workflow API</p>
                    <p className="text-sm text-muted-foreground">v1.0</p>
                  </div>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="graphql" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>GraphQL APIs</CardTitle>
              <CardDescription>Explore GraphQL endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="websocket" className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>WebSocket APIs</CardTitle>
              <CardDescription>Real-time communication endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 text-center">
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
