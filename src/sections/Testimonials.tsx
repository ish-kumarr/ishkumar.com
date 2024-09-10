import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import GrainImage from "@/assets/images/grain.jpg";

import Image from "next/image";
import { Card } from "./Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Ajay Sharma",
    position: "Owner @ Sharma's Cafe",
    text: "Ish Kumar did an outstanding job creating an online presence for my cafe. The website he developed is vibrant and perfectly reflects the ambiance of our café. We've seen a noticeable increase in foot traffic since its launch. Highly recommended!",
    avatar: memojiAvatar1, // Replace with Ajay Sharma's avatar if available
  },
  {
    name: "Priya Patel",
    position: "Creative Director @ DesignStudio",
    text: "Working with Ish was a fantastic experience. His skills in frontend development and attention to detail brought our design vision to life. The results have surpassed our expectations, and our clients are thrilled with the new look.",
    avatar: memojiAvatar2, // Replace with Priya Patel's avatar if available
  },
  {
    name: "Jatin Sharma",
    position: "Owner @ Orizzel India Pvt Limited",
    text: "Ish Kumar developed Ozzy, an AI-assisted chatbot for Orizzel, which has been a game-changer for our food ordering process. The chatbot has significantly improved user interaction and streamlined orders. Ish's innovative approach and technical expertise have been invaluable.",
    avatar: memojiAvatar3, // Replace with Jatin Sharma's avatar if available
  },
  {
    name: "Neha Desai",
    position: "Product Lead @ GlobalTech",
    text: "Ish is a master of frontend development. He took our complex product requirements and transformed them into a user-friendly and engaging interface. The positive feedback from our users has been overwhelming.",
    avatar: memojiAvatar4, // Replace with Neha Desai's avatar if available
  },
  {
    name: "Future Star Client",
    position: "Success Story Maker",
    text: "I’m absolutely sure that the next glowing testimonial will come from you! Let’s team up and make your success the next big highlight everyone will be talking about!",
    avatar: memojiAvatar5, // Replace with your avatar or a placeholder
  },

];


export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">

        <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don't just take my word for it. See what my clients have to say about my work." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:2400s] hover:[animation-play-state:paused]">
            {[...new Array(30)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full flex-shrink-0 justify-center items-center">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="text-sm mt-4 md:text-base">{testimonial.text}</p>

                  </Card>
                ))}
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>);
};
