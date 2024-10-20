import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Football Jersey Store title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Football Jersey Store/i);
  expect(linkElement).toBeInTheDocument();
});
