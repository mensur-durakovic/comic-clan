import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import BackIconSvg from "../../static/BackIcon.svg";

const BackWrapper = styled.div`
  height: 70px;
  box-sizing: border-box;
  position: relative;
  padding-top: 34px;
  padding-left: 38px;
`;

const BackArrow = styled.span`
  width: 10px;
  height: 10px;
  background-image: url(${BackIconSvg});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 40px;
  left: 30px;
  cursor: pointer;
`;

const BackDescription = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #777777;
  cursor: pointer;
  margin-left: 5px;
`;

const Back = React.memo(props => {
  const { clickHandler, text } = props;
  return (
    <BackWrapper>
      <BackArrow />
      <BackDescription onClick={clickHandler}> {text} </BackDescription>
    </BackWrapper>
  );
});

Back.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Back;
