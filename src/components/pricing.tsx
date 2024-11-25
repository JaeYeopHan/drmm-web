import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            영어, 이제 ReFit 과 함께 해요
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
  )
}

