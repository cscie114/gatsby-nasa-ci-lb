import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../pagination';

test('renders the pagination component', () => {
  const { debug } = render(<Pagination currentPage={2} numPages={3} pathPrefix="/test" />);
  debug();
  expect(screen.queryAllByRole('link')).toHaveLength(5)
});

test('does not render the pagination component', () => {
  render(<Pagination currentPage={0} numPages={0} />);
  expect(screen.queryAllByRole('link')).toHaveLength(0)
});
