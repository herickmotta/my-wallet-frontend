import styled from "styled-components";
import Colors from "../../config/colors";
import Typography from "../../config/typography";

export const StyledModal = styled.section`
  text-align: center;
  font-family: ${Typography.RalewatRaleway};
  padding: 1rem 4.5rem 1.5rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.125rem;
  line-height: 2.56rem;
  color: ${Colors.white};
  margin-bottom: 1.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
