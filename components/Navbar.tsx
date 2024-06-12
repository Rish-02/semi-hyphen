import type { NextPage } from "next";
import { useCallback } from "react";
import Doc from "./Doc";
import { useRouter } from "next/router";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  const router = useRouter();

  const onWaitlistItemContainerClick = useCallback(() => {
    router.push("/HomePage1");
  }, [router]);

  return (
    <header
      className={`self-stretch [background:linear-gradient(180deg,_#040404,_rgba(4,_4,_4,_0.8))] overflow-hidden flex flex-row items-end justify-between pt-5 pb-[21px] pr-[85px] pl-[60px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-xl text-greytext font-sarabun mq825:pl-[30px] mq825:pr-[42px] mq825:box-border mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[60px] max-w-full mq450:gap-[30px]">
        <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 text-primary-colour">
          <img
            className="self-stretch w-[42px] relative max-h-full object-cover min-h-[29px]"
            loading="lazy"
            alt=""
            src="/logo13-1@2x.png"
          />
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[118px] whitespace-nowrap">
            Semi Hyphen
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <Doc />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/mingcutearrowleftupline.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div
            className="flex flex-row items-start justify-start gap-[5px] cursor-pointer"
            onClick={onWaitlistItemContainerClick}
          >
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[71px]">
              Waitlist
            </a>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/mingcutearrowleftupline-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
        <div className="flex flex-row items-end justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <img
                className="h-[30px] w-[30px] relative object-cover min-h-[30px]"
                loading="lazy"
                alt=""
                src="/frame-2085660409@2x.png"
              />
              <img
                className="h-[30px] w-[30px] relative min-h-[30px]"
                loading="lazy"
                alt=""
                src="/frame-2085660408.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer py-1 px-3.5 bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-border-lines hover:bg-darkcyan hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray">
            <a className="[text-decoration:none] relative text-xl font-bold font-sarabun text-gray-100 text-left inline-block min-w-[106px]">
              Launch App
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
