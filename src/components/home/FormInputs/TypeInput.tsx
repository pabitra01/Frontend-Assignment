import React from "react";
import Info from "../../common/Info";
import { motion } from "framer-motion";

const TypeInput = ({
  data,
  formik,
  style = " py-5 px-5 bg-[#881FFF08] border border-[#EFE0FF] ",
  jsonKey,
}: ITypeInputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-full flex justify-between items-center rounded-[7px] ${style} `}
    >
      <div className="body-1 flex items-center">
        <div className="body-1">{data.label}</div>
        {data?.validate?.required && <div className="text-red-500">*</div>}
        {data?.description?.length > 0 && (
          <Info label={data.label} description={data.description} />
        )}
      </div>
      <input
        name={data.jsonKey}
        type="text"
        onChange={
          jsonKey
            ? formik.handleChange(`${jsonKey}.${data.jsonKey}`)
            : formik.handleChange
        }
        value={
          jsonKey
            ? formik.values[`${jsonKey}.${data.jsonKey}`]
            : formik.values[`${jsonKey}`]
        }
        required={data?.validate?.required}
        autoComplete="off"
        className="bg-[#881FFF1C] rounded-[7px] py-2 pl-5 w-[50%] body-2 focus:ring-0 outline-none placeholder-[#881FFF]"
        placeholder={
          data.placeholder.length > 0 ? data.placeholder : "Type here"
        }
      />
    </motion.div>
  );
};
type ITypeInputProps = {
  data: any;
  formik: any;
  jsonKey?: string;
  style?: string;
};
export default TypeInput;
