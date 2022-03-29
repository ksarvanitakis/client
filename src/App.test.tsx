import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find the mistake/i);
  expect(linkElement).toBeInTheDocument();
});

test('should fail', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ola from Brazil/i);
  expect(linkElement).toBeInTheDocument();
});