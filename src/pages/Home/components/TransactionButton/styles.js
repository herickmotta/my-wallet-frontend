import styled from "styled-components";

import Colors from "../../../../config/colors";
import { MEDIA_MIN } from "../../../../config/constants";
import Typography from "../../../../config/typography";

export const Container = styled.button`
  width: 100%;
  height: 114px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 0.5rem;
  background-color: ${Colors.lightPurple};

  cursor: pointer;

  padding: 3.5%;
  margin-left: ${(props) => props.marginLeft};

  ${MEDIA_MIN} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 30%;
    height: 100px;

    padding: 1.5%;
  }
`;

export const Text = styled.p`
  width: 20%;

  font-size: 1.1rem;
  font-weight: bold;
  color: ${Colors.white};
  font-family: ${Typography.RalewatRaleway};
  line-height: 1.25rem;

  ${MEDIA_MIN} {
    margin-left: 2%;
    margin-top: 10%;
  }
`;

export const IconContainer = styled.div`
  width: 100%;

  align-self: flex-start;

  ${MEDIA_MIN} {
    margin-left: 2%;
  }
`;
