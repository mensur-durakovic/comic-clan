import { SET_COMMIC_BOOKS, SET_SEARCH_RESULTS, GET_COMMIC_BOOKS_FAILED } from "../../store/actions/actionTypes";

export function initBooksSuccess(commicBooks) {
  return {
    type: SET_COMMIC_BOOKS,
    commicBooks: commicBooks,
  };
}

export function initBooksFail() {
  return {
    type: GET_COMMIC_BOOKS_FAILED,
  };
}

export function searchBooksSuccess(commicBooks) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults: commicBooks,
  };
}
