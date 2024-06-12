import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SwapContentType = {
  className?: string;
  materialSymbolsswapCalls?: string;
  swap?: string;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const SwapContent: NextPage<SwapContentType> = ({
  className = "",
  materialSymbolsswapCalls,
  swap,
  loremIpsumDolorSitAmetCon,
  propMinWidth,
}) => {
  const swapStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-80 shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[62px] box-border relative gap-[16px] z-[3] text-left text-xl text-white font-sarabun ${className}`}
    >
      <div className="w-[45px] h-[45px] relative rounded-3xs bg-button-green" />
      <img
        className="w-6 h-6 absolute !m-[0] top-[11px] left-[10px] overflow-hidden shrink-0 z-[1]"
        loading="lazy"
        alt=""
        src={materialSymbolsswapCalls}
      />
      <b
        className="relative tracking-[-0.04em] leading-[22px] font-bold inline-block min-w-[45px] mq450:text-base mq450:leading-[18px]"
        style={swapStyle}
      >
        {swap}
      </b>
      <p className="m-0 self-stretch relative text-base tracking-[-0.04em] leading-[22px] font-bold text-greytext">
        {loremIpsumDolorSitAmetCon}
      </p>
    </div>
  );
};

export default SwapContent;
