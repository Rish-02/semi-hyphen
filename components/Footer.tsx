import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-bg-colour box-border overflow-hidden flex flex-col items-end justify-start pt-[88px] pb-5 pr-[140px] pl-0 gap-[212px] max-w-full shrink-0 text-left text-xs text-lightgray font-sarabun border-t-[1px] border-solid border-border-lines mq825:gap-[106px] mq825:pt-[57px] mq825:pr-[70px] mq825:box-border mq450:gap-[53px] mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-[30px] box-border max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
        <img
          className="h-[103px] w-[150px] relative object-contain"
          loading="lazy"
          alt=""
          src="/logo13-3@2x.png"
        />
        <div className="w-[660px] flex flex-row items-start justify-start pt-0 pb-[25px] pr-[33px] pl-0 box-border gap-[272px] max-w-full mq825:flex-wrap mq825:gap-[136px] mq450:gap-[68px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[96px] min-w-[123px]">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <b className="relative leading-[150%] font-bold inline-block min-w-[44px]">
                Product
              </b>
              <div className="flex flex-col items-start justify-start gap-[5px] text-sm text-white">
                <b className="relative leading-[20px] font-bold inline-block min-w-[24px]">
                  Doc
                </b>
                <b className="relative leading-[20px] font-bold inline-block min-w-[50px]">
                  Waitlist
                </b>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
              <b className="relative leading-[150%] font-bold inline-block min-w-[22px]">
                Info
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm text-white">
                <b className="relative leading-[20px] font-bold inline-block min-w-[38px]">
                  Home
                </b>
                <b className="relative leading-[20px] font-bold inline-block min-w-[50px]">
                  Waitlist
                </b>
                <b className="relative leading-[20px] font-bold inline-block min-w-[58px]">
                  About Us
                </b>
                <b className="relative leading-[20px] font-bold inline-block min-w-[73px]">
                  Community
                </b>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-2 px-3.5 bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-border-lines hover:bg-darkcyan hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray">
            <b className="relative text-xl font-bold font-sarabun text-gray-100 text-left inline-block min-w-[106px]">
              Launch App
            </b>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-3 pl-0 box-border max-w-full text-181xl text-grey">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1400:flex-wrap">
          <div className="w-[1107px] flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#132b28)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq825:text-61xl mq825:leading-[36px] mq450:text-31xl mq450:leading-[24px]">
              Semi Hyphen
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5px] text-5xs">
            <div className="w-[15px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border">
              <div className="self-stretch h-[15px] relative">
                <b className="absolute top-[3px] left-[5px] tracking-[-0.04em] leading-[10px] font-bold inline-block min-w-[4px]">
                  c
                </b>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-grey" />
              </div>
            </div>
            <b className="relative text-sm tracking-[-0.04em] leading-[60px] inline-block text-greytext min-w-[109px]">
              Semi Hyphen 2024
            </b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
