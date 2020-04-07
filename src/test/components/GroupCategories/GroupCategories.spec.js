import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { YEAR } from "../../../constants/constants";
import { commicBooks, groupedBooks } from "../../testUtilities/constants";
import GroupCategories from "../../../components/GroupCategories/GroupCategories";

const mockStore = configureStore([]);

describe("GroupCategories component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      books: commicBooks,
      groupedBooks: groupedBooks,
      activeCategory: YEAR
    });
    component = renderer.create(
      <Provider store={store}>
        <GroupCategories/>
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  
});
