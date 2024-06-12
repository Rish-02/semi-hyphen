import type { NextPage } from "next";

export type HowitWorksType = {
  className?: string;
};

const HowitWorks: NextPage<HowitWorksType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[235px] pr-[21px] pl-5 box-border max-w-full text-left text-23xl text-white font-sarabun lg:pb-[153px] lg:box-border mq450:pb-[99px] mq450:box-border ${className}`}
    >
      <div className="w-[731px] flex flex-col items-start justify-start gap-[75px] max-w-full mq825:gap-[37px] mq450:gap-[19px]">
        <div className="w-[646px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit mq825:text-15xl mq825:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
            <span>{`How it `}</span>
            <span className="text-primary-colour">Works?</span>
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full text-13xl text-greytext mq825:gap-[30px]">
          <div className="self-stretch h-[285px] relative max-w-full mq825:h-auto mq825:min-h-[285]">
            <div className="absolute top-[210px] left-[0px] w-full flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between py-0 pr-[91px] pl-[94px] box-border relative shrink-0 [debug_commit:bf4bc93] max-w-full gap-[20px] mq825:flex-wrap mq825:pl-[47px] mq825:pr-[45px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[24.4px] w-full absolute !m-[0] right-[0px] bottom-[9.6px] left-[0px] max-w-full flex items-center justify-center z-[0]">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[-2px] [transform:scale(1.028)]"
                    loading="lazy"
                    alt=""
                    src="/group-47032.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start pt-[11px] px-[17px] pb-1 relative z-[1] text-primary-colour">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs bg-button-green box-border border-[1px] border-solid border-border-lines" />
                  <b className="relative tracking-[-0.04em] leading-[60px] font-bold inline-block min-w-[40px] z-[1] mq825:text-7xl mq825:leading-[48px] mq450:text-lgi mq450:leading-[36px]">
                    #1
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start pt-[11px] px-[17px] pb-1 relative z-[1]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs bg-light-black box-border border-[1px] border-solid border-border-lines" />
                  <b className="relative tracking-[-0.04em] leading-[60px] font-bold inline-block min-w-[40px] z-[1] mq825:text-7xl mq825:leading-[48px] mq450:text-lgi mq450:leading-[36px]">
                    #2
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start pt-[11px] px-[17px] pb-1 relative z-[1]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs bg-light-black box-border border-[1px] border-solid border-border-lines" />
                  <b className="relative tracking-[-0.04em] leading-[60px] font-bold inline-block min-w-[40px] z-[1] mq825:text-7xl mq825:leading-[48px] mq450:text-lgi mq450:leading-[36px]">
                    #3
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start pt-[11px] px-[17px] pb-1 relative z-[1]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs bg-light-black box-border border-[1px] border-solid border-border-lines" />
                  <b className="relative tracking-[-0.04em] leading-[60px] font-bold inline-block min-w-[40px] z-[1] mq825:text-7xl mq825:leading-[48px] mq450:text-lgi mq450:leading-[36px]">
                    #4
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[306px] w-[120px] h-[232px] z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[0px] top-[5px] [transform:scale(1.067)]"
                loading="lazy"
                alt=""
                src="/frame-2085660428.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full text-5xl text-sub-primary">
            <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <b className="relative tracking-[-0.04em] leading-[60px] font-bold mq450:text-lgi mq450:leading-[48px]">
                  Task Completion
                </b>
              </div>
              <blockquote className="m-0 self-stretch relative text-xl tracking-[-0.04em] leading-[60px] font-bold text-white text-center mq450:text-base mq450:leading-[48px]">
                "Join the waitlist now to secure your spot and gain early access
                to the innovative features and benefits of the Semi Hyphen
                ecosystem."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
