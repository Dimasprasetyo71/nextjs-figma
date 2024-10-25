"use client";
import { CircleDot, NotebookPen, Users, Camera } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function MakingProses() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Adding GSAP animations when the form component mounts
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6 lg:px-12" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <CircleDot className="w-4 h-4 text-rose-500 animate-ping" />
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              MAKING PROCESS
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-zinc-900/50 rounded-3xl p-10 backdrop-blur-md shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">일반 제작</h2>
            <p className="text-zinc-400 text-center text-sm mb-8">
              제작 시작 후 5-8영업일 이내
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "STEP 1",
                  title: "사양 논의",
                  desc: "제작 전에 원하는 형태나 재질 등의 사양을 확인 후에 견적을 내드릴 예정",
                },
                {
                  step: "STEP 2",
                  title: "형상 가공",
                  desc: "스프링핀은 프레스가공을 통한 가공이 되며 자동화된 생산라인 스프링핀 제작과 최종점검",
                },
                {
                  step: "STEP 3",
                  title: "형상 설정",
                  desc: "원하시는 스프링핀의 치수대로 정밀 설정 그래 이어서, 제품 제작 및 품질 보증 실행",
                },
                {
                  step: "STEP 4",
                  title: "정밀 검사",
                  desc: "정밀 검사과정 거쳐 디자인, 품질 규정 만족 품질과 설계등을 만족하는 전문적 검증",
                },
                {
                  step: "STEP 5",
                  title: "최종 납품",
                  desc: "고객 요구에 신속하게 대응할 현장 및 납품 품질과 성능 모두 만족 제품",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="flex items-start gap-4 group">
                    <span className="absolute left-0 top-0 text-xs  font-semibold text-rose-500 animate-bounce">
                      {item.step}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-zinc-900/50 rounded-3xl p-10 backdrop-blur-md shadow-lg border border-rose-500/20">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
              Ploonet Quickserve™
            </h2>
            <p className="text-zinc-400 text-center text-sm mb-8">
              제작 시작 후 12~48시간 이내
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: NotebookPen,
                  title: "제작 의뢰",
                  desc: "제작 시작 전부터 필요한 의뢰 제작 후 의뢰 및 견적 등 진행 가능",
                },
                {
                  icon: Users,
                  title: "형상 설정",
                  desc: "스프링핀 숙련 제작 기술자의 형상 설정 그래 이어서, 제품 제작 및 품질 보증 실행",
                },
                {
                  icon: Camera,
                  title: "현장 및 납품",
                  desc: "현장 요청 시 12~48시간 내 신속한 현장 및 납품",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-rose-500 text-xs rounded-full px-2 py-0.5">
                      STEP {index + 1}
                    </div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <p className="text-zinc-500 text-xs text-center mt-10 max-w-2xl mx-auto leading-relaxed">
          * 상기 제작 과정 안내자료는 실제 프로젝트의 특성이나 상황, 그리고 제작
          및 공정 시간이 달라질 수도 있으며 고객의 수정을 
          <br />* 제작과 관련 세부 문의나 문의 사항이 있으실 경우, 고객센터 문의
          → support@ploonet.com 14:00 까지 상담 가능 시간입니다.
        </p>
      </div>
    </main>
  );
}
