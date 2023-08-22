import { useEffect, useRef } from "react";

import '../../css/Modal.css'

const Modal = ({ children, isModalOpen }) => {
  const modalRef = useRef();
  

  useEffect(() => {
    const { current: modal } = modalRef;
    console.log(isModalOpen)

    if (isModalOpen) {
      modal.showModal();
    } else modal.close();
  }, [isModalOpen]);

  return <dialog ref={modalRef} className="modal">{children}</dialog>;
};

export default Modal;
