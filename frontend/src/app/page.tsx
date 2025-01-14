import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            ( un0.ai )
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            build tools & iterate fast
          </p> 
          <div className="space-x-4">
          <Link href="/dashboard">
            <Button size="lg">
              Dashboard
            </Button>
            </Link>
            <Link href="/dashboard">
            <Button variant="outline" size="lg">
              Documentation
            </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {[
            {
              title: "Fast & Efficient",
              description: "Built with performance in mind for quick development cycles"
            },
            {
              title: "Developer Friendly",
              description: "Intuitive interfaces designed for easiness of use"
            },
            {
              title: "Extensible",
              description: "Easy to customize and extend based on your needs"
            }
          ].map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
