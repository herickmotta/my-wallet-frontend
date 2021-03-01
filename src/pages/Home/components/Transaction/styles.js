import styled from "styled-components";

import Colors from "../../../../config/colors";
import { MEDIA_MIN } from "../../../../config/constants";
import Typography from "../../../../config/typography";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;

  padding: 2% 5%;

  ${MEDIA_MIN} {
    padding: 1% 2%;
  }
`;

export const Date = styled.p`
  font-family: ${Typography.RalewatRaleway};
  font-size: 1rem;
  line-height: 1.2rem;

  color: ${Colors.grey};

  margin-right: 3%;

  ${MEDIA_MIN} {
    margin-right: 1%;
  }
`;

export const Description = styled(Date)`
  color: ${Colors.black};
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  margin-right: auto;
`;

export const Value = styled(Date)`
  color: ${(props) => (props.type ? Colors.green : Colors.red)};
  margin-right: 0;
`;
