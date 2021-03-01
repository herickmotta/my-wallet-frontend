import styled from "styled-components";

import Colors from "../../config/colors";
import Typography from "../../config/typography";

export const ContentInput = styled.input`
  width: 100%;

  border-radius: 0.2rem;
  background-color: ${Colors.white};
  border: ${(props) =>
    props.error ? `4px solid ${Colors.darkGrey}` : `4px solid ${Colors.white}`};

  color: ${Colors.black};
  font-size: 1.25rem;
  font-family: ${Typography.RalewatRaleway};
  line-height: 1.5rem;

  margin: 0.3rem 0;
  padding: 1.2rem 1rem;
`;

export const Container = styled.div``;
