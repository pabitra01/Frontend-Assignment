import React from "react";

const JsonEditor = ({ setData }: IJsonEditorProps) => {
  const handleChange = (e: any) => {
    setData(JSON.parse(e.target.value));
  };
  return (
    <textarea
      onChange={handleChange}
      placeholder="Enter Your Json Data here"
      className="w-full h-full body-1 focus:ring-0 outline-none rounded-[10px] py-5 border px-5  resize-none bg-[#881FFF08]"
    />
  );
};
type IJsonEditorProps = {
  setData: (data: any) => void;
};
export default JsonEditor;
