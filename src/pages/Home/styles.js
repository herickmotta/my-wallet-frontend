import styled from "styled-components";
import Colors from "../../config/colors";
import { MEDIA_MIN } from "../../config/constants";

export const TransactionBox = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${Colors.white};

  margin-top: 10%;
  overflow-y: scroll;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  ${MEDIA_MIN} {
    margin-top: 2%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 10%;

  ${MEDIA_MIN} {
    margin-top: 2%;
  }
`;
