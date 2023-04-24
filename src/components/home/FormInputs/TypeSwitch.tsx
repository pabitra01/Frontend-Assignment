import React, { useEffect } from "react";
import Info from "../../common/Info";
import { motion } from "framer-motion";

const TypeSwitch = ({ formik, jsonKey, data }: ITypeSwitchProps) => {
  useEffect(() => {
    if (data.validate.required) {
      formik.setFieldValue(`${jsonKey}`, false);
    }
  }, [data]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center "
    >
      <input
        name={data.jsonKey}
        checked={formik.values[`${jsonKey}`]}
        id="checked-checkbox"
        type="checkbox"
        onChange={(e) =>
          jsonKey
            ? formik.setFieldValue(`${jsonKey}`, e.target.checked)
            : formik.handleChange
        }
        className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300 rounded  "
      />
      <label htmlFor="checked-checkbox" className="ml-2 body-1">
        <div className="body-1 flex items-center py-3">
          <div className="body-1">{data.label}</div>
          {data?.validate?.required && <div className="text-red-500">*</div>}
          {data?.description?.length > 0 && (
            <Info label={data.label} description={data.description} />
          )}
        </div>
      </label>
    </motion.div>
  );
};
type ITypeSwitchProps = {
  formik: any;
  jsonKey?: string;
  data: any;
};
export default TypeSwitch;
