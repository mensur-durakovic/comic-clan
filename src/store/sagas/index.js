import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initCommicBooksSaga, searchCommicBooksSaga } from "./comicClan";

export function* watchCommicClan() {
  yield all([
    takeEvery(actionTypes.INIT_COMMIC_BOOKS, initCommicBooksSaga),
    takeEvery(actionTypes.SEARCH, searchCommicBooksSaga),
  ]);
}
