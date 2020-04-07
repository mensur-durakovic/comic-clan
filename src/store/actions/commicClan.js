import * as actionTypes from './actionTypes';

export const changeCategory = (newCategory) => {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        newCategory: newCategory
    };
}

export const initCommicBooks = () => {
    return {
        type: actionTypes.INIT_COMMIC_BOOKS
    };
};

export const selectBook = (bookId) => {
    return {
        type: actionTypes.SELECT_BOOK,
        bookId: bookId,
    };
};

export const setLoading = () => {
    return {
        type: actionTypes.SET_LOADING
    };
};

export const setLoadingBook = () => {
    return {
        type: actionTypes.SET_LOADING_BOOK
    };
};
export const search = (searchTerm) => {
    return {
        type: actionTypes.SEARCH,
        searchTerm: searchTerm
    };
};

export const getCommicBooksFailed = () => {
    return {
        type: actionTypes.GET_COMMIC_BOOKS_FAILED
    };
};

export const setCommicBooks = ( commicBooks ) => {
    return {
        type: actionTypes.SET_COMMIC_BOOKS,
        commicBooks: commicBooks
    };
};

export const setSearchTerm = (searchTerm) => {
    return {
        type: actionTypes.SEARCH,
        searchTerm: searchTerm
    };
}

export const setSearchResults = (searchResults) => {
    return {
        type: actionTypes.SET_SEARCH_RESULTS,
        searchResults: searchResults
    };
}