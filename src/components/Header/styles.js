import styled from "styled-components";
import Colors from "../../config/colors";

import Typography from "../../config/typography";

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.h1`
  font-family: ${Typography.RalewatRaleway};
  color: ${Colors.white};
  font-style: normal;
  font-weight: bold;
  font-size: 1.625rem;
  line-height: 1.9375rem;
`;
