import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Arrow from '../src/components/Arrow';

it('renders correctly', () => {
  const tree = renderer.create(
    <Arrow />,
  );
});
