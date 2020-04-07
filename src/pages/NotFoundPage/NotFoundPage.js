import React from "react";

import styled from "styled-components";
import { ERROR_404_TEXT } from "../../constants/constants";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const NotFoundText = styled.span`
  color: #f15454;
  font-size: 40px;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundText>{ERROR_404_TEXT}</NotFoundText>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
