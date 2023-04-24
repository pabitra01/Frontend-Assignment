import React from "react";
import ReactModal from "react-modal";

const Modal = (props: IModalProps) => {
  const { isModal, onToggleModal, data } = props;
  return (
    <ReactModal
      isOpen={isModal}
      onRequestClose={onToggleModal}
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      shouldCloseOnOverlayClick={true}
      className="payload-modal w-full md:w-[min(90%,400px)] z-10 "
    >
      <div className="p-5 relative">
        <div className="pb-5 body-1 text-[#881FFF]">Payload to backend </div>
        <div
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={onToggleModal}
        >
          ✖️
        </div>
        <div className="bg-[#881FFF1C] p-5 rounded-[7px]">
          <pre
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data, null, 2),
            }}
          />
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
type IModalProps = {
  isModal: boolean;
  onToggleModal: any;
  data?: any;
};
