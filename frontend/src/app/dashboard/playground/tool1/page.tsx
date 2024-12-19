"use client"

import { AccessRequestForm } from "@/components/forms/AccessRequestForm"

export default function Tool1Page() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Request Access</h1>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <AccessRequestForm />
        </div>
      </div>
    </div>
  )
}
