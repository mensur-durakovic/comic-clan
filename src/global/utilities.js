import { runSaga } from "redux-saga";
import { GROUPING_CATEGORIES } from '../constants/constants';

export async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    initialAction
  ).done;

  return dispatched;
}


export const isValidGroupCategory = (category) => {
  return GROUPING_CATEGORIES.find(gc => gc.toLowerCase() === category.toLowerCase())
}