import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  {
    title: 'Instagram',
    href: 'https://instagram.com/ishkkumarr'
  },

  {
    title: 'Mail',
    href: 'https://mailto:ishkumar.dev@gmail.com'
  },

  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/ish-sharma-2b7b86223'
  },

  {
    title: 'Github',
    href: 'https://github.com/ish-kumarr'
  },


]

export const Footer = () => {
  return <footer className="relative -z-10 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40 ">&copy; 2024. All rights reserved.</div>
        <nav className="flex flex-col items-center md:flex-row gap-8 ">

          <a className="inline-flex items-center gap-1.5" href="https://instagram.com/ishkkumarr">
            <span className="font-semibold">Instagram</span>
            <span ><ArrowUpRight className="size-4"/></span>
          </a>
          <a className="inline-flex items-center gap-1.5" href="https://mailto:ishkumar.dev@gmail.com">
            <span className="font-semibold">Mail</span>
            <span ><ArrowUpRight className="size-4"/></span>
          </a>
          <a className="inline-flex items-center gap-1.5" href="https://linkedin.com/in/ish-sharma-2b7b86223">
            <span className="font-semibold">LinkedIn</span>
            <span ><ArrowUpRight className="size-4" /></span>
          </a>
          <a className="inline-flex items-center gap-1.5" href="https://github.com/ish-kumarr">
            <span className="font-semibold">Github</span>
            <span ><ArrowUpRight className="size-4"/></span>
          </a>
        </nav>
      </div>
    </div>

  </footer>;
};
