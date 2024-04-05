import { useRef} from "react";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import ParallaxWhy from "@/components/ParallaxWhy";
import MapComponent from "@/components/MapComponent";
import Instruction from "@/components/Instruction";
import Visualization from "@/components/Visualization";
import TabularForm from "@/components/TabularForm";
import Footer from "@/components/Footer";


function Dashboard() {
  const instructionRef = useRef<HTMLDivElement>(null);

  const scrollToInstruction = () => {
    if (instructionRef.current) {
      instructionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <WelcomeAnimation scrollToInstruction={scrollToInstruction} />
      <ParallaxWhy />
      <MapComponent />
      <Instruction ref={instructionRef} />
      <Visualization/>
      <TabularForm/>
      <Footer/>
    </>
  );
}

export default Dashboard;
