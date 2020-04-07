import * as api from "../../../api/api";
import {
  initBooksSuccess,
  searchBooksSuccess,
  initBooksFail,
} from "../../testUtilities/actionCreators";
import { recordSaga } from "../../../global/utilities";
import { commicBooks } from "../../testUtilities/constants";
import {
  initCommicBooksSaga,
  searchCommicBooksSaga,
} from "../../../store/sagas/comicClan";

describe.only("loadProfileSaga", () => {
  api.initBooks = jest.fn();
  api.searchBooks = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should get comic books from API successfully", async () => {
    const response = { data: commicBooks };
    api.initBooks.mockImplementation(() => response);

    const dispatched = await recordSaga(initCommicBooksSaga);
    expect(api.initBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toContainEqual(initBooksSuccess(commicBooks));
  });

  it("should set error when API call for fetching books fails", async () => {
    api.initBooks.mockImplementation(() => {
      throw new Error("An error occurred on getting comic books!");
    });

    const dispatched = await recordSaga(initCommicBooksSaga);
    expect(api.initBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toContainEqual(initBooksFail());
  });

  it("should get comic books from API by search term successfully", async () => {
    const response = { data: commicBooks };
    api.searchBooks.mockImplementation(() => response);

    const initialAction = { searchTerm: "lio" };
    const dispatched = await recordSaga(searchCommicBooksSaga, initialAction);
    expect(api.searchBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toContainEqual(searchBooksSuccess(commicBooks));
  });

  it("should set error when API call for searching books fails", async () => {
    api.searchBooks.mockImplementation(() => {
      throw new Error("An error occurred on searching comic books!");
    });

    const initialAction = { searchTerm: "lio" };
    const dispatched = await recordSaga(searchCommicBooksSaga, initialAction);
    expect(api.searchBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toContainEqual(initBooksFail());
  });
});
