import * as actionTypes from "../actions/actionTypes";
import groupBy from "lodash/groupBy";
import {
  YEAR,
  WRITER,
  ARTIST,
  OWNER,
  RANDOM,
  GROUPING_CATEGORIES,
} from "../../constants/constants";

const initialState = {
  books: [],
  groupedBooks: {},
  searchTerm: "",
  activeCategory: YEAR,
  selectedBook: "",
  isLoading: false,
  isLoadingBook: false,
  errorFetchBooks: false,
  errorBookNotFound: false,
};

const groupByCategory = (books, category) => {
  switch (category) {
    case YEAR:
      return groupBy(books, (b) => b.year);
    case WRITER:
      return groupBy(books, (b) => b.writer);
    case ARTIST:
      return groupBy(books, (b) => b.artist);
    case OWNER:
      return groupBy(books, (b) => b.owner);
    case RANDOM:
      const randomNumber = Math.floor(
        Math.random() * GROUPING_CATEGORIES.length
      );
      return groupByCategory(books, GROUPING_CATEGORIES[randomNumber]);
    default:
      return groupBy(books, (b) => b.year);
  }
};

const setCommicBooks = (state, action) => {
  const groupedCommicBooks = groupByCategory(action.commicBooks, YEAR);
  return {
    ...state,
    books: action.commicBooks,
    groupedBooks: groupedCommicBooks,
    errorFetchBooks: false,
    errorBookNotFound: false,
    isLoading: false,
    isLoadingBook: false,
  };
};

const setSearchResults = (state, action) => {
  if (!action.searchResults.length) {
    return {
      ...state,
      books: [],
      groupedBooks: {},
      errorFetchBooks: false,
      errorBookNotFound: false,
      isLoading: false,
      isLoadingBook: false,
    };
  } else {
    const groupedCommicBooks = groupByCategory(
      action.searchResults,
      state.activeCategory
    );
    return {
      ...state,
      books: action.searchResults,
      groupedBooks: groupedCommicBooks,
      errorFetchBooks: false,
      errorBookNotFound: false,
      isLoading: false,
      isLoadingBook: false,
    };
  }
};

const getCommicBooksFailed = (state, action) => {
  return {
    ...state,
    errorFetchBooks: true,
    isLoading: false,
    isLoadingBook: false,
  };
};

const setLoading = (state, action) => {
  return { ...state, isLoading: true };
};

const setLoadingBook = (state, action) => {
  return { ...state, isLoadingBook: true };
};

const changeCategory = (state, action) => {
  const groupedCommicBooks = groupByCategory(state.books, action.newCategory);
  return {
    ...state,
    activeCategory: action.newCategory,
    groupedBooks: groupedCommicBooks,
  };
};

const setSearchTerm = (state, action) => {
  return { ...state, searchTerm: action.searchTerm };
};

const selectBook = (state, action) => {
  const book = state.books.find((b) => b.name.split(" #")[1] === action.bookId);

  return book
    ? {
        ...state,
        selectedBook: book,
        isLoadingBook: false,
        errorBookNotFound: false,
      }
    : {
        ...state,
        selectedBook: null,
        isLoadingBook: false,
        errorBookNotFound: true,
      };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMMIC_BOOKS:
      return setCommicBooks(state, action);
    case actionTypes.SELECT_BOOK:
      return selectBook(state, action);
    case actionTypes.SET_LOADING:
      return setLoading(state, action);
    case actionTypes.SET_LOADING_BOOK:
      return setLoadingBook(state, action);
    case actionTypes.GET_COMMIC_BOOKS_FAILED:
      return getCommicBooksFailed(state, action);
    case actionTypes.CHANGE_CATEGORY:
      return changeCategory(state, action);
    case actionTypes.SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case actionTypes.SET_SEARCH_RESULTS:
      return setSearchResults(state, action);
    default:
      return state;
  }
};

export default reducer;
