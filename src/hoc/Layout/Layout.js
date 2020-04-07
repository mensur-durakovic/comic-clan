import React from "react";
import PropTypes from "prop-types";
import Auxiliary from "../Auxiliary/Auxiliary";
import GlobalStyle from "../../global/style";

const Layout = props => {
  return (
    <Auxiliary>
      <GlobalStyle />
      <main>{props.children}</main>
    </Auxiliary>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
