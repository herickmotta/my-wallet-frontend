import React from "react";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

import { Container, Text } from "./styles";
import Colors from "../../../../config/colors";

function CashButton({ disabled, label, onClick, showPlusButton, marginLeft }) {
  return (
    <Container onClick={onClick} disabled={disabled} marginLeft={marginLeft}>
      {showPlusButton ? (
        <IoIosAddCircleOutline
          color={Colors.white}
          fontSize="1.5rem"
          cursor="pointer"
        />
      ) : (
        <IoIosRemoveCircleOutline
          color={Colors.white}
          fontSize="1.5rem"
          cursor="pointer"
        />
      )}
      <Text>{label}</Text>
    </Container>
  );
}

export default CashButton;
