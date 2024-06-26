import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeItem, setActiveItem] = useState<string | null>(
    navItems.length > 0 ? navItems[0].name : null // Initialize with "Home" if it exists
  );

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const scrollY = window.scrollY;
      const direction = scrollY - lastScrollY;

      if (scrollY === 0) {
        setVisible(true);
      } else if (scrollY < 150) {
        setVisible(true);
      } else {
        if (direction > 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

      setLastScrollY(scrollY);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed md:space-x-6 w-[90%] px-6 inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center border  rounded-full bg-black-100 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={() => setActiveItem(navItem.name)}
            className={cn(
              "relative flex items-center text-neutral-50 hover:text-neutral-300  px-4 py-2 rounded-full",
              activeItem === navItem.name
                ? "border border-neutral-200 border-white/[0.2]"
                : "border-none"
            )}
          >
            <span className="block ">{navItem.icon}</span>
            <span className="hiden text-sm ">{navItem.name}</span>
            {activeItem === navItem.name && (
              <span className="absolute w-[80%] inset-x-0 -bottom-px mx-auto h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            )}
          </a>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
