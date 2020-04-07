import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Description from "../../shared/Description/Description";
import { withRouter } from "react-router-dom";
import { OWNED_BY } from "../../../constants/constants";
import * as actions from "../../../store/actions/index";
import { useDispatch } from "react-redux";

const ComicBookWrapper = styled.div`
  background-color: transparent;
  padding-right: 60px;
  margin-top: 30px;
  
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0;
    margin-top: 30px;
  }
`;

const CommicBookImage = styled.div`
  width: 200px;
  max-width: 200px;
  height: 305px;
  max-height: 305px;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  cursor: pointer;
`;

const CommicBookTitle = styled.div`
  margin: 15px 0;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-transform: capitalize;
  color: #cccccc;
  cursor: pointer;
  max-width: 200px;
`;

const ComicBook = React.memo((props) => {
  const { imageUrl, bookName, owner, history } = props;

  const dispatch = useDispatch();

  const displayFullBookInfo = () => {
    const bookId = bookName.split(' #')[1];
    dispatch(actions.selectBook(bookName))
    history.push(`/book/${bookId}`);
  }

  return (
    <ComicBookWrapper>
      <CommicBookImage imageUrl={imageUrl} onClick={displayFullBookInfo}/>
      <CommicBookTitle onClick={displayFullBookInfo}> {bookName} </CommicBookTitle>
      <Description
        descriptionTitle={OWNED_BY}
        descriptionValue={owner}
      />
    </ComicBookWrapper>
  );
});

ComicBook.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default withRouter(ComicBook);
