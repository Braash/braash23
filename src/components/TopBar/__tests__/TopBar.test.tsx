import { render, screen } from '@testing-library/react';
import TopBar from '../TopBar';
import { BrowserRouter } from 'react-router-dom';


describe('MyComponent', () => {
    it('renders correctly', () => {
      render(<BrowserRouter><TopBar /></BrowserRouter>);
      expect(screen.getByText('BRALE')).toBeInTheDocument();
    });
});