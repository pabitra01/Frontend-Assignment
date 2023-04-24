import React, { useEffect, useState } from "react";
import TypeSelect from "./TypeSelect";
import TypeSwitch from "./TypeSwitch";
import { IMap } from "../../../interface/type";

const TypeRadio = ({ data, formik, groupData, jsonKey }: ITypeRadioProps) => {
  const [defaultTab, setDefaultTab] = useState(data.validate?.defaultValue);
  const tabData = groupData.subParameters.find((ele: any) => {
    return (
      ele.uiType === "Ignore" &&
      ele.conditions &&
      ele.conditions[0].value === defaultTab
    );
  });
  const renderTabData = (tab: any) => {
    switch (tab.uiType) {
      case "Select":
        return (
          <TypeSelect
            data={tab}
            formik={formik}
            key={tab.jsonKey}
            jsonKey={`${jsonKey}`}
          />
        );
      case "Switch":
        return (
          <TypeSwitch
            formik={formik}
            jsonKey={`${jsonKey}.${tab.jsonKey}`}
            data={tab}
          />
        );
      default:
        break;
    }
  };
  useEffect(() => {
    const tabType: IMap = {};
    const key: string = data.jsonKey;
    tabType[`${key}`] = defaultTab;
    if (jsonKey) {
      formik.setFieldValue(`${jsonKey}`, { type: defaultTab });
    }
  }, [defaultTab]);

  return (
    <>
      <div className="w-full grid grid-cols-2  py-5 gap-5">
        {data.validate?.options.map((option: any) => {
          return (
            <div
              key={option?.label}
              onClick={() => setDefaultTab(option?.value)}
              className={`body-1 bg-[#881FFF1C] cursor-pointer rounded-[7px] py-2 px-5 text-center ${
                defaultTab === option.value ? " border border-[#881FFF] " : " "
              }`}
            >
              {option?.label}
            </div>
          );
        })}
      </div>
      {tabData.subParameters.map((ele: any) => {
        return renderTabData(ele);
      })}
    </>
  );
};
type ITypeRadioProps = {
  data: any;
  formik: any;
  groupData: any;
  jsonKey?: string;
};
export default TypeRadio;
