import type { NextPage } from "next";

export type NewsletterType = {
  className?: string;
};

const Newsletter: NextPage<NewsletterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[111px] box-border max-w-full shrink-0 text-left text-xl text-white font-poppins mq825:pb-[72px] mq825:box-border ${className}`}
    >
      <div className="h-[400px] w-[1232px] overflow-hidden shrink-0 flex flex-col items-end justify-start py-[117px] px-[100px] box-border relative gap-[165px] max-w-full lg:h-auto mq825:gap-[41px] mq825:py-[76px] mq825:px-[25px] mq825:box-border mq450:gap-[21px] mq1400:gap-[82px] mq1400:pl-[50px] mq1400:pr-[50px] mq1400:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(31.2px)] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-border-lines" />
        <div className="self-stretch flex flex-row items-end justify-between shrink-0 [debug_commit:bf4bc93] max-w-full gap-[20px] text-29xl font-sarabun lg:flex-wrap">
          <div className="w-[529px] flex flex-col items-start justify-start gap-[18px] min-w-[529px] max-w-full z-[1] lg:flex-1 mq825:min-w-full">
            <img
              className="w-[120px] h-0.5 relative rounded-12xs"
              loading="lazy"
              alt=""
              src="/vector-115.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[26px] gap-[6px]">
              <h1 className="m-0 relative text-inherit font-bold font-inherit mq825:text-19xl mq450:text-10xl">
                Newsletter
              </h1>
              <p className="m-0 self-stretch relative text-xl font-bold text-greytext mq450:text-base">
                <span className="block">{`Subscribe to the Semi Hyphen newsletter `}</span>
                <span className="block">to be updated with the ecosystem.</span>
              </p>
            </div>
          </div>
          <div className="w-[350px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[350px] max-w-full text-xl text-greytext lg:flex-1 mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <b className="relative z-[1] mq450:text-base">
                Your email address
              </b>
              <input
                className="[outline:none] bg-gray-200 self-stretch h-10 relative rounded-3xs box-border min-w-[210px] z-[1] border-[1px] border-solid border-border-lines"
                type="text"
              />
              <div className="w-[101px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                <button className="cursor-pointer py-2 px-3.5 bg-sub-primary flex-1 shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-border-lines hover:bg-darkcyan hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray">
                  <b className="relative text-xl font-bold font-sarabun text-gray-100 text-left inline-block min-w-[61px]">
                    Sign in
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-[249px] relative hidden z-[2]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-button-green w-[45px] h-[45px]" />
          <img
            className="absolute top-[11px] left-[10px] w-6 h-6 overflow-hidden"
            alt=""
          />
          <b className="absolute top-[61px] left-[0px] tracking-[-0.04em] leading-[22px] mq450:text-base mq450:leading-[18px]">
            Swap
          </b>
          <div className="absolute top-[99px] left-[0px] text-base tracking-[-0.04em] leading-[22px] text-greytext inline-block w-80 h-[150px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam, efficitur non felis id,
            feugiat condimentum neque.
          </div>
        </div>
        <div className="w-80 h-[249px] relative hidden z-[3]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-button-green w-[45px] h-[45px]" />
          <img
            className="absolute top-[11px] left-[10px] w-6 h-6 overflow-hidden"
            alt=""
          />
          <b className="absolute top-[61px] left-[0px] tracking-[-0.04em] leading-[22px] mq450:text-base mq450:leading-[18px]">
            Liquidity
          </b>
          <div className="absolute top-[99px] left-[0px] text-base tracking-[-0.04em] leading-[22px] text-greytext inline-block w-80 h-[150px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam.
          </div>
        </div>
        <div className="w-80 h-[249px] relative hidden z-[4]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-button-green w-[45px] h-[45px]" />
          <img
            className="absolute top-[11px] left-[10px] w-6 h-6 overflow-hidden"
            alt=""
          />
          <b className="absolute top-[61px] left-[0px] tracking-[-0.04em] leading-[22px] mq450:text-base mq450:leading-[18px]">
            Bridge
          </b>
          <div className="absolute top-[99px] left-[0px] text-base tracking-[-0.04em] leading-[22px] text-greytext inline-block w-80 h-[150px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam, efficitur non felis id,
            feugiat condimentum neque.
          </div>
        </div>
        <div className="mr-[-342px] w-[606px] h-[170px] flex flex-row items-start justify-start relative max-w-full shrink-0">
          <div className="h-[170px] flex-1 relative max-w-full shrink-0 [debug_commit:bf4bc93] flex items-center justify-center z-[0]">
            <img
              className="h-full flex-1 overflow-hidden shrink-0 [debug_commit:bf4bc93] object-contain absolute left-[0px] top-[0px] w-full [transform:scale(4.668)]"
              loading="lazy"
              alt=""
              src="/frame-2085660365-3.svg"
            />
          </div>
          <img
            className="h-[310.1px] w-[769.5px] absolute !m-[0] top-[-350px] left-[-400px] object-contain z-[1] faded-border"
            alt=""
            src="/frame-2085660364@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
