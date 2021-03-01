import { createGlobalStyle } from "styled-components";
import Colors from "../../config/colors";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
    }

    body {
      background-color: ${Colors.purple};
      width: 100%;
    }

    #root {
      justify-content: center;
      width: 100%;
      display: flex;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    strong {
        font-weight: bold;
    }

    button, input, textarea {
        outline: none;
        border: none;
        background: none;
        color: inherit;
        font: inherit;
        padding: 0px;
    }
`;

export default GlobalStyle;
