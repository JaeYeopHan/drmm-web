import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")

  return (
    <form className={cn("mx-auto mt-6 flex max-w-md gap-x-4", className)} action="https://formspree.io/f/xovqnygn" method="POST" onSubmit={() => {
      toast("감사합니다. 베타 준비되는대로 메일로 안내드릴게요.")
    }}>
      <label className="min-w-0 flex-auto">
        <Input
          type="email"
          name="email"
          placeholder="이메일을 알려주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <Button type="submit">
        베타 신청
      </Button>
    </form>
  )
}

