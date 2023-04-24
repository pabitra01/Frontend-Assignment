import { useFormik } from "formik";
import React, { useState } from "react";
import { INPUTS } from "../../constants/inputs";
import TypeInput from "./FormInputs/TypeInput";
import TypeSelect from "./FormInputs/TypeSelect";
import TypeGroup from "./FormInputs/TypeGroup";
import EmptyContent from "../common/EmptyContent";
import TypeCheckbox from "./FormInputs/TypeCheckbox";
import Modal from "../common/Modal";

const RenderedForm = ({ data }: IRenderedFormProps) => {
  const [isShowOptional, setIsShowOptional] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [payload, setPayload] = useState<any>();
  const toggleModal = () => {
    setIsModal(!isModal);
  };
  const formik = useFormik({
    initialValues: {},
    enableReinitialize: true,
    onSubmit: (val) => {
      setPayload(val);
      setIsModal(true);
    },
  });
  const renderInput = (inputData: any, formik: any) => {
    switch (inputData.uiType) {
      case INPUTS.Input:
        return (
          <TypeInput data={inputData} formik={formik} key={inputData.jsonKey} />
        );
      case INPUTS.Select:
        return (
          <TypeSelect
            data={inputData}
            formik={formik}
            key={inputData.jsonKey}
            style="bg-[#881FFF08] border border-[#EFE0FF] rounded-[7px] px-5 py-3"
          />
        );
      case INPUTS.Group:
        return (
          <TypeGroup
            data={inputData}
            formik={formik}
            isParentOptional={isShowOptional}
            key={inputData.jsonKey}
          />
        );
      default:
        break;
    }
  };
  const renderInputs = (inputData: any, formik: any) => {
    if (isShowOptional) {
      return renderInput(inputData, formik);
    }
    if (inputData.validate.required) {
      return renderInput(inputData, formik);
    }
  };
  return (
    <>
      {data ? (
        <form onSubmit={formik.handleSubmit} className="h-full" id="form">
          <div className="flex flex-col gap-2 h-[90%] overflow-auto">
            {data?.map((inputs: any) => {
              return renderInputs(inputs, formik);
            })}
          </div>
          <div className="mt-auto h-[10%] flex justify-between items-center">
            <TypeCheckbox
              isChecked={isShowOptional}
              handleChange={setIsShowOptional}
            />
            <button
              type="submit"
              className="bg-[#881FFF]  body-1 right-5 px-7 py-1 rounded-[7px] text-white float-right "
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <EmptyContent />
      )}
      {isModal && (
        <Modal isModal={isModal} onToggleModal={toggleModal} data={payload} />
      )}
    </>
  );
};
type IRenderedFormProps = {
  data: any;
};
export default RenderedForm;
