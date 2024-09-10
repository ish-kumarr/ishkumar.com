import Image from "next/image";
import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg"

export const HeroSection = () => {
  return (
    <div className="z-0 overflow-x-clip ">


      <div className="absolute inset-0 mask-image">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`, }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>

      
      </div>

      <div className="container py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <div className="flex flex-col items-center ">
          <Image src={memojiImage} className="size-[100px]" alt="A mesmerizing computer emoji" width={300} height={3} />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 h-2.5 w-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">Hi, I&apos;m Ish Kumar</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, high performing web applications. Let&apos;s discuss your next project.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 border bg-white border-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>

    </div>
  );
};
