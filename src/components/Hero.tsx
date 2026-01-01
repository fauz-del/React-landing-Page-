import { BiDiamond, BiLink } from "react-icons/bi";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center min-h-[90vh] px-6 lg:px-20 py-20 gap-16 lg:gap-24">

      <div
        data-aos="fade-right"
        className="flex-1 flex flex-col justify-center items-start gap-6 max-w-xl self-start lg:self-center pt-10 lg:pt-0"
      >
        <div className="relative w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <BiDiamond className="text-2xl text-primary" /> INTRODUCING
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
          EMAIL FOR <br /> DEVELOPERS
        </h1>

        <p className="text-base sm:text-lg text-gray-400">
          The best way to reach humans instead of spam folders, delivering transactional and marketing emails at scale.
        </p>

        <div className="flex gap-4 mt-4">
          <a className="flex gap-2 border border-[#2a2a2a] py-2 sm:py-1 px-5 sm:px-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-[#1a1a1a] transition">
            Documentation <BiLink className="text-2xl text-primary" />
          </a>
          <a className="flex gap-2 border border-[#2a2a2a] py-2 sm:py-1 px-5 sm:px-4 rounded-full text-sm sm:text-lg font-semibold bg-gray-300 text-black hover:text-white hover:bg-[#1a1a1a] transition">
            Get Started <BiLink className="text-2xl text-primary" />
          </a>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="w-full sm:w-80 md:w-96 lg:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[600px]">
         <Spline
           scene="https://prod.spline.design/xT2D5-PXRdX9r7gu/scene.splinecode"
           className="w-full h-full"
          />
       </div>
     </div>
      

    </main>
  );
};

export default Hero;