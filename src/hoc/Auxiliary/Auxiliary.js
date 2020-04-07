import PropTypes from "prop-types";

const Auxiliary = props => props.children;

Auxiliary.propTypes = {
  children: PropTypes.node.isRequired
};

export default Auxiliary;
