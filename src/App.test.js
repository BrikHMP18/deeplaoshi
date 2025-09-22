import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GRE Vocabulary app', () => {
  render(<App />);
  const titleElement = screen.getByText(/GRE Vocabulary/i);
  expect(titleElement).toBeInTheDocument();
});
