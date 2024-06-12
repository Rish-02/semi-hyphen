import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  whoIsTheCEOOfBlazeswap?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  whoIsTheCEOOfBlazeswap,
  propWidth,
  propMinWidth,
}) => {
  const fAQExpandedStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const fAQQuestionStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-[975px] flex flex-row items-start justify-start text-left text-5xl text-white font-sarabun ${className}`}
    >
      <div className="h-[100px] flex-1 flex flex-col items-start justify-start relative gap-[5px] max-w-full mq825:h-auto mq825:min-h-[100]">
        <div className="w-full h-full absolute !m-[0] top-[0px] left-[0px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-bg-colour box-border w-full h-full border-[1px] border-solid border-border-lines" />
        </div>
        <div
          className="w-[710.1px] !m-[0] absolute top-[30px] left-[20px] flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full z-[1]"
          style={fAQExpandedStyle}
        >
          <img
            className="h-10 w-[38.4px] relative"
            alt=""
            src="/group-292.svg"
          />
          <div
            className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[417px] max-w-full mq825:min-w-full"
            style={fAQQuestionStyle}
          >
            <b className="self-stretch relative [-webkit-text-stroke:1px_#fff] mq450:text-lgi">
              {whoIsTheCEOOfBlazeswap}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
