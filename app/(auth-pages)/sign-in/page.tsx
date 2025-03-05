import { signInAction } from "@/app/actions"
import { FormMessage, type Message } from "@/components/form-message"
import { SubmitButton } from "@/components/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Coffee, Waves } from "lucide-react"

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(255,255,255,0.2)"
            fillOpacity="1"
            d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,213.3C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center mb-6 text-amber-800">
          <Coffee className="w-8 h-8 mr-2" />
          <Waves className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-amber-900 mb-2 text-center">Beach Brew</h1>
        <h2 className="text-xl font-medium text-amber-800 mb-6 text-center">Employee Sign In</h2>

        <form className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email" className="text-amber-800">
              Email
            </Label>
            <Input
              name="email"
              placeholder="you@example.com"
              required
              className="mt-1 bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-amber-800">
                Password
              </Label>
              <Link className="text-xs text-amber-600 hover:text-amber-800 underline" href="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              required
              className="mt-1 bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <SubmitButton
            pendingText="Signing In..."
            formAction={signInAction}
            className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-2"
          >
            Sign in
          </SubmitButton>

          <FormMessage message={searchParams} />
        </form>

        <p className="text-sm text-amber-700 mt-6 text-center">
          Don't have an account?{" "}
          <Link className="text-amber-800 font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

