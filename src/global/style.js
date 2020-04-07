import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    body {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        margin: 0;
        background-color: #333333;
        overflow-x: hidden;
    }

    #root {
        width: 100%;
    }

    main {
        margin-top: 75px;
        width: 100%;
    }
`;
