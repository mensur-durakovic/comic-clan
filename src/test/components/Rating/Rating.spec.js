import React from 'react';
import renderer from 'react-test-renderer';
import Rating from '../../../components/Rating/Rating';

test('Rating component', () => {
  const tree = renderer.create(<Rating rating={4} />).toJSON()
  expect(tree).toMatchSnapshot()
})