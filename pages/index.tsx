import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import OurSolution from "../components/OurSolution";
import GettingStarted from "../components/GettingStarted";
import JoinCommunity from "../components/JoinCommunity";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const HomePage: NextPage = () => {
  return (
    <div className="main-background w-full relative overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border bg-[url('/home-page@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <div className="w-[606px] h-[170px] !m-[0] absolute top-[361px] left-[1134px] flex flex-row items-start justify-start max-w-full">
        <div className="h-[170px] flex-1 relative max-w-full z-[1] flex items-center justify-center">
          <img
            className="h-full flex-1 overflow-hidden z-[1] object-contain absolute left-[0px] top-[0px] w-full [transform:scale(5.851)]"
            alt=""
            src="/frame-2085660371.svg"
          />
        </div>
        <img
          className="h-[230px] w-[230px] absolute !m-[0] top-[-41px] left-[8px] z-[2]"
          loading="lazy"
          alt=""
          src="/emblem2.svg"
        />
      </div>
      <div className="w-[606px] h-[170px] absolute !m-[0] top-[345px] left-[-303px] flex items-center justify-center z-[1]">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(5.851)]"
          alt=""
          src="/frame-2085660373.svg"
        />
      </div>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
        <Navbar />
        <LandingPage />
      </section>
      <OurSolution />
      <GettingStarted />
      <JoinCommunity />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
