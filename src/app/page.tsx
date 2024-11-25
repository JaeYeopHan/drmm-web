import { WaitlistForm } from "@/components/waitlist-form"
import { Features } from "@/components/features"
import { ExampleCourses } from "@/components/example-courses"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative border-b mb-24">
      <div className="flex ml-8 mt-8">
          <img src="/refit_icon.png" alt="ReFit" className="w-12" />
        </div>
        <div className="container px-4 py-20 md:py-32">
          <div className="mx-auto  text-center">
            <div className="space-y-6 mb-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                영어, 이젠 나에게 <span className="transform rotate-[20deg]">딱</span> 맞는 학습
              </h1>
              <p className="text-lg text-muted-foreground">
                ReFit은 학습에 최적화된 반복 주기를 제공해요.
              </p>
              <WaitlistForm />
            </div>
            <span className="text-sm text-muted-foreground">
              베타 신청을 통해 먼저 사용해보세요.
            </span>
          </div>
        </div>
      </section>

      <section className="relative border-b pb-16">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            에빙하우스의 망각 곡선
          </h2>
          <p className="text-lg text-muted-foreground">
              학습 직후, 기억은 매우 빠른 속도로 감소해요. 연구에 따르면 학습한 정보를 잊는 속도가 첫 몇 시간 내 가장 빨라요.
            </p>
          <div className="container px-4 py-20 md:py-4 max-w-2xl mx-auto">
            <img src="/chart.png" alt="에빙하우스의 망각 곡선" className="rounded-xl" />
          </div>
          <p className="text-md text-muted-foreground mb-2">
            ReFit은 기억을 최적화하기 위해 복습이 필요한 주기를 제안해요.
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside mx-auto">
            <ol>최초 복습 - 학습 직후 10분 내에</ol>
            <ol>두번째 복습 - 24시간 내에</ol>
            <ol>세번째 복습 - 일주일 내에</ol>
            <ol>네번째 복습 - 한 달 내에</ol>
          </ul>
        </div>
      </section>

      {/* Features Grid */}
      <Features />

      {/* Example Courses */}
      <ExampleCourses />

      {/* Pricing */}
      <Pricing />

      {/* Final CTA */}
      <section className="relative border-t bg-gray-50">
        <div className="container px-4 py-20 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              베타 테스터 신청하고 무료 혜택 받기
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ReFit은 영어 학습자들을 진심으로 응원해요.<br />
              영어 학습 플랫폼으로 발전하기 위해 사용자들의 피드백을 받아 기능을 개선해나가고 있어요.
            </p>
            <div className="mt-4">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

