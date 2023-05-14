import { render, screen } from '@testing-library/react';
import LogIn from '../LogIn';
import { BrowserRouter } from 'react-router-dom';


describe('Render test for Login compoonent', () => {
    it('renders correctly', () => {
      render(<BrowserRouter><LogIn /></BrowserRouter>);
      expect(screen.getByText('Need an account?')).toBeInTheDocument();
    });
});