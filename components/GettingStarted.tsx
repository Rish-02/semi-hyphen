import type { NextPage } from "next";
import SwapContent from "./SwapContent";

export type GettingStartedType = {
  className?: string;
};

const GettingStarted: NextPage<GettingStartedType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[217px] box-border max-w-full text-left text-23xl text-white font-sarabun mq825:pb-[141px] mq825:box-border mq450:pb-[92px] mq450:box-border ${className}`}
    >
      <div className="w-[1232px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[60px] px-[60px] pb-[111px] box-border relative gap-[60px] max-w-full mq825:gap-[15px] mq825:pt-[39px] mq825:pb-[72px] mq825:box-border mq1400:gap-[30px] mq1400:pl-[30px] mq1400:pr-[30px] mq1400:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(31.2px)] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-border-lines" />
        <div className="w-[606px] h-[170px] !m-[0] absolute top-[481px] left-[810px] flex flex-row items-start justify-start max-w-full">
          <div className="h-[170px] flex-1 relative max-w-full z-[1] flex items-center justify-center">
            <img
              className="h-full flex-1 overflow-hidden z-[1] object-contain absolute left-[0px] top-[0px] w-full [transform:scale(4.668)]"
              loading="lazy"
              alt=""
              src="/frame-2085660365-2.svg"
            />
          </div>
          <img
            className="h-[310.1px] w-[769.5px] absolute !m-[0] top-[-180px] left-[-340px] object-contain z-[2] faded-border"
            alt=""
            src="/frame-2085660364@2x.png"
          />
        </div>
        <div className="w-[1035px] flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
          <div className="w-[387px] flex flex-col items-start justify-start max-w-full z-[1]">
            <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit z-[1] mq825:text-15xl mq825:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
              <p className="m-0">Getting Started</p>
              <p className="m-0">with</p>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[37px] mt-[-60px]">
              <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq825:text-15xl mq825:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
                Semi Hyphen
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[39px] px-0 pb-0">
            <button className="cursor-pointer py-2 px-[9px] bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[5px] z-[1] border-[1px] border-solid border-border-lines">
              <b className="relative text-base font-bold font-sarabun text-bg-colour text-left inline-block min-w-[91px]">
                Join Waitlist
              </b>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[15px] h-[15px] relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/mingcutearrowleftupline-3.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[1080px] overflow-x-auto flex flex-row items-start justify-start gap-[60px] max-w-full text-xl lg:gap-[30px]">
          <SwapContent
            materialSymbolsswapCalls="/materialsymbolsswapcalls.svg"
            swap="Swap"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
          />
          <SwapContent
            materialSymbolsswapCalls="/claritycontainervolumesolid.svg"
            swap="Liquidity"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam."
            propMinWidth="74px"
          />
          <SwapContent
            materialSymbolsswapCalls="/iconparksolidbridgeone.svg"
            swap="Bridge"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
            propMinWidth="55px"
          />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
