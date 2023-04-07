import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from './HomePage';

it('renders homepage correctly on the DOM', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
