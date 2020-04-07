import { put, call } from "redux-saga/effects";

import * as api from "../../api/api";
import * as actions from "../actions";

export function* initCommicBooksSaga(action) {
  try {
    yield put(actions.setLoading());
    const response = yield call(api.initBooks);
    yield put(actions.setCommicBooks(response.data));
  } catch (error) {
    yield put(actions.getCommicBooksFailed());
  }
}

export function* searchCommicBooksSaga(action) {
  try {
    yield put(actions.setLoading());
    const response = yield call(api.searchBooks, action.searchTerm);
    yield put(actions.setSearchResults(response.data));
  } catch (error) {
    yield put(actions.getCommicBooksFailed());
  }
}
