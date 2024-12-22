"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BetaPageWrapper } from "@/components/beta-notice"
import {
  BookOpen,
  Search,
  Filter,
  Calendar,
  User,
  Clock,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Tag,
  TrendingUp,
  Star,
  FileText,
  ArrowRight
} from "lucide-react"

const featuredPosts = [
  {
    title: "Introducing Advanced AI Agents",
    description: "Learn about our new AI agent capabilities and how they can transform your workflow",
    author: "Sarah Johnson",
    date: "2024-12-22",
    readTime: "8 min",
    category: "Product Updates",
    image: "/blog/ai-agents.jpg",
    likes: 245,
    comments: 56
  },
  {
    title: "Best Practices for AI Integration",
    description: "A comprehensive guide to integrating AI agents into your existing systems",
    author: "Michael Chen",
    date: "2024-12-20",
    readTime: "12 min",
    category: "Technical",
    image: "/blog/integration.jpg",
    likes: 189,
    comments: 34
  },
  {
    title: "The Future of AI Automation",
    description: "Exploring upcoming trends and innovations in AI automation",
    author: "Emily Williams",
    date: "2024-12-18",
    readTime: "10 min",
    category: "Industry Insights",
    image: "/blog/future-ai.jpg",
    likes: 312,
    comments: 78
  }
]

const categories = [
  { name: "Product Updates", count: 25 },
  { name: "Technical", count: 42 },
  { name: "Industry Insights", count: 18 },
  { name: "Case Studies", count: 15 },
  { name: "Tutorials", count: 30 }
]

const recentPosts = [
  {
    title: "Optimizing AI Performance",
    description: "Tips and tricks for better AI agent performance",
    date: "2024-12-21",
    readTime: "6 min",
    category: "Technical"
  },
  {
    title: "Customer Success Story: AI in Finance",
    description: "How a leading fintech company transformed their operations",
    date: "2024-12-19",
    readTime: "7 min",
    category: "Case Studies"
  },
  {
    title: "Security Best Practices",
    description: "Keeping your AI implementations secure",
    date: "2024-12-17",
    readTime: "9 min",
    category: "Technical"
  }
]

export default function BlogPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Blog</h2>
          <p className="text-muted-foreground">
            Latest news, updates, and insights about our platform
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
              <Tabs defaultValue="featured" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                </TabsList>

                <TabsContent value="featured" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    {featuredPosts.map((post, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{post.readTime}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg">{post.title}</CardTitle>
                          <CardDescription>{post.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <Button variant="ghost" size="sm">
                                  <ThumbsUp className="mr-2 h-4 w-4" />
                                  {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  {post.comments}
                                </Button>
                              </div>
                              <Button variant="outline" size="sm">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Tag className="h-5 w-5 text-primary" />
                          <CardTitle>Categories</CardTitle>
                        </div>
                        <CardDescription>Browse posts by category</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {categories.map((category, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-4 rounded-lg border"
                            >
                              <span className="font-medium">{category.name}</span>
                              <Badge variant="secondary">{category.count}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <CardTitle>Trending Posts</CardTitle>
                        </div>
                        <CardDescription>Most popular articles this week</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              title: "AI Trends 2024",
                              views: "5.2K",
                              trend: "up"
                            },
                            {
                              title: "Advanced Integration Guide",
                              views: "4.8K",
                              trend: "up"
                            },
                            {
                              title: "Security Best Practices",
                              views: "4.1K",
                              trend: "up"
                            }
                          ].map((post, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <h4 className="font-medium">{post.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {post.views} views
                                </p>
                              </div>
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="recent" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {recentPosts.map((post, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{post.readTime}</span>
                            </div>
                          </div>
                          <CardTitle>{post.title}</CardTitle>
                          <CardDescription>{post.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <Button variant="outline" size="sm">
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle>Technical Articles</CardTitle>
                      </div>
                      <CardDescription>In-depth technical guides and tutorials</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            title: "Advanced API Integration Patterns",
                            description: "Learn about advanced patterns for API integration",
                            difficulty: "Advanced",
                            topics: ["API", "Integration", "Patterns"]
                          },
                          {
                            title: "Optimizing AI Model Performance",
                            description: "Tips for improving AI model performance",
                            difficulty: "Intermediate",
                            topics: ["AI", "Performance", "Optimization"]
                          },
                          {
                            title: "Security Best Practices Guide",
                            description: "Comprehensive security guide for developers",
                            difficulty: "Advanced",
                            topics: ["Security", "Best Practices"]
                          }
                        ].map((article, i) => (
                          <div key={i} className="p-4 rounded-lg border">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium">{article.title}</h3>
                              <Badge variant="outline">{article.difficulty}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              {article.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {article.topics.map((topic, j) => (
                                <Badge key={j} variant="secondary">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="tutorials" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        title: "Getting Started with AI Agents",
                        description: "A beginner's guide to creating and deploying AI agents",
                        level: "Beginner",
                        duration: "30 min"
                      },
                      {
                        title: "Custom Integration Development",
                        description: "Learn to build custom integrations for your AI agents",
                        level: "Intermediate",
                        duration: "45 min"
                      },
                      {
                        title: "Advanced Workflow Automation",
                        description: "Master complex workflow automation techniques",
                        level: "Advanced",
                        duration: "60 min"
                      },
                      {
                        title: "Performance Optimization Guide",
                        description: "Optimize your AI agent's performance",
                        level: "Advanced",
                        duration: "40 min"
                      }
                    ].map((tutorial, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{tutorial.level}</Badge>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {tutorial.duration}
                              </span>
                            </div>
                          </div>
                          <CardTitle>{tutorial.title}</CardTitle>
                          <CardDescription>{tutorial.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full">
                            Start Tutorial
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </BetaPageWrapper>
    </div>
  )
}
