"use client";
import { useState } from "react";

export default function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqData = [
    {
      question: "영상 유형 선택",
      answer:
        "광고/리포트/IR/프레젠테이션 등 다양한 영상 유형을 선택할 수 있습니다.",
    },
    {
      question: "연락 받으실 담당자 성함",
      answer: "성함을 입력하시고, 담당자가 연락을 드릴 수 있습니다.",
    },
    {
      question: "이메일",
      answer: "본인 이메일을 정확히 입력해주세요.",
    },
    {
      question: "휴대폰 번호",
      answer: "휴대폰 번호를 통해 추가적인 연락을 드릴 수 있습니다.",
    },
    {
      question: "의뢰하실 영상내용",
      answer:
        "광고, 홍보, 프로모션 등 제작하시고자 하는 영상 내용을 간단히 기재해주세요.",
    },
    {
      question: "참고 영상",
      answer: "참고할 영상을 함께 제공해주시면, 맞춤형 서비스를 제공합니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-lg p-6 rounded-lg">
        <h2 className="text-center text-lg font-bold text-red-500 mb-2">
          영상 제작 문의
        </h2>
        <p className="text-center text-2xl font-extrabold mb-4">
          영상 제작이 필요하다면, 지금 문의 주세요.
        </p>
        <p className="text-center mb-6 text-gray-400">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
          연락 드리겠습니다.
        </p>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-lg">
              <div
                className="p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              {selected === i && (
                <div className="p-4 text-gray-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bagian bawah yang ditambahkan */}
        <div className="mt-6">
          <p className="text-sm text-orange-500 mb-4">
            * 참고할만한 영상이나 유사한 영상의 링크 주소를 적어주시면 더 정확히
            안내해드리겠습니다.
          </p>
          <div className="flex items-start mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">개인정보처리방침에 동의합니다.</label>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="py-2 px-6 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
            >
              문의 보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
