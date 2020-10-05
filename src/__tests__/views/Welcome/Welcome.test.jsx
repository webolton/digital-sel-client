import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from 'views/Welcome';

it('renders the Welcome page correctly', () => {
  const tree = renderer
    .create(<Welcome />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
