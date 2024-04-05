import React from "react";
import { Parallax } from "react-parallax";
import backgroundImage from "../assets/truck.jpeg"; // Path to your background image

const ParallaxWhy: React.FC = () => {
  return (
    <div className="min-h-screen mt-24">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={backgroundImage}
        bgImageAlt="background"
        strength={-400}
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="text-white text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Why OptiLog?</h1>
          <p className="text-lg mb-4">
            Efficiency: Optimize your logistics operations with precision and
            speed, ensuring goods reach their destinations on time and within
            budget.
          </p>
          <p className="text-lg mb-4">
            Cost Savings: Reduce transportation costs and overhead expenses,
            maximizing your bottom line and improving overall profitability.
          </p>
          <p className="text-lg mb-4">
            Strategic Insights: Gain valuable insights into your supply chain
            dynamics, identify bottlenecks, and unlock opportunities for
            improvement.
          </p>
          <p className="text-lg mb-4">
            User-Friendly Interface: Our intuitive interface makes it easy to
            input data, run complex optimization models, and visualize results
            in real-time.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxWhy;
