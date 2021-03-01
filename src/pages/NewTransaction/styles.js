import styled from "styled-components";
import Colors from "../../config/colors";
import Typography from "../../config/typography";

export const Text = styled.h1`
  font-family: ${Typography.RalewatRaleway};
  color: ${Colors.white};
  font-style: normal;
  font-weight: bold;
  font-size: 1.625rem;
  line-height: 1.9375rem;
`;
export const MaxSize = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled(Text)`
  margin-bottom: 2rem;

  margin-left: 1rem;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const DescriptionArea = styled.textarea`
  width: 100%;
  height: 27%;

  border-radius: 0.2rem;
  background-color: ${Colors.white};
  color: ${Colors.black};
  font-size: 1.25rem;
  font-family: ${Typography.RalewatRaleway};
  line-height: 1.5rem;

  margin: 0.3rem 0;
  padding: 1.2rem 1rem;
  resize: none;
`;
