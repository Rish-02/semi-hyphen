import type { NextPage } from "next";

export type DocType = {
  className?: string;
};

const Doc: NextPage<DocType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start pt-0 pb-0.5 pr-[5px] pl-0 text-left text-xl text-greytext font-sarabun ${className}`}
    >
      <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[35px]">
        Doc
      </a>
    </div>
  );
};

export default Doc;
