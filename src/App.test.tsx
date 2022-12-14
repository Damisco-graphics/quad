import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const api = 'https://api.tvmaze.com/search/shows?q=all';

test('renders learn react link', () => {
  render(<App api={api}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
