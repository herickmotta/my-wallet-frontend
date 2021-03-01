import React from "react";
import { IoMdLogOut } from "react-icons/io";
import Colors from "../../config/colors";
import capitalizeFirstLetter from "../../utils/capitalize";

import Spinner from "../Spinner";
import { Text, Container } from "./styles";

export default function Header({ name, onClick, loading, showLogOut }) {
  return (
    <Container>
      <Text>{`Hello, ${capitalizeFirstLetter(name)}`}</Text>
      {showLogOut &&
        (loading ? (
          <Spinner />
        ) : (
          <IoMdLogOut
            color={Colors.white}
            fontSize="1.5rem"
            cursor="pointer"
            onClick={onClick}
          />
        ))}
    </Container>
  );
}
