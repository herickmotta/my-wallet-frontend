import styled from "styled-components";

import Colors from "../../config/colors";
import Typography from "../../config/typography";

export const Container = styled.button`
  width: 100%;
  height: 46px;

  border-radius: 0.2rem;
  background-color: ${Colors.lightPurple};

  cursor: pointer;

  margin: 0.3rem 0;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${Colors.white};
  font-family: ${Typography.RalewatRaleway};
  line-height: 1.5rem;
`;
