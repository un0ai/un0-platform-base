"use client"

import { SectionOverview } from "@/components/section-overview"

export default function ModelsPage() {
  return (
    <SectionOverview
      title="Models"
      description="Explore our collection of AI models and their capabilities."
      items={[
        {
          title: "Genesis",
          description: "Our foundational large language model for general-purpose tasks.",
          url: "/dashboard/models/genesis",
        },
        {
          title: "Explorer",
          description: "Specialized model for data exploration and analysis.",
          url: "/dashboard/models/explorer",
        },
        {
          title: "Quantum",
          description: "Next-generation model with quantum-inspired algorithms.",
          url: "/dashboard/models/quantum",
        },
      ]}
    />
  )
}
