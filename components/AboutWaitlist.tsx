import type { NextPage } from "next";

export type AboutWaitlistType = {
  className?: string;
};

const AboutWaitlist: NextPage<AboutWaitlistType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[75px] box-border max-w-full text-left text-23xl text-white font-sarabun lg:pb-[49px] lg:box-border mq825:pb-8 mq825:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[175px] px-[140px] pb-[324px] box-border relative gap-[160px] max-w-full lg:pt-[114px] lg:pb-[211px] lg:box-border mq825:gap-[40px] mq825:pt-[74px] mq825:px-[35px] mq825:pb-[137px] mq825:box-border mq450:gap-[20px] mq1400:gap-[80px] mq1400:pl-[70px] mq1400:pr-[70px] mq1400:box-border">
        <div className="w-[1051px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit mq825:text-15xl mq825:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
            <span>{`Discover the `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Waitlist
            </span>
          </h1>
        </div>
        <div className="w-[400px] flex flex-col items-start justify-start gap-[15px] max-w-full text-17xl">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit mq825:text-10xl mq825:leading-[48px] mq450:text-3xl mq450:leading-[36px]">
            <span>{`About `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Waitlist
            </span>
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[67px] text-base text-greytext mq450:gap-[33px]">
            <p className="m-0 self-stretch relative tracking-[-0.04em] leading-[22px] font-bold">
              <span className="block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. `}</span>
              <span className="block">{` `}</span>
              <span className="block">
                Vestibulum leo diam, efficitur non felis id, feugiat condimentum
                neque.
              </span>
            </p>
            <button className="cursor-pointer py-2 px-[9px] bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[5px] border-[1px] border-solid border-border-lines">
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
        
      </div>
    </section>
  );
};

export default AboutWaitlist;
