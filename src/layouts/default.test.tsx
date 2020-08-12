import React from 'react';
import { render } from '@testing-library/react';
import Layout from './default';

test('renders layout', () => {
  const { getByText } = render(<Layout />);
  debugger
});
