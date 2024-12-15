"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SalesMarketingPage() {
  const campaigns = [
    {
      name: "Q4 Product Launch",
      status: "Active",
      budget: "$50,000",
      spent: "$32,450",
      performance: 78,
      channels: ["Social Media", "Email", "PPC"],
    },
    {
      name: "Holiday Season Promo",
      status: "Planning",
      budget: "$25,000",
      spent: "$0",
      performance: 0,
      channels: ["Email", "Social Media"],
    },
    {
      name: "Brand Awareness",
      status: "Active",
      budget: "$30,000",
      spent: "$28,900",
      performance: 92,
      channels: ["Display Ads", "Content Marketing"],
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,750</div>
            <p className="text-xs text-muted-foreground">
              +12.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              1 pending approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Lead Conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.5%</div>
            <Progress value={18.5} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">285%</div>
            <p className="text-xs text-muted-foreground">
              +5% from target
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Marketing Campaigns</CardTitle>
          <CardDescription>Active and upcoming marketing initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.name} className="flex flex-col space-y-2 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{campaign.name}</h3>
                  <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                    {campaign.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Budget</p>
                    <p className="font-medium">{campaign.budget}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Spent</p>
                    <p className="font-medium">{campaign.spent}</p>
                  </div>
                </div>
                <Progress value={campaign.performance} className="h-2" />
                <div className="flex flex-wrap gap-2">
                  {campaign.channels.map((channel) => (
                    <Badge key={channel} variant="outline">{channel}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}
