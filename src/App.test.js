import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // dado que o componente foi renderizado
  render(<App />);
  // quando consulto o titulo
  const textElement = screen.getByText(/Controlador de Temperatura/i);
  // então retorna true
  expect(textElement).toBeInTheDocument();
});
