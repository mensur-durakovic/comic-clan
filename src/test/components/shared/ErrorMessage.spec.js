import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from '../../../components/shared/ErrorMessage/ErrorMessage';

test('ErrorMessage component', () => {
  const tree = renderer.create(<ErrorMessage text="test"/>).toJSON()
  expect(tree).toMatchSnapshot()
})