import React from 'react';
import renderer from 'react-test-renderer';
import Description from '../../../components/shared/Description/Description';

test('Description component', () => {
  const tree = renderer.create(<Description descriptionTitle="test" descriptionValue="test"/>).toJSON()
  expect(tree).toMatchSnapshot()
})