import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import { Container, Date, Description, Value } from "./styles";
import mask from "../../../../utils/masks";

function Transaction({ date, description, type, value }) {
  const [formatDate, setFormatDate] = useState("");
  const [color, setColor] = useState(false);

  useEffect(() => {
    setFormatDate(dayjs(date).format("D/MM"));
    if (type === "input") {
      setColor(true);
    }
  }, []);

  return (
    <Container>
      <Date>{formatDate}</Date>
      <Description>{description}</Description>
      <Value type={color}>{mask(value)}</Value>
    </Container>
  );
}

export default Transaction;
