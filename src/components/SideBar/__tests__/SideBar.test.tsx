import { render, screen } from '@testing-library/react';
import SideBar from '../SideBar';
import { BrowserRouter } from 'react-router-dom';


describe('MyComponent', () => {
    it('renders correctly', () => {
      render(<BrowserRouter><SideBar /></BrowserRouter>);
      expect(screen.getByTestId('logo-img')).toBeInTheDocument();
    });
});