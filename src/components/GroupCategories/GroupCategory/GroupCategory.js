import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";

const GroupCategoryWrapper = styled.div`
  background-color: ${props => (props.isActive ? "#f15454" : "transparent")};
  box-shadow: ${props =>
    props.isActive ? "0px 2px 3px rgba(34, 34, 34, 0.6)" : "none"};
  color: ${props => (props.isActive ? "#FFFFFF" : "#777777")};
  border-radius: 20px;
  width: 75px;
  height: 35px;
  font-weight: bold;
  font-size: 16px;
  line-height: 35px;
  margin-right: 20px;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;

`;

const GroupCategory = React.memo(props => {
  const activeCategory = useSelector(state => state.activeCategory);
  const dispatch = useDispatch();
  const { categoryName } = props;
  return (
    <GroupCategoryWrapper
      isActive={categoryName === activeCategory}
      onClick={() => dispatch(actions.changeCategory(categoryName))}
    >
      {categoryName}
    </GroupCategoryWrapper>
  );
});

GroupCategory.propTypes = {
  categoryName: PropTypes.string.isRequired
};

export default GroupCategory;
