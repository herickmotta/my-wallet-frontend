import styled from "styled-components";
import Colors from "../../../../config/colors";

import { MEDIA_MIN } from "../../../../config/constants";
import Typography from "../../../../config/typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: ${Colors.white};

  padding: 2% 5%;

  width: 100%;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  ${MEDIA_MIN} {
    padding: 1% 2%;
  }
`;

export const Text = styled.p`
  font-family: ${Typography.RalewatRaleway};
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2rem;

  color: ${Colors.darkGrey};
`;

export const Value = styled(Text)`
  font-weight: normal;

  color: ${Colors.green};
`;
