import styled from "styled-components";

import Colors from "../../config/colors";

const ContentContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
  height: 100vh;

  background-color: ${Colors.purple};

  padding: 7%;
`;

export default ContentContainer;
