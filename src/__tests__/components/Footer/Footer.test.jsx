import React from 'react';
import renderer from 'react-test-renderer';
import Footer from 'components/Footer';

it('renders the Footer correctly', () => {
  const tree = renderer
    .create(<Footer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
