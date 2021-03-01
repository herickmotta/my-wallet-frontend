import React from "react";

import { Container, Text } from "./styles.js";
import Spinner from "../Spinner";

function Button({ disabled, label, onClick, loading }) {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {loading ? <Spinner /> : <Text>{label}</Text>}
    </Container>
  );
}

export default Button;
