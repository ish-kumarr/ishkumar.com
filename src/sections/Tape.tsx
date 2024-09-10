import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";
const words = [
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "TypeScript",
  "API Integration",
  "UI/UX Design",
  "Version Control",
  "Database Management",
  "Web Development",
  "Payment Integration",
  "Authentication",
  "Email Templates",
  "CSS Animations",
  "Responsive Design",
  "Project Management"
];



export const TapeSection = () => {
  return <div className="py-16 lg:py24">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:200s] -translate-x-1/2">
          {[...new Array(10)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {words.map(word => (
                <div key={word} className="inline-flex gap-4 itmes-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                  <StarIcon className="size-6 text-gray-900 -rotate-8" />

                </div>

              ))}
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  </div>;
};
