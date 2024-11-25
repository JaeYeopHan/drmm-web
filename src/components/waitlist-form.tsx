import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error()

      toast.success("Thanks for joining! We'll be in touch soon.")
      setEmail("")
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("mx-auto mt-6 flex max-w-md gap-x-4", className)} action="https://formspree.io/f/xovqnygn" method="POST">
      <Input
        type="email"
        placeholder="이메일을 알려주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="min-w-0 flex-auto"
      />
      <Button type="submit" disabled={isLoading}>
        베타 신청
      </Button>
    </form>
  )
}

