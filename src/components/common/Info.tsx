import React from "react";
import { InfoIcon } from "./Icons";

const Info = ({ label, description }: IInfoProps) => {
  return (
    <div className="group cursor-pointer ml-1 relative">
      <InfoIcon />
      <div className="hidden group-hover:block border border-[#EFE0FF] absolute left-10 top-[50%] w-80 rounded-[7px] shadow-lg translate-y-[-50%] bg-white px-5 py-2 ">
        <div className="body-1 py-0.5">{label}</div>
        <hr />
        <div className="body-1 text-[#881FFF] py-0.5">{description}</div>
      </div>
    </div>
  );
};
type IInfoProps = {
  label: string;
  description: string;
};
export default Info;
