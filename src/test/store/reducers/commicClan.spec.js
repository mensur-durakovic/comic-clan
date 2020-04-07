import commicClanReducer from "../../../store/reducers/commicClan";
import * as actionTypes from "../../../store/actions/actionTypes";
import { YEAR, WRITER } from "../../testUtilities/constants";
import {
  commicBooks,
  groupedBooks,
  selectedBook,
  selectedBookId,
} from "../../testUtilities/constants";

describe("Commic clan", () => {
  describe("Reducer", () => {
    it("should set a books", () => {
      const state = {
        books: [],
        groupedBooks: {},
        activeCategory: YEAR,
        isLoading: false,
        isLoadingBook: false,
        errorFetchBooks: false,
        errorBookNotFound: false,
      };
      const newState = commicClanReducer(state, {
        type: actionTypes.SET_COMMIC_BOOKS,
        commicBooks,
      });
      expect(newState).toEqual(
        expect.objectContaining({
          books: commicBooks,
          groupedBooks: groupedBooks,
          activeCategory: YEAR,
          errorFetchBooks: false,
          errorBookNotFound: false,
          isLoading: false,
          isLoadingBook: false,
        })
      );
    });

    it("should reset the error and loading indicatior if books list is set", () => {
      const state = {
        books: [],
        groupedBooks: {},
        activeCategory: YEAR,
        isLoading: true,
        errorFetchBooks: true,
      };
      const newState = commicClanReducer(state, {
        type: actionTypes.SET_COMMIC_BOOKS,
        commicBooks,
      });
      expect(newState).toEqual(
        expect.objectContaining({
          books: commicBooks,
          groupedBooks: groupedBooks,
          activeCategory: YEAR,
          errorFetchBooks: false,
          isLoading: false,
        })
      );
    });

    it("should set the error for fetching comic books", () => {
      const state = { books: [], errorFetchBooks: false };
      const newState = commicClanReducer(state, {
        type: actionTypes.GET_COMMIC_BOOKS_FAILED,
      });
      expect(newState.errorFetchBooks).toBeTruthy();
    });

    it("should set selected commic book", () => {
      const state = {
        books: commicBooks,
        selectedBook: null,
        isLoadingBook: true,
        errorBookNotFound: false,
      };
      const newState = commicClanReducer(state, {
        type: actionTypes.SELECT_BOOK,
        bookId: selectedBookId,
      });
      expect(newState).toEqual(
        expect.objectContaining({
          books: commicBooks,
          selectedBook: selectedBook,
          isLoadingBook: false,
          errorBookNotFound: false,
        })
      );
    });

    it("should set error if selected commic book does not exist", () => {
      const state = {
        books: commicBooks,
        selectedBook: null,
        isLoadingBook: true,
        errorBookNotFound: false,
      };
      const newState = commicClanReducer(state, {
        type: actionTypes.SELECT_BOOK,
        bookId: "test1234",
      });
      expect(newState).toEqual(
        expect.objectContaining({
          books: commicBooks,
          selectedBook: null,
          isLoadingBook: false,
          errorBookNotFound: true,
        })
      );
    });

    it("should set loading indicator for fetching books", () => {
      const state = { isLoading: false };
      const newState = commicClanReducer(state, {
        type: actionTypes.SET_LOADING,
      });
      expect(newState.isLoading).toBeTruthy();
    });

    it("should set loading indicator for selecting book", () => {
      const state = { isLoadingBook: false };
      const newState = commicClanReducer(state, {
        type: actionTypes.SET_LOADING_BOOK,
      });
      expect(newState.isLoadingBook).toBeTruthy();
    });

    it("should set grouping category", () => {
      const state = { activeCategory: YEAR };
      const newState = commicClanReducer(state, {
        type: actionTypes.CHANGE_CATEGORY,
        newCategory: WRITER,
      });
      expect(newState.activeCategory).toEqual(WRITER);
    });

    it("should set search term", () => {
      const newSearchTerm = "lio";
      const state = { searchTerm: "" };
      const newState = commicClanReducer(state, {
        type: actionTypes.SET_SEARCH_TERM,
        searchTerm: newSearchTerm,
      });
      expect(newState.searchTerm).toEqual(newSearchTerm);
    });

    it("should set search results", () => {
      const state = {
        books: [],
        groupedBooks: {},
        activeCategory: YEAR,
        isLoading: true,
      };
      const newState = commicClanReducer(state, {
        type: actionTypes.SET_SEARCH_RESULTS,
        searchResults: commicBooks,
      });
      expect(newState).toEqual(
        expect.objectContaining({
          books: commicBooks,
          activeCategory: YEAR,
          groupedBooks,
          isLoading: false,
        })
      );
    });
  });
});
