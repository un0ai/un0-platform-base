"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BetaPageWrapper } from "@/components/beta-notice"
import {
  HelpCircle,
  Search,
  ThumbsUp,
  MessageCircle,
  Settings,
  Database,
  Shield,
  Zap,
  Users,
  Code,
  ArrowRight,
  ExternalLink,
  Clock
} from "lucide-react"

const categories = [
  {
    name: "Getting Started",
    icon: <Zap className="h-5 w-5" />,
    questions: [
      {
        question: "How do I create my first AI agent?",
        answer: "To create your first AI agent, navigate to the Agent Builder page and click 'Create New Agent'. Follow the step-by-step wizard to configure your agent's capabilities and deployment settings.",
        helpful: 156
      },
      {
        question: "What are the system requirements?",
        answer: "Our platform runs in modern web browsers (Chrome, Firefox, Safari, Edge). For optimal performance, we recommend at least 8GB RAM and a stable internet connection.",
        helpful: 98
      }
    ]
  },
  {
    name: "Technical",
    icon: <Code className="h-5 w-5" />,
    questions: [
      {
        question: "How do I integrate with existing APIs?",
        answer: "Use our API Integration wizard in the Integration Hub. We support REST and GraphQL APIs. You'll need your API credentials and endpoint information ready.",
        helpful: 234
      },
      {
        question: "What programming languages are supported?",
        answer: "We currently support Python, JavaScript/TypeScript, and Go for custom integrations. Each language has its own SDK with comprehensive documentation.",
        helpful: 187
      }
    ]
  },
  {
    name: "Security",
    icon: <Shield className="h-5 w-5" />,
    questions: [
      {
        question: "How is my data protected?",
        answer: "We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. All data is stored in SOC 2 compliant data centers.",
        helpful: 312
      },
      {
        question: "What authentication methods are supported?",
        answer: "We support OAuth 2.0, API keys, and JWT tokens. For enterprise customers, we also offer SAML and custom SSO integration.",
        helpful: 245
      }
    ]
  }
]

const popularQuestions = [
  {
    question: "How do I monitor agent performance?",
    answer: "Use the Performance Metrics dashboard to track your agent's performance in real-time. You can monitor metrics like response time, success rate, and resource usage.",
    category: "Monitoring"
  },
  {
    question: "Can I customize the AI model?",
    answer: "Yes, you can customize the AI model through our Model Management interface. You can fine-tune parameters, train on custom data, and adjust the model's behavior.",
    category: "Customization"
  },
  {
    question: "What's the pricing model?",
    answer: "We offer tiered pricing based on usage and features. Check our pricing page for detailed information about plans and enterprise options.",
    category: "Billing"
  }
]

export default function FAQPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">FAQ</h2>
          <p className="text-muted-foreground">
            Find answers to commonly asked questions
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Search FAQs
          </Button>
          <Button>
            <MessageCircle className="mr-2 h-4 w-4" />
            Ask a Question
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
                  <TabsTrigger value="all">All Questions</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, i) => (
                      <Card key={i} className="border-none shadow-md">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            {category.icon}
                            <CardTitle>{category.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {category.questions.map((qa, j) => (
                              <div key={j} className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <HelpCircle className="h-4 w-4 text-primary" />
                                  <h4 className="font-medium">{qa.question}</h4>
                                </div>
                                <p className="text-sm text-muted-foreground pl-6">
                                  {qa.answer}
                                </p>
                                <div className="flex items-center space-x-2 pl-6">
                                  <Button variant="ghost" size="sm">
                                    <ThumbsUp className="mr-2 h-4 w-4" />
                                    Helpful ({qa.helpful})
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    Share
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="popular" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <ThumbsUp className="h-5 w-5 text-primary" />
                        <CardTitle>Most Popular Questions</CardTitle>
                      </div>
                      <CardDescription>Frequently asked questions by our users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {popularQuestions.map((qa, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <HelpCircle className="h-4 w-4 text-primary" />
                                <h4 className="font-medium">{qa.question}</h4>
                              </div>
                              <Badge variant="outline">{qa.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground pl-6">
                              {qa.answer}
                            </p>
                            <div className="flex items-center space-x-2 pl-6">
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="mr-2 h-4 w-4" />
                                Helpful
                              </Button>
                              <Button variant="ghost" size="sm">
                                Share
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="technical" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Code className="h-5 w-5 text-primary" />
                          <CardTitle>API & Integration</CardTitle>
                        </div>
                        <CardDescription>Technical integration questions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              question: "What API authentication methods are supported?",
                              answer: "We support API keys, OAuth 2.0, and JWT tokens for API authentication."
                            },
                            {
                              question: "How do I handle API rate limits?",
                              answer: "Our API implements standard rate limiting headers. Use exponential backoff for retries."
                            }
                          ].map((qa, i) => (
                            <div key={i} className="space-y-2">
                              <h4 className="font-medium">{qa.question}</h4>
                              <p className="text-sm text-muted-foreground">
                                {qa.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Database className="h-5 w-5 text-primary" />
                          <CardTitle>Data & Storage</CardTitle>
                        </div>
                        <CardDescription>Data management questions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              question: "What databases are supported?",
                              answer: "We support PostgreSQL, MySQL, MongoDB, and Redis out of the box."
                            },
                            {
                              question: "How is data backup handled?",
                              answer: "Automated daily backups with 30-day retention. Custom backup schedules available."
                            }
                          ].map((qa, i) => (
                            <div key={i} className="space-y-2">
                              <h4 className="font-medium">{qa.question}</h4>
                              <p className="text-sm text-muted-foreground">
                                {qa.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="space-y-6">
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertTitle>Security Information</AlertTitle>
                    <AlertDescription>
                      We take security seriously. All data is encrypted and stored in SOC 2 compliant facilities.
                    </AlertDescription>
                  </Alert>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <CardTitle>Security FAQs</CardTitle>
                      </div>
                      <CardDescription>Common security-related questions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            question: "How is my data encrypted?",
                            answer: "We use AES-256 encryption for data at rest and TLS 1.3 for data in transit."
                          },
                          {
                            question: "What security certifications do you have?",
                            answer: "We are SOC 2 Type II certified and GDPR compliant."
                          },
                          {
                            question: "How often are security audits performed?",
                            answer: "We perform quarterly security audits and annual penetration testing."
                          }
                        ].map((qa, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-4 w-4 text-primary" />
                              <h4 className="font-medium">{qa.question}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground pl-6">
                              {qa.answer}
                            </p>
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
