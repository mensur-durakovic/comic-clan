import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {changeCategory} from '../../../../store/actions/commicClan';
import { ARTIST, YEAR } from "../../../../constants/constants";
import { commicBooks, groupedBooks } from "../../../testUtilities/constants";
import GroupCategory from "../../../../components/GroupCategories/GroupCategory/GroupCategory";

const mockStore = configureStore([]);

describe("GroupCategory component", () => {
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
        <GroupCategory categoryName={ARTIST} />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  
/*   it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
        changeCategory({ newCategory: ARTIST })
    );
  }); */
});
