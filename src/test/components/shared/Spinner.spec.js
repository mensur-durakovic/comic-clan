import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../../../components/shared/Spinner/Spinner';

test('Spinner component', () => {
  const tree = renderer.create(<Spinner text="test"/>).toJSON()
  expect(tree).toMatchSnapshot()
})