import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../SignUp';
import { BrowserRouter } from 'react-router-dom';
import { passwordValidation } from '../SignUp';
import messages from '../messages';

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

describe('Password validation', () => {
  test('Returns true for a valid password', () => {
    expect(passwordValidation.test('Aventador93')).toBe(true);
  });

  test('Returns false for password with less than 8 characters', () => {
    expect(passwordValidation.test('Apple')).toBe(false);
  });

  test('Returns false for password without an uppercase letter', () => {
    expect(passwordValidation.test('orange')).toBe(false);
  });

  test('Returns false for password without a lowercase letter', () => {
    expect(passwordValidation.test('ABC12345')).toBe(false);
  });

  test('Returns false for password without a number', () => {
    expect(passwordValidation.test('Abcdefgh')).toBe(false);
  });
});


describe('MyComponent', () => {
    it('renders correctly', () => {
      render(<BrowserRouter><SignUp /></BrowserRouter>);
      expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    });
});