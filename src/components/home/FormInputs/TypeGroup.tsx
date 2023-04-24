import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypeSelect from "./TypeSelect";
import TypeCheckbox from "./TypeCheckbox";
import TypeInput from "./TypeInput";
import TypeRadio from "./TypeRadio";
import { INPUTS } from "../../../constants/inputs";
import Info from "../../common/Info";
import TypeSwitch from "./TypeSwitch";

const TypeGroup = ({ data, formik, isParentOptional }: ITypeGroupProps) => {
  const [isShowOptional, setIsShowOptional] = useState(isParentOptional);
  const requiredInputs = data.subParameters.filter(
    (ele: any) => ele.validate.required === true,
  );
  const sortedSubparameters =
    data && data.subParameters.sort((a: any, b: any) => a.sort - b.sort);
  const renderInput = (inputData: any) => {
    switch (inputData.uiType) {
      case INPUTS.Input:
        return (
          <TypeInput
            data={inputData}
            formik={formik}
            jsonKey={data.jsonKey}
            style=" py-2"
          />
        );
      case INPUTS.Select:
        return (
          <TypeSelect data={inputData} formik={formik} jsonKey={data.jsonKey} />
        );
      case INPUTS.Radio:
        return (
          <TypeRadio
            data={inputData}
            formik={formik}
            groupData={data}
            jsonKey={data.jsonKey}
          />
        );
      case INPUTS.Switch:
        return (
          <TypeSwitch
            formik={formik}
            data={inputData}
            jsonKey={`${data.jsonKey}.${inputData.jsonKey}`}
            key={data.label}
          />
        );
      default:
        break;
    }
  };
  const renderInputs = (inputData: any) => {
    if (isShowOptional) {
      return renderInput(inputData);
    }
    if (inputData.validate.required) {
      return renderInput(inputData);
    }
  };
  useEffect(() => {
    setIsShowOptional(isParentOptional);
  }, [isParentOptional]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-5 bg-[#881FFF08] border border-[#EFE0FF] rounded-[7px]"
    >
      <div className="body-1 flex items-center py-3">
        <div className="body-1">{data.label}</div>
        {data?.validate?.required && <div className="text-red-500">*</div>}
        {data?.description?.length > 0 && (
          <Info label={data.label} description={data.description} />
        )}
      </div>
      <hr />
      {sortedSubparameters.map((input: any) => {
        return (
          <React.Fragment key={input.label}>
            {renderInputs(input)}
          </React.Fragment>
        );
      })}
      {requiredInputs.length < data.subParameters?.length && (
        <TypeCheckbox
          isChecked={isShowOptional}
          handleChange={setIsShowOptional}
        />
      )}
    </motion.div>
  );
};
type ITypeGroupProps = {
  data: any;
  formik: any;
  isParentOptional: boolean;
};
export default TypeGroup;
