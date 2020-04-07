import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  max-width: fit-content;
`;

const DescriptionTitle = styled.span`
  text-transform: capitalize;
  font-weight: 500;
  color: #999999;
`;

const DescriptionValue = styled.span`
  font-weight: bold;
  color: #cccccc;
`;

const Description = React.memo((props) => {
  const { descriptionTitle, descriptionValue } = props;
  return (
    <DescriptionWrapper>
      <DescriptionTitle>
        {descriptionTitle}
        {": "}
      </DescriptionTitle>
      <DescriptionValue> {descriptionValue} </DescriptionValue>
    </DescriptionWrapper>
  );
});

Description.propTypes = {
  descriptionTitle: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
};

export default Description;
