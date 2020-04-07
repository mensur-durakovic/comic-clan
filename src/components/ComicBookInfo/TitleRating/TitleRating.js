import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StarRating from "../../Rating/Rating";

const TitleAndRatingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
`;

const BookTitle = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: #aaaaaa;
`;

const TitleRating = React.memo((props) => {
  const { name, year, rating } = props;
  return (
    <TitleAndRatingWrapper>
      <BookTitle>
        {name}{` (${year})`}
      </BookTitle>
      <StarRating rating={rating} />
    </TitleAndRatingWrapper>
  );
});

TitleRating.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

export default TitleRating;
