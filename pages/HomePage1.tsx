import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import OurSolutionExtended from "../components/OurSolutionExtended";
import AboutWaitlist from "../components/AboutWaitlist";
import HowitWorks from "../components/HowitWorks";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const HomePage1: NextPage = () => {
  return (
    <div className="main-background w-full relative overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border bg-[url('/home-page@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <Navbar />
      <OurSolutionExtended />
      <AboutWaitlist />
      <HowitWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage1;
