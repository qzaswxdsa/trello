import { Modal, ModalContent, ModalInput } from "./styledModal";
import React from "react";

const ModalComponent = ({ active, setActive, onChange }) => {
  const handleNameChange = (event) => {
    event.preventDefault();
    setActive(false);
  };

  return (
    <Modal onClick={() => setActive(false)}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <form onSubmit={handleNameChange}>
          <ModalInput
            placeholder="Enter name"
            onChange={(event) => onChange(event.target.value)}
          ></ModalInput>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
