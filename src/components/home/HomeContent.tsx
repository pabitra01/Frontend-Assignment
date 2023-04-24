import React, { useState } from "react";
import JsonEditor from "./JsonEditor";
import RenderedForm from "./RenderedForm";

const HomeContent = () => {
  const [data, setData] = useState<Array<any> | any>(undefined);
  const sortedData = data && data.sort((a: any, b: any) => a.sort - b.sort);
  return (
    <div className="w-screen md:h-screen bg-[#881FFF] grid grid-cols-2 px-2 md:px-10 py-10 gap-5">
      <div className="md:col-span-1 md:h-auto h-[60vh] col-span-2 bg-white rounded-[15px] px-5 py-5  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <JsonEditor setData={setData} />
      </div>
      <div className="md:col-span-1 col-span-2 shadow-[#881FFF08_0px_9px_30px] overflow-hidden relative bg-white rounded-[15px] pt-5 px-5 ">
        <RenderedForm data={sortedData} />
      </div>
    </div>
  );
};

export default HomeContent;
