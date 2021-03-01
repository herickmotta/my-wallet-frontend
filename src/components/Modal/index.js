import Modal from "react-modal";
import React from "react";
import { useHistory } from "react-router-dom";

import { StyledModal, ButtonsContainer, Title } from "./styles";
import Button from "../Button";
import Colors from "../../config/colors";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "20px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: Colors.purple,
  },
  overlay: {
    zIndex: "2",
  },
};

const ModalSuccess = ({ modalIsOpen }) => {
  const history = useHistory();

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <StyledModal>
        <Title>
          {" "}
          Success! <br /> Transaction completed.{" "}
        </Title>
        <ButtonsContainer>
          <Button
            width="40%"
            label="Finish"
            onClick={() => history.push("/home")}
          />
        </ButtonsContainer>
      </StyledModal>
    </Modal>
  );
};

export default ModalSuccess;
