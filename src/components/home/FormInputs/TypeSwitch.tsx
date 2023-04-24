import React, { useEffect } from "react";
import Info from "../../common/Info";

const TypeSwitch = ({ formik, jsonKey, data }: ITypeSwitchProps) => {
  useEffect(() => {
    formik.setFieldValue(`${jsonKey}`, false);
  }, []);
  return (
    <div className="flex items-center ">
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
    </div>
  );
};
type ITypeSwitchProps = {
  formik: any;
  jsonKey?: string;
  data: any;
};
export default TypeSwitch;
