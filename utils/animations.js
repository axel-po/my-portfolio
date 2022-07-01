import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const slideInTop = (el, markers, duration, delay, trigger) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: duration || 0.6,
      delay: delay || 0.4,
      stagger: 0.2,
      scrollTrigger: {
        trigger: trigger ? trigger : el,
        start: "top-=150 center",
        end: "bottom center",
        markers: markers ? true : false,
      },
    }
  );
};

export const fadeIn = (el, markers, duration, delay) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
    },
    {
      duration: duration || 0.6,
      delay: delay || 0.4,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom center",
        markers: markers ? true : false,
      },
    }
  );
};
