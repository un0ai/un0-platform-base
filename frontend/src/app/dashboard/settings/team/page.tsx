"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function TeamSettingsPage() {
  const teamMembers = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      avatar: "/avatars/john.jpg",
      status: "active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Developer",
      avatar: "/avatars/jane.jpg",
      status: "active",
    },
    {
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Viewer",
      avatar: "/avatars/mike.jpg",
      status: "inactive",
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team members and their roles</CardDescription>
            </div>
            <Button>Add Member</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.email} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={member.status === "active" ? "default" : "secondary"}>
                    {member.status}
                  </Badge>
                  <Badge variant="outline">{member.role}</Badge>
                  <Button variant="ghost" size="sm">Edit</Button>
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
