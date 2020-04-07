import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import ComicBooksRow from "./ComicBooksRow";
import Spinner from "../shared/Spinner/Spinner";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";
import {
  YEAR,
  LOADING_TEXT,
  ERROR_FETCH_BOOKS_TEXT,
  NO_RESULTS_TEXT,
} from "../../constants/constants";
import * as actions from "../../store/actions/index";

const ComicBooksRowWrapper = styled.div`
  padding-left: 30px;
  padding: 0 30px;
`;

const Title = styled.div`
  font-size: 32px;
  line-height: 37px;
  color: #aaaaaa;
  padding-top: 10px;
  
  padding-bottom: 20px;
  margin-top: 30px;


`;

const ComicBooks = React.memo((props) => {
  const groupedBooks = useSelector((state) => state.groupedBooks);
  const books = useSelector((state) => state.books);
  const errorFetchBooks = useSelector((state) => state.errorFetchBooks);
  const isLoading = useSelector((state) => state.isLoading);
  const activeCategory = useSelector((state) => state.activeCategory);
  const { randomBooksTitle } = props;
  const dispatch = useDispatch();

  const sortedGroupTitles = () => {
    return activeCategory === YEAR
      ? Object.keys(groupedBooks).sort().reverse()
      : Object.keys(groupedBooks).sort();
  };

  const getFiveRandomBooks = () => {
    if(isLoading || !books.length) return [];

    const n = 5;
    const generated = [];
    const randomBooks = [];
    while(generated.length < n){
      const randomNumber = Math.floor(Math.random() * (books.length-1));
      if(!generated.includes(randomNumber)){
        generated.push(randomNumber);
        const randomBook = books[randomNumber];
        randomBooks.push(randomBook);
      }
    }
    return randomBooks;
  }

  useEffect(() => {
    dispatch(actions.initCommicBooks());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner loadingText={LOADING_TEXT} />}
      {!isLoading && errorFetchBooks && <ErrorMessage text={ERROR_FETCH_BOOKS_TEXT} />}
      {!isLoading && !errorFetchBooks && !books.length && <ErrorMessage text={NO_RESULTS_TEXT} />}
      {randomBooksTitle ? (
        <ComicBooksRowWrapper>
          <Title>{randomBooksTitle}</Title>
          <ComicBooksRow groupedBooks={getFiveRandomBooks()} />
        </ComicBooksRowWrapper>
      ) : (
        sortedGroupTitles().map((title) => {
          return (
            <ComicBooksRowWrapper key={title}>
              <Title>{title}</Title>
              <ComicBooksRow groupedBooks={groupedBooks[title]} />
            </ComicBooksRowWrapper>
          );
        })
      )}
      )}
    </>
  );
});

ComicBooks.propTypes = {
  randomBooksTitle: PropTypes.string
};

export default ComicBooks;
