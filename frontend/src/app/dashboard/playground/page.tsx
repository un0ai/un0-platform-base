"use client"

import { SectionOverview } from "@/components/section-overview"

export default function PlaygroundPage() {
  return (
    <SectionOverview
      title="Playground"
      description="Explore and experiment with our AI tools in an interactive environment."
      items={[
        {
          title: "Tool1",
          description: "A powerful tool for processing and analyzing data with AI.",
          url: "/dashboard/playground/tool1",
        },
        {
          title: "Tool2",
          description: "Advanced natural language processing capabilities.",
          url: "/dashboard/playground/tool2",
        },
        {
          title: "Tool3",
          description: "State-of-the-art image generation and manipulation.",
          url: "/dashboard/playground/tool3",
        },
      ]}
    />
  )
}
