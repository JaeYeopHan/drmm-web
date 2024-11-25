import { AudioLines, BookIcon, CheckCircle2, IterationCcwIcon, Zap } from 'lucide-react'
import { WaitlistForm } from './waitlist-form'

export function Features() {
  return (
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
                ReFit이 제안하는 Native 표현으로 학습해보세요!
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
  )
}

