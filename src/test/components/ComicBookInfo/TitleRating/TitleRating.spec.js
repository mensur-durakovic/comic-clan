import React from "react";
import renderer from "react-test-renderer";
import TitleRating from "../../../../components/ComicBookInfo/TitleRating/TitleRating";

test("TitleRating component", () => {
  const tree = renderer
    .create(<TitleRating name="test" year={2020} rating={5} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
