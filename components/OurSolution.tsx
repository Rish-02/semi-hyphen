import type { NextPage } from "next";

export type OurSolutionType = {
  className?: string;
};

const OurSolution: NextPage<OurSolutionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[59px] pr-[3px] pl-0 box-border max-w-full shrink-0 text-left text-base text-white font-sarabun lg:pb-[38px] lg:box-border mq825:pb-[25px] mq825:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[175px] pb-[141px] pr-[137px] pl-[420px] box-border relative gap-[60px] max-w-full z-[1] lg:pt-[114px] lg:pb-[92px] lg:box-border mq825:gap-[30px] mq825:pl-[210px] mq825:pr-[68px] mq825:box-border mq450:gap-[15px] mq450:pt-[74px] mq450:px-5 mq450:pb-[60px] mq450:box-border">
        <div className="w-[982px] h-[509px] absolute !m-[0] bottom-[84px] left-[0px] text-greytext">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[-68px] max-h-full w-[1050px]"
            alt=""
            src="/vector-1.svg"
          />
          <div className="absolute top-[62px] left-[140px] font-light inline-block min-w-[93px] z-[1]">
            Our Solutions
          </div>
          <p className="m-0 absolute top-[339px] left-[141px] font-light z-[1]">
            Wallet Confirmation . Token acquisition . NFT acquisition
          </p>
          <h1 className="m-0 absolute top-[112px] left-[140px] text-23xl tracking-[-0.04em] leading-[54px] font-bold font-inherit text-white z-[1] mq825:text-15xl mq825:leading-[43px] mq450:text-6xl mq450:leading-[32px]">
            Our Waitlist Program-
          </h1>
          <h2 className="m-0 absolute top-[171px] left-[140px] text-17xl tracking-[-0.04em] leading-[54px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq825:text-10xl mq825:leading-[43px] mq450:text-3xl mq450:leading-[32px]">
            <p className="m-0">The following options for</p>
            <p className="m-0">whitelist capturing.</p>
          </h2>
        </div>
        <h1 className="m-0 relative text-23xl tracking-[-0.04em] leading-[60px] font-bold font-inherit inline-block max-w-full mq825:text-15xl mq825:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
          <span>{`Waitlist Program `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Semi Hyphen
          </span>
        </h1>
        <div className="self-stretch h-[480px] flex flex-row items-start justify-end max-w-full">
          <div className="self-stretch w-[500px] flex flex-col items-start justify-start gap-[15px] max-w-full z-[1]">
            <div className="self-stretch h-[150px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[30px] px-[30px] pb-[60px] box-border relative gap-[214px] max-w-full mq825:pt-5 mq825:pb-[39px] mq825:box-border mq450:gap-[107px]">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(31.2px)] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-border-lines" />
              <div className="flex flex-row items-start justify-start gap-[10px] shrink-0 [debug_commit:bf4bc93]">
                <b className="relative tracking-[-0.04em] leading-[22px] font-bold inline-block min-w-[14px] z-[1]">
                  1.
                </b>
                <p className="m-0 relative text-xl tracking-[-0.04em] leading-[30px] font-bold z-[1] mq450:text-base mq450:leading-[24px]">
                  <span className="block">{`Join waitlist by signing with you `}</span>
                  <span className="block">
                    Wallet address or with your email.
                  </span>
                </p>
              </div>
              <div className="w-[353px] h-[170px] flex flex-row items-start justify-start py-0 px-12 box-border max-w-full shrink-0 mq825:pl-6 mq825:pr-6 mq825:box-border">
                <div className="h-[170px] w-[606px] relative shrink-0 [debug_commit:bf4bc93] max-w-[236%] flex items-center justify-center">
                  <img
                    className="h-full w-full shrink-0 [debug_commit:bf4bc93] object-contain absolute left-[0px] top-[0px] [transform:scale(4.668)]"
                    alt=""
                    src="/frame-2085660365.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[150px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[25px] px-[30px] pb-[95px] box-border relative gap-[249px] max-w-full mq825:pt-5 mq825:pb-[62px] mq825:box-border mq450:gap-[124px]">
              <div className="w-full h-full absolute !m-[0] right-[0px] bottom-[-1px] left-[0px] [backdrop-filter:blur(31.2px)] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-border-lines" />
              <div className="flex flex-row items-start justify-start gap-[10px] shrink-0 [debug_commit:bf4bc93]">
                <b className="relative tracking-[-0.04em] leading-[22px] font-bold inline-block min-w-[14px] z-[1]">
                  2.
                </b>
                <b className="relative text-xl tracking-[-0.04em] leading-[30px] z-[1] mq450:text-base mq450:leading-[24px]">
                  Should stake 20,000 SCLX tokens.
                </b>
              </div>
              <div className="w-[353px] h-[170px] flex flex-row items-start justify-start py-0 px-12 box-border max-w-full shrink-0 mq825:pl-6 mq825:pr-6 mq825:box-border">
                <div className="h-[170px] w-[606px] relative shrink-0 [debug_commit:bf4bc93] max-w-[236%] flex items-center justify-center">
                  <img
                    className="h-full w-full shrink-0 [debug_commit:bf4bc93] object-contain absolute left-[0px] top-[0px] [transform:scale(4.668)]"
                    loading="lazy"
                    alt=""
                    src="/frame-2085660365.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-[25px] px-[30px] relative gap-[10px]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(31.2px)] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-border-lines" />
              <b className="relative tracking-[-0.04em] leading-[22px] font-bold inline-block min-w-[14px] z-[1]">
                3.
              </b>
              <b className="relative text-xl tracking-[-0.04em] leading-[30px] z-[1] mq450:text-base mq450:leading-[24px]">
                Should have Scalex Bot NFT
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
