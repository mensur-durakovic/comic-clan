import React from "react";
import renderer from "react-test-renderer";
import Back from "../../../components/Back/Back";

test("Back component", () => {
  const tree = renderer
    .create(<Back text="test" clickHandler={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
