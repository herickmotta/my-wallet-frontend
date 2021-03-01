import styled from "styled-components";

import Colors from "../../config/colors";
import Typography from "../../config/typography";

export const Title = styled.h1`
  text-align: center;

  font-family: ${Typography.SairaStencil};
  font-size: 2rem;
  color: ${Colors.white};

  line-height: 3.2rem;
`;

export const Button = styled.button`
  width: 100%;

  border-radius: 0.2rem;
  background-color: ${Colors.lightPurple};

  color: ${Colors.white};
  font-size: 1.25rem;
  font-family: ${Typography.Raleway};
  line-height: 1.5rem;
  font-weight: bold;

  margin: 0.2rem 0;
  padding: 1.2rem 1rem;
`;

export const TextError = styled.p`
  text-align: center;

  color: ${Colors.white};
  border-bottom: 1px solid ${Colors.white};
  font-size: 1rem;
  font-weight: bold;
  font-family: ${Typography.RalewatRaleway};
  line-height: 1rem;

  margin: 1rem 0;
`;

export const Text = styled(TextError)`
  color: ${Colors.white};
  border-bottom: 0px;

  margin-top: 1rem;
  pointer-events: ${(props) => (props.disable ? "none" : "default")};
`;

export const Forms = styled.form`
  width: 100%;
`;
