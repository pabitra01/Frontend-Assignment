import React from "react";

const TypeCheckbox = ({ isChecked, handleChange }: ITypeCheckBox) => {
  return (
    <div className="flex gap-5 relative  items-center py-3">
      <div className=" body-1 w-44">
        {isChecked ? "Hide advanced fields" : "Show advanced fields"}
      </div>
      <div className="relative">
        <input
          key={Math.random()}
          type="checkbox"
          checked={isChecked}
          className="sr-only peer cursor-pointer"
          onChange={() => handleChange(!isChecked)}
        />
        <div
          className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[140%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#881FFF] cursor-pointer"
          onClick={() => handleChange(!isChecked)}
        ></div>
      </div>
    </div>
  );
};
type ITypeCheckBox = {
  isChecked: boolean;
  handleChange: (a: boolean) => void;
};
export default TypeCheckbox;
