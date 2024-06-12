import type { NextPage } from "next";

export type LandingPageType = {
  className?: string;
};

const LandingPage: NextPage<LandingPageType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1433.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-60px] text-left text-39xl text-white font-sarabun ${className}`}
    >
      <div className="w-[1153.9px] flex flex-row items-start justify-start max-w-full">
        <div className="w-[347px] flex flex-col items-start justify-start pt-[262px] px-0 pb-0 box-border max-w-full mq825:pt-20 mq825:box-border">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <h1 className="!m-[0] h-[154px] w-[485px] absolute top-[calc(50%_-_77px)] right-[-138px] text-inherit tracking-[-0.04em] leading-[54px] font-bold font-inherit inline-block z-[1] mq825:text-27xl mq825:leading-[43px] mq450:text-16xl mq450:leading-[32px]">
              REFURBISHING THE REALM OF EXCHANGES
            </h1>
            <div className="flex-1 flex flex-col items-start justify-start gap-[207px] max-w-full text-base text-darkgray mq450:gap-[103px]">
              <p className="m-0 self-stretch relative tracking-[-0.06em] leading-[24px] font-light">
                <span className="block">The Exchange needed on Xion.</span>
                <span className="block">Everything awesome at one place.</span>
              </p>
              <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                <button className="cursor-pointer py-2 px-3.5 bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[5px] border-[1px] border-solid border-grey">
                  <b className="relative text-base font-bold font-sarabun text-greytext text-left inline-block min-w-[100px]">
                    Start Building
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-[15px] h-[15px] relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/mingcutearrowleftupline-2.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[859.8px] flex-1 flex flex-col items-start justify-end pt-[302px] px-[85px] pb-[301.8px] box-border relative max-w-full ml-[-201px] mq825:pt-[302px] mq825:pb-[196px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/vector.svg"
          />
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
    </div>
  );
};

export default LandingPage;
