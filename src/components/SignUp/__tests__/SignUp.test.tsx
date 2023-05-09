import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../SignUp';
import { BrowserRouter } from 'react-router-dom';

describe('SignUp component', () => {
  it('should show an error message if an invalid email is entered', async () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const passwordConfirmInput = screen.getByTestId('password-confirmation');
    const submitButton = screen.getByRole('button', { name: 'Sign up' });

    // Incorrect password validation causes an error
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(passwordConfirmInput, { target: { value: 'password1234' } });
    fireEvent.click(submitButton);

    // Expect to see an error message
    const errorMessage = await screen.findByText('Passwords do not match');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should sign up a new user if valid email and password are entered', async () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const passwordConfirmInput = screen.getByTestId('password-confirmation');
    const submitButton = screen.getByRole('button', { name: 'Sign up' });

    // Enter a valid email address and password
    fireEvent.change(emailInput, { target: { value: 'brandonicous@brale.com' } });
    fireEvent.change(passwordInput, { target: { value: 'apple93' } });
    fireEvent.change(passwordConfirmInput, { target: { value: 'apple93' } });
    fireEvent.click(submitButton);
  });
});
