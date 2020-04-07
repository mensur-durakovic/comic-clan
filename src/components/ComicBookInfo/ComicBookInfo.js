import React, { useEffect } from "react";
import styled from "styled-components";

import TitleRating from "./TitleRating/TitleRating";
import Description from "../shared/Description/Description";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";
import Spinner from "../shared/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import {
  WRITER,
  ARTIST,
  PUBLICATION,
  OWNER,
  ERROR_SELECT_BOOK_TEXT,
  LOADING_TEXT
} from "../../constants/constants";

const ComicBookInfoWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  margin-bottom: 15px;
`;

const ComicBookImage = styled.div`
  width: 340px;
  max-width: 340px;
  height: 520px;
  max-height: 520px;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
`;

const BorderBottomDiv = styled.div`
  border-bottom: 2px solid #535353;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
`;
const ComicBookDescriptionWrapper = styled.div`
  padding: 10px 20px;
  max-width: 70%;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 30px 0;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    padding: 30px 0;
  }
`;

const CommicBookSummary = styled.p`
  padding-top: 30px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #cccccc;
`;

const ComicBookInfo = () => {
  const book = useSelector(state => state.selectedBook);
  const books = useSelector(state => state.books);
  const isLoadingBook = useSelector(state => state.isLoadingBook);
  const isLoading = useSelector(state => state.isLoading);
  const errorBookNotFound = useSelector(state => state.errorBookNotFound);

  const { bookId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!books.length) {
      dispatch(actions.initCommicBooks());
    }
    dispatch(actions.setLoadingBook());
    dispatch(actions.selectBook(bookId));
  }, [bookId, books, book, isLoadingBook, dispatch]);

  return (
    <>
      {(isLoadingBook || isLoading) && <Spinner loadingText={LOADING_TEXT} />}
      {!isLoadingBook && !isLoading && errorBookNotFound && <ErrorMessage text={ERROR_SELECT_BOOK_TEXT} />}
      {book && (
        <ComicBookInfoWrapper>
          <BorderBottomDiv>
            <ComicBookImage imageUrl={book.image} />
            <ComicBookDescriptionWrapper>
              <TitleRating
                name={book.name}
                year={book.year}
                rating={book.rating}
              />
              <Description
                descriptionTitle={WRITER}
                descriptionValue={book.writer}
              />
              <Description
                descriptionTitle={ARTIST}
                descriptionValue={book.artist}
              />
              <Description
                descriptionTitle={PUBLICATION}
                descriptionValue={book.publication}
              />
              <Description
                descriptionTitle={OWNER}
                descriptionValue={book.owner}
              />
              <CommicBookSummary>{book.summary}</CommicBookSummary>
            </ComicBookDescriptionWrapper>
          </BorderBottomDiv>
        </ComicBookInfoWrapper>
      )}
    </>
  );
};

export default ComicBookInfo;
