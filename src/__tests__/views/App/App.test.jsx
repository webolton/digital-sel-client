import React from 'react';
import renderer from 'react-test-renderer';
import App from 'views/App';

it('renders the Welcome page correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
