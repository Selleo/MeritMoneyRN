import React from 'react';
import Index from '../index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Index />).toJSON();
  expect(rendered).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
