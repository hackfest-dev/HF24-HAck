import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import vanAnimation from "./assets/van.json";

const WelcomeAnimation: React.FC = () => {
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (welcomeRef.current) {
      const welcome = welcomeRef.current;
      tl.fromTo(
        welcome,
        { x: "-200%" },
        { x: "200%", duration: 2, ease: "power1.inOut" }
      );
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div ref={welcomeRef}>
        <Lottie
          animationData={vanAnimation}
          loop
          autoplay
          style={{ width: "50%", height: "50%" }}
        />
      </div>
    </div>
  );
};

export default WelcomeAnimation;
