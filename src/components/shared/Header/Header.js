import React from "react";
import styled from "styled-components";
import LogoSvg from "../../../static/Logo.svg";
import { withRouter } from "react-router-dom";

const Header = styled.header`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 75px;
  background-color: #535353;
`;

const Logo = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  background-image: url(${LogoSvg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 200px;
  height: 55px;
  cursor: pointer;
`;

const AppHeader = React.memo((props) => {
  const onLogoClick = () => {
    props.history.push("/");
  };

  return (
    <Header>
      <Logo onClick={onLogoClick} />
    </Header>
  );
});

export default withRouter(AppHeader);
