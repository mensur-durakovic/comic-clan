import React from "react";
import styled from "styled-components";
import GroupCategory from "./GroupCategory/GroupCategory";
import { GROUPING_CATEGORIES } from "../../constants/constants";

const GroupCategoriesWrapper = styled.div`
  padding-left: 30px;
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
`;

const GroupCategories = React.memo(() => {
  return (
    <GroupCategoriesWrapper>
      {GROUPING_CATEGORIES.map(c => (
        <GroupCategory
          key={c}
          categoryName={c}
        />
      ))}
    </GroupCategoriesWrapper>
  );
});

export default GroupCategories;
