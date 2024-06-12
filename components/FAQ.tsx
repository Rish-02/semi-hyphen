import type { NextPage } from "next";
import GroupComponent from "./GroupComponent";

export type FAQType = {
  className?: string;
};

const FAQ: NextPage<FAQType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[460px] pr-5 pl-[21px] box-border max-w-full text-left text-23xl text-white font-sarabun lg:pb-[299px] lg:box-border mq825:pb-[194px] mq825:box-border ${className}`}
    >
      <div className="w-[975px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[60px] font-bold font-inherit inline-block min-w-[79px] mq825:text-15xl mq825:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
            <span>FA</span>
            <span className="text-primary-colour">Q</span>
          </h1>
        </div>
        <div className="w-[975px] overflow-x-auto flex flex-col items-start justify-start gap-[30px] max-w-full text-5xl">
          <GroupComponent whoIsTheCEOOfBlazeswap="Who is the CEO of Semi Hyphen?" />
          <GroupComponent
            whoIsTheCEOOfBlazeswap="What are the features and options on Semi Hyphen?"
            propWidth="879.4px"
            propMinWidth="527px"
          />
          <GroupComponent
            whoIsTheCEOOfBlazeswap="This year growth in Semi Hyphen?"
            propWidth="710.1px"
            propMinWidth="417px"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
