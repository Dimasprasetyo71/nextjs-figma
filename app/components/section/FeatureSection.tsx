export function FeatureSection() {
  return (
    <section className="text-center bg-black h-screen py-10 max-w-full mx-auto flex flex-col justify-center">
      <h3 className="bg-tomato-gradient bg-clip-text text-transparent text-xl max-md:text-[24px] max-md:mt-40 mb-10 ">
        영상 제작소
      </h3>
      <h1 className="text-2xl mb-8 text-gray-400 ">
        당장 내일 <strong className="font-bold">‘고품질 맞춤 영상’</strong>을
        받아보세요.
      </h1>

      <div className="flex justify-center flex-wrap space-x-1 mb-10 ">
        {["FAST", "QUALITY", "LOW PRICE", "HIGH TECH"].map((title, index) => (
          <div
            key={index}
            className="w-36 h-36 border-2 border-text_tomato rounded-full flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110 mb-4"
          >
            <h2 className="text-lg text-white mb-2">{title}</h2>
            <p className="text-orange-400">
              {index === 0
                ? "X2"
                : index === 1
                ? "A++"
                : index === 2
                ? "1/2"
                : "Gen AI"}
            </p>
          </div>
        ))}
      </div>

      <div className="text-lg leading-relaxed">
        <h2 className="text-2xl text-white mb-5 ">
          AI VIDEO ON YOUR DEMAND
        </h2>
        <p className="text-gray-400 mb-4">
          가상인물 및 하나의 배경 이미지와 음악 생성 등 최신 국산 생성 AI 기술에
          <br />
          영상 전문가 타겟팅 마케팅을 지원하고 짧은시간 고퀄리티로 브랜드
          영상들을 만듭니다.
        </p>
        <p className="text-gray-400">
          가격은 절반으로, 속도는 두배로, 품질은 A++!
          <br />
          기업 정보, 제품 소개, 교육 및 행사 정보, 정보와 안내 영상을
          <br />
          당신이 원하는 그 영상들로 뚝딱 영상제작소에서 맡겨주세요.
        </p>
      </div>
    </section>
  );
}
