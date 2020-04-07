import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StarEmptySvg from "../../static/EmptyStar.svg";
import StarFullSvg from "../../static/FullStar.svg";

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 37px;
  box-siting: border-box;
  margin-left: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 20px 0;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    margin: 20px 0;
  }
`;

const Star = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 3px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const FullStar = styled(Star)`
  background-image: url(${StarFullSvg});
`;

const EmptyStar = styled(Star)`
  background-image: url(${StarEmptySvg});
`;

const StarRating = React.memo((props) => {
  const emptyStarsCount = 5 - props.rating;
  const fullStars = Array.from(Array(props.rating).keys());
  const emptyStars = Array.from(Array(emptyStarsCount).keys());

  return (
    <StarRatingWrapper>
      {fullStars.length > 0 &&
        fullStars.map((s) => <FullStar key={`fullStar-${s}`} />)}
      {emptyStars.length > 0 &&
        emptyStars.map((s) => <EmptyStar key={`emptyStar-${s}`} />)}
    </StarRatingWrapper>
  );
});

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
