import React, { useState } from "react";

const JsonEditor = ({ setData }: IJsonEditorProps) => {
  const [jsonData, setJsonData] = useState<Array<any> | any>(undefined);
  const handleChange = (e: any) => {
    setJsonData(JSON.parse(e.target.value));
  };
  return (
    <div className="h-[100%]">
      <textarea
        onChange={handleChange}
        placeholder="Enter Your Json Data here"
        className="w-full md:h-[90%] h-[80%] body-1 focus:ring-0 outline-none rounded-[10px] py-5 border px-5  resize-none bg-[#881FFF08]"
      />
      <div className="md:h-[10%] h-[20%] flex justify-end items-center">
        <button
          onClick={() => setData(jsonData)}
          className="bg-[#881FFF]  body-1  px-7 py-1 mb-2 rounded-[7px] text-white "
        >
          Convert
        </button>
      </div>
    </div>
  );
};
type IJsonEditorProps = {
  setData: (data: any) => void;
};
export default JsonEditor;
