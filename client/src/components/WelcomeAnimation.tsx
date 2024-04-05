import React from "react";
import Lottie from "lottie-react";
import mapAnimation from "../assets/mapAnimation.json";

interface WelcomeAnimationProps {
  scrollToInstruction: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ scrollToInstruction }) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div
        className="relative w-full"
        style={{ paddingBottom: "56.25%", height: 0 }}
      >
        <Lottie
          animationData={mapAnimation}
          loop
          autoplay
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Cutting-edge optimization platform empowers businesses to streamline
          freight movement, enhance supply chain efficiency, and drive cost
          savings like never before.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={scrollToInstruction}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
