import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
    onRequestClose={props.closeModal}
  >
    <h1>Selected Option</h1>
    { props.selectedOption && (<p>{props.selectedOption}</p>)}
    <button onClick={props.closeModal}>Okay</button>
  </Modal>
);

Modal.setAppElement(document.getElementById("app"));

export default OptionModal;
