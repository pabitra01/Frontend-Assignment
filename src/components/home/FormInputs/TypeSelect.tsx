import React, { useEffect } from "react";
import Info from "../../common/Info";
import { motion } from "framer-motion";

const TypeSelect = ({ data, formik, jsonKey, style }: ITypeSelectProps) => {
  useEffect(() => {
    if (data.validate.required) {
      formik.setFieldValue(
        `${jsonKey}.${data.jsonKey}`,
        data.validate.defaultValue,
      );
    }
  }, [data]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className={`w-full flex justify-between items-center rounded-[7px] py-2  ${style}`}
    >
      <div className="body-1 flex items-center">
        <div className="body-1">{data?.label}</div>
        {data?.validate?.required && <div className="text-red-500">*</div>}
        {data?.description?.length > 0 && (
          <Info label={data.label} description={data.description} />
        )}
      </div>
      <div className="w-[50%]">
        <select
          name={data.jsonKey}
          id=""
          onChange={
            jsonKey
              ? formik.handleChange(`${jsonKey}.${data.jsonKey}`)
              : formik.handleChange
          }
          required={data.validate.required}
          defaultValue={formik.values[`${jsonKey}.${data.jsonKey}`]}
          className="bg-[#881FFF1C] rounded-[7px] py-2 px-5 w-full body-2 focus:ring-0 outline-none placeholder-[#881FFF]"
        >
          {data.validate.options.map((option: any) => {
            return (
              <option
                value={option?.value}
                className="py-2"
                key={option?.label}
                selected={data.validate.defaultValue === option.value}
              >
                {option?.label}
              </option>
            );
          })}
        </select>
      </div>
    </motion.div>
  );
};
type ITypeSelectProps = {
  data: any;
  formik: any;
  jsonKey?: string;
  style?: string;
};
export default TypeSelect;
