import Image from "next/image";

export  function HomeSection() {
  return (
    <div className="flex items-center justify-center h-screen bg-custom-gradient">
      <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold flex items-center fadeIn">
        <span className="text-tomato mr-2 bg-tomato-gradient bg-clip-text text-transparent">
          저희
        </span>
        <span>에게 맡기세</span>
        <Image
          src="/text.png"
          alt="text"
          width={40} 
          height={40} 
          className="mt-[-22px] max-md:mt-[-16px] fadeIn"
        />
      </div>
    </div>
  );
}
