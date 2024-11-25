export function ExampleCourses() {
  return (
    <section className="container px-4 py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center">
        미리 만나는 ReFit
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
              내가 정한 시간에 복습해요. 언제 복습을 해야 가장 효과적인지는 ReFit이 알려줄게요.
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
              직관적인 UX로 바로 복습해요. ReFit이 제공하는 영문 해석을 통해 영어식 사고를 학습할 수 있어요.
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
              모르는 문장이나 단어를 등록만 해요. 어떤 뜻인지, 어떤 발음인지, 어떤 예문으로 학습해야 하는지는 ReFit이 알려줄게요.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

