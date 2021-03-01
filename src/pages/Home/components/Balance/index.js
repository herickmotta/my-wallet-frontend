import React from "react";
import mask from "../../../../utils/masks";

import { Container, Text, Value } from "./styles";

function Balance({ balance }) {
  return (
    <Container>
      <Text>Balance:</Text>
      <Value>{`$ ${mask(balance)}`}</Value>
    </Container>
  );
}

export default Balance;
