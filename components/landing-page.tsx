import { Coffee, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-4 text-center">
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="hsl(var(--muted))"
            fillOpacity="0.2"
            d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,213.3C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <main className="relative z-10 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6 text-foreground">
          <Coffee className="w-12 h-12 mr-2" />
          <Waves className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Beach Brew</h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">Employee Dashboard</p>
        <p className="text-lg text-muted-foreground mb-12">
          Manage your beachside coffee sales with ease. Track your performance, view stats, and stay on top of your
          game.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Access Dashboard
        </Button>
      </main>

      <footer className="mt-16 text-muted-foreground">
        <p>&copy; 2023 Beach Brew. All rights reserved.</p>
      </footer>
    </div>
  )
}

