import type { NextPage } from "next";

export type JoinCommunityType = {
  className?: string;
};

const JoinCommunity: NextPage<JoinCommunityType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[216px] box-border max-w-full shrink-0 text-left text-23xl text-white font-sarabun mq825:pb-[140px] mq825:box-border ${className}`}
    >
      <div className="w-[848px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px]">
        <div className="w-[744px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit mq825:text-15xl mq825:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
            <span>{`Join Our `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Community
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[79px] text-center text-53xl lg:pl-[39px] lg:pr-[39px] lg:box-border">
          <h1 className="m-0 w-[690px] relative text-inherit tracking-[-0.04em] leading-[80px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#052c26)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq825:text-39xl mq825:leading-[64px] mq450:text-24xl mq450:leading-[48px]">
            <p className="m-0">Sign Up and Follow Our</p>
            <p className="m-0">Community Pages</p>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3px] pr-1.5 pl-[313px] gap-[124px] lg:flex-wrap lg:gap-[62px] lg:justify-center lg:pl-[156px] lg:box-border mq825:gap-[31px] mq825:pl-[78px] mq825:box-border mq450:gap-[15px] mq450:pl-5 mq450:box-border">
          <div className="ml-[-314px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <button className="cursor-pointer py-2 px-[19px] bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-grey">
              <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/primetwitter@2x.png"
                />
              </div>
              <b className="relative text-5xl font-bold font-sarabun text-greytext text-left inline-block min-w-[80px] mq450:text-lgi">
                Twitter
              </b>
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/mingcutearrowleftupline-5.svg"
                />
              </div>
            </button>
          </div>
          <button className="cursor-pointer py-2 px-[19px] bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-grey">
            <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/mingcutetelegramfill.svg"
              />
            </div>
            <b className="relative text-5xl font-bold font-sarabun text-greytext text-left inline-block min-w-[101px] mq450:text-lgi">
              Telegram
            </b>
            <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/mingcutearrowleftupline-5.svg"
              />
            </div>
          </button>
          <button className="cursor-pointer py-2 px-[19px] bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-grey">
            <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/mingcutemediumline.svg"
              />
            </div>
            <b className="relative text-5xl font-bold font-sarabun text-greytext text-left inline-block min-w-[87px] mq450:text-lgi">
              Medium
            </b>
            <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/mingcutearrowleftupline-5.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
