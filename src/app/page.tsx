import { WaitlistForm } from "@/components/waitlist-form"
import { AudioLines, BookIcon, Check, CheckCircle2, IterationCcwIcon, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative border-b mb-24">
        <div className="flex ml-8 mt-8">
          <img src="/drmm_logo.png" alt="Dr.MM" className="w-12" />
        </div>
        <div className="container px-4 py-20 md:py-32">
          <div className="mx-auto  text-center">
            <div className="space-y-6 mb-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                영어, 이젠 의지말고 <span className="transform rotate-[20deg]">시스템</span>으로
              </h1>
              <p className="text-lg text-muted-foreground">
                도르마무(Dr. Memory Management)는 영어 학습에 최적화된 시스템을 제공해요.
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
            도르마무는 기억을 최적화하기 위해 복습이 필요한 주기를 제안해요.
          </p>
          <ol className="text-sm text-muted-foreground list-decimal list-inside mx-auto">
            <li>최초 복습 - 학습 직후 10분 내에</li>
            <li>두번째 복습 - 24시간 내에</li>
            <li>세번째 복습 - 일주일 내에</li>
            <li>네번째 복습 - 한 달 내에</li>
          </ol>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7">효율적으로 학습해요</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            내가 몰랐던 표현을 중심으로 똑똑하게 학습해요
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <IterationCcwIcon className="h-5 w-5 flex-none" />
                반복만이 살길
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  새로운 내용만 공부하는 것은 밑빠진 독에 물붓기!
                </p>
                <p className="flex-auto">
                  에빙하우스의 망각 곡선을 고려한 최적의 주기로 복습해요
                </p>
                <p className="flex-auto">
                  나에게 딱 맞는 시간에 학습해서 효율을 높여요.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <CheckCircle2 className="h-5 w-5 flex-none" />
                내가 쓰는 표현부터!
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  실생활과 동떨어진 표현을 배운다고 느껴지셨나요?
                </p>
                <p className="flex-auto">
                  방금 말했던 그 표현, 들었던 그 문장 바로 등록해요!
                </p>
                <p className="flex-auto">
                  내가 쓰는 표현을 배우는 것이 가장 효과적이에요.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <Zap className="h-5 w-5 flex-none" />
                진짜 쓰는 표현을 알아야!
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  알고 있는 단어인데 무슨 뜻인지 몰랐나요?
                </p>
                <p className="flex-auto">
                  실제로 사용하는 표현을 배우는 것이 가장 효과적이에요.
                </p>
                <p className="flex-auto">
                  도르마무가 제안하는 Native 표현으로 학습해보세요!
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <BookIcon className="h-5 w-5 flex-none" />
                문장으로 공부하자!
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  단어는 많이 아는데 문장에서 해석이 안 되시나요?
                </p>
                <p className="flex-auto">
                  의미는 맥락이 중요해요! 예문과 함께 학습해요!
                </p>
                <p className="flex-auto">
                  단어를 저장하면 예문을 만들어줘요.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <AudioLines className="h-5 w-5 flex-none" />
                말할 수 있어야 들린다!
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  알고 있는 단어인데 들리지 않나요?
                </p>
                <p className="flex-auto">
                  실제로 말할 수 있어야 들려요!
                </p>
                <p className="flex-auto">
                  올바른 발음으로 말하기 연습을 해봐요!
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex flex-col justify-start border py-8 px-6 rounded-lg hover:bg-gray-100 h-full">
                <span className="text-lg font-semibold">베타 테스터 신청하기</span>
                <WaitlistForm className="w-full mt-2" />
              </dt>
            </div>
          </dl>
        </div>
      </section>

      {/* Example Courses */}
      <section className="container px-4 py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center">
          미리 만나는 도르마무!
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
          <div className="relative">
            <img
              src="/push_half.png"
              alt="내가 정한 시간에 Push 알림"
              width={360}
              height={400}
              className="rounded-xl"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">내가 정한 시간에 Push 알림</h3>
              <p className="text-sm text-muted-foreground">
                내가 정한 시간에 복습해요. 언제 복습을 해야 가장 효과적인지는 도르마무가 알려줄게요.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/practice_half.png"
              alt="바로 복습하기"
              width={360}
              height={400}
              className="rounded-xl"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">바로 복습하기</h3>
              <p className="text-sm text-muted-foreground">
                직관적인 UX로 바로 복습해요. 도르마무가 제공하는 영문 해석을 통해 영어식 사고를 학습할 수 있어요.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/register_half.png"
              alt="직관적인 등록 UX"
              width={360}
              height={400}
              className="rounded-xl"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">직관적인 등록 UX</h3>
              <p className="text-sm text-muted-foreground">
                모르는 문장이나 단어를 등록만 해요. 어떤 뜻인지, 어떤 발음인지, 어떤 예문으로 학습해야 하는지는 도르마무가 알려줄게요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              영어, 이제 도르마무와 함께 해요
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              베타 기간 한정 무료. 추후 월 결제 제공해요. 언제든 취소 또는 변경할 수 있어요.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-md">
            <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold leading-6 mb-2">Basic</h3>
              <span className="text-sm font-semibold text-red-500">베타 기간 한정 무료</span>
              <p className="flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight">
                  0원 <span className="line-through text-gray-500">7,900원</span>
                </span>
                <span className="text-sm font-semibold text-muted-foreground">/ 한달</span>
              </p>
              <p className="mt-6 text-base text-muted-foreground">The Starter Plan includes:</p>
              <ul className="mt-8 space-y-3">
                {[
                  '최적의 반복 학습 주기에 맞춘 리마인드',
                  '올바른 발음을 듣고 말하는 연습 환경',
                  'AI 기반의 맥락에 맞는 다양한 예문 생성',
                  '영어식 사고 방식 훈련',
                ].map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-blue-600" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t bg-gray-50">
        <div className="container px-4 py-20 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              베타 테스터 신청하고 무료 혜택 받기
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              도르마무는 영어 학습자들을 진심으로 응원해요.<br />
              영어 학습 플랫폼으로 발전하기 위해 사용자들의 피드백을 받아 기능을 개선해나가고 있어요.
            </p>
            <div className="mt-4">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 akind studio. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <a href="mailto:ljyhanll@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}

