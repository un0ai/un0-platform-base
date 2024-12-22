"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BetaPageWrapper } from "@/components/beta-notice"
import {
  Clock,
  FileText,
  GitBranch,
  Star,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Bug,
  Rocket,
  Settings,
  Search,
  Filter,
  ArrowUp,
  Calendar
} from "lucide-react"

const releases = [
  {
    version: "v2.1.0",
    date: "2024-12-22",
    type: "major",
    highlights: [
      "New visual agent builder",
      "Enhanced performance monitoring",
      "Improved security features"
    ],
    changes: {
      features: [
        "Added drag-and-drop interface for agent creation",
        "Real-time performance analytics dashboard",
        "Advanced role-based access control"
      ],
      improvements: [
        "Optimized database queries",
        "Enhanced UI responsiveness",
        "Better error handling"
      ],
      fixes: [
        "Fixed memory leak in long-running processes",
        "Resolved API timeout issues",
        "Fixed UI rendering bugs"
      ]
    }
  },
  {
    version: "v2.0.1",
    date: "2024-12-15",
    type: "patch",
    highlights: [
      "Bug fixes and performance improvements",
      "Security patches"
    ],
    changes: {
      features: [],
      improvements: [
        "Improved error logging",
        "Enhanced security measures"
      ],
      fixes: [
        "Fixed authentication token refresh",
        "Resolved data sync issues"
      ]
    }
  },
  {
    version: "v2.0.0",
    date: "2024-12-01",
    type: "major",
    highlights: [
      "Complete platform redesign",
      "New API version",
      "Enhanced scalability"
    ],
    changes: {
      features: [
        "New modern UI design",
        "GraphQL API support",
        "Advanced workflow automation"
      ],
      improvements: [
        "Faster page load times",
        "Better resource utilization",
        "Enhanced documentation"
      ],
      fixes: [
        "Multiple bug fixes",
        "Security vulnerabilities patched",
        "Performance bottlenecks resolved"
      ]
    }
  }
]

const getVersionBadge = (type: string) => {
  switch (type) {
    case "major":
      return <Badge variant="default">Major Release</Badge>
    case "minor":
      return <Badge variant="secondary">Minor Release</Badge>
    case "patch":
      return <Badge variant="outline">Patch</Badge>
    default:
      return <Badge variant="outline">Release</Badge>
  }
}

export default function ChangelogPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Changelog</h2>
          <p className="text-muted-foreground">
            Track all changes and updates to the platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <BetaPageWrapper>
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/5 dark:bg-yellow-400/5 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-lg" />
          <div className="relative">
            <div className="flex-1 space-y-6 p-8 pt-6">
              <Tabs defaultValue="all" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="all">All Changes</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="fixes">Fixes</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <GitBranch className="h-5 w-5 text-primary" />
                        <CardTitle>Release History</CardTitle>
                      </div>
                      <CardDescription>Complete changelog of all releases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {releases.map((release, i) => (
                          <div key={i} className="relative pb-8">
                            {i < releases.length - 1 && (
                              <div className="absolute left-7 top-12 h-full w-px bg-border" />
                            )}
                            <div className="space-y-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                  <Calendar className="h-6 w-6 text-primary" />
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-semibold">{release.version}</h3>
                                    {getVersionBadge(release.type)}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Released on {release.date}
                                  </p>
                                </div>
                              </div>

                              <div className="ml-18 space-y-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium">Highlights</h4>
                                  <ul className="list-disc space-y-1 pl-4">
                                    {release.highlights.map((highlight, j) => (
                                      <li key={j} className="text-sm">
                                        {highlight}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {release.changes.features.length > 0 && (
                                  <div className="space-y-2">
                                    <h4 className="font-medium text-green-600">
                                      <Rocket className="mr-2 inline-block h-4 w-4" />
                                      New Features
                                    </h4>
                                    <ul className="list-disc space-y-1 pl-4">
                                      {release.changes.features.map((feature, j) => (
                                        <li key={j} className="text-sm">
                                          {feature}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {release.changes.improvements.length > 0 && (
                                  <div className="space-y-2">
                                    <h4 className="font-medium text-blue-600">
                                      <ArrowUp className="mr-2 inline-block h-4 w-4" />
                                      Improvements
                                    </h4>
                                    <ul className="list-disc space-y-1 pl-4">
                                      {release.changes.improvements.map((improvement, j) => (
                                        <li key={j} className="text-sm">
                                          {improvement}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {release.changes.fixes.length > 0 && (
                                  <div className="space-y-2">
                                    <h4 className="font-medium text-red-600">
                                      <Bug className="mr-2 inline-block h-4 w-4" />
                                      Bug Fixes
                                    </h4>
                                    <ul className="list-disc space-y-1 pl-4">
                                      {release.changes.fixes.map((fix, j) => (
                                        <li key={j} className="text-sm">
                                          {fix}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Rocket className="h-5 w-5 text-primary" />
                        <CardTitle>New Features</CardTitle>
                      </div>
                      <CardDescription>Latest feature additions and enhancements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {releases.map((release, i) => (
                          release.changes.features.length > 0 && (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-medium">{release.version}</h3>
                                  <Badge variant="outline">{release.date}</Badge>
                                </div>
                              </div>
                              <ul className="list-disc space-y-1 pl-4">
                                {release.changes.features.map((feature, j) => (
                                  <li key={j} className="text-sm">
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="fixes" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Bug className="h-5 w-5 text-primary" />
                        <CardTitle>Bug Fixes</CardTitle>
                      </div>
                      <CardDescription>Recent bug fixes and improvements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {releases.map((release, i) => (
                          release.changes.fixes.length > 0 && (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-medium">{release.version}</h3>
                                  <Badge variant="outline">{release.date}</Badge>
                                </div>
                              </div>
                              <ul className="list-disc space-y-1 pl-4">
                                {release.changes.fixes.map((fix, j) => (
                                  <li key={j} className="text-sm">
                                    {fix}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="space-y-6">
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertTitle>Security Updates</AlertTitle>
                    <AlertDescription>
                      All security-related updates and patches are listed here.
                    </AlertDescription>
                  </Alert>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <CardTitle>Security Changes</CardTitle>
                      </div>
                      <CardDescription>Security updates and patches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {releases.map((release, i) => (
                          <div key={i} className="p-4 rounded-lg border">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <h3 className="font-medium">{release.version}</h3>
                                <Badge variant="outline">{release.date}</Badge>
                              </div>
                            </div>
                            <ul className="list-disc space-y-1 pl-4">
                              {release.changes.fixes
                                .filter(fix => fix.toLowerCase().includes("security"))
                                .map((fix, j) => (
                                  <li key={j} className="text-sm">
                                    {fix}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
