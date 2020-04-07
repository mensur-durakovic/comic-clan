import React from "react";
import styled from "styled-components";

const ErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const ErrorMessageText = styled.span`
  color: #f15454;
  font-size: 40px;
  text-align: center;
`;

const ErrorMessage = React.memo((props) => {
  const { text } = props;
  return (
    <ErrorMessageWrapper>
      <ErrorMessageText>{text}</ErrorMessageText>
    </ErrorMessageWrapper>
  );
});

export default ErrorMessage;
