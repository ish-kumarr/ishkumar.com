'use client'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "./Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from 'framer-motion'
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },

  {
    title: "HTML5",
    iconType: HTMLIcon,
  },

  {
    title: "CSS3",
    iconType: CssIcon,
  },

  {
    title: "React",
    iconType: ReactIcon,
  },

  {
    title: "Github",
    iconType: GithubIcon,
  },

  {
    title: "Chrome DevTools",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: 'Music',
    emoji: '🎶',
    left: '5%',
    top: '5%',
  },

  {
    title: 'VFx',
    emoji: '🎥',
    left: '5%',
    top: '50%',
  },


  {
    title: 'Gaming',
    emoji: '🎮',
    left: '60%',
    top: '5%',
  },


  {
    title: 'Graphics Design',
    emoji: '🎨',
    left: '20%',
    top: '30%',
  },


  {
    title: 'UI/UX',
    emoji: '👨‍🎨',
    left: '70%',
    top: '75%',
  },

  {
    title: 'Movies',
    emoji: '🎬',
    left: '40%',
    top: '75%',
  },


  {
    title: 'Production',
    emoji: '🎧',
    left: '55%',
    top: '50%',
  },

  {
    title: 'Ideathons',
    emoji: '🏆',
    left: '4%',
    top: '75%',
  },

]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (

    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, What I do and more about me." />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="See what I'm exploring right now"
              />
              <div className="w-40 mx-auto mt-2 md:-mt-5">
                <Image src={bookImage} alt="Book Cover" />
              </div>

            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">

              <CardHeader
                title="My Toolbox"
                description="Explore the tools and technologies I use to craft exceptional digital experiences"
                className=""
              />

              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="-translate-x-1/2 animate-move-left [animation-duration:170s]" />
              <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:60s]" />
            </Card>
          </div>


          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">

            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">

              <CardHeader
                title="Beyond The Code"
                description="Explore my Interests and hobbies beyond the coding world!"
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 rounded-full absolute " style={{
                    left: hobby.left,
                    top: hobby.top,

                  }}
                  drag
                  dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 ">{hobby.title}</span>
                    <span className="">{hobby.emoji}</span>
                  </motion.div>

                ))}
              </div>
            </Card>



            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">

              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">



              <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>

                <Image className="size-20 " src={smileMemoji} alt="Smile Memoji" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>);
};
