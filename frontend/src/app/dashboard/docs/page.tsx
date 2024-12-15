"use client"

import { SectionOverview } from "@/components/section-overview"

export default function DocsPage() {
  return (
    <SectionOverview
      title="Documentation"
      description="Learn how to use our platform effectively with comprehensive guides and documentation."
      items={[
        {
          title: "Introduction",
          description: "Get started with an overview of our platform and its capabilities.",
          url: "/dashboard/docs/introduction",
        },
        {
          title: "Get Started",
          description: "Step-by-step guide to set up and start using our tools.",
          url: "/dashboard/docs/get-started",
        },
        {
          title: "Changelog",
          description: "Stay updated with the latest changes and improvements.",
          url: "/dashboard/docs/changelog",
        },
      ]}
    />
  )
}
