import Modal from "../Modal/Modal";
import "../../css/ValidateMessage.css";
import { useEffect, useState } from "react";

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  width: "70px",
  fontSize: '16px',
  marginTop: "1rem",
  padding: ".5 1rem",
  color: 'white',
  fontFamily: "Poppins",
  background: 'none',
  border: '1px solid white'
}

const ValidateMessage = ({ closeModal, resultText }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Nowy stan

  const handleOnCloseModal = () => {
    closeModal();
  };

  useEffect(() => {
    let animationFrameId;

    const width = 100;

    const handleAnimation = () => {
      if (containerWidth < width) {
        setContainerWidth(containerWidth + 10);
      }
    };

    if (isModalOpen) {
      animationFrameId = requestAnimationFrame(handleAnimation);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [containerWidth, isModalOpen]);

  // Nowy efekt do ustawiania stanu isModalOpen
  useEffect(() => {
    setIsModalOpen(true);
    return () => setIsModalOpen(false);
  }, []);

  return (
    <Modal isModalOpen={isModalOpen}>
      <div style={{ width: containerWidth + "px" }} className="validateMessage">
        <p>{resultText}</p>
        <button style={buttonStyle} onClick={handleOnCloseModal}>
          OK
        </button>
      </div>
    </Modal>
  );
};

export default ValidateMessage;
