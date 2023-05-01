interface SignUpMessages {
    title: string;
    emailLabel: string;
    passwordLabel: string;
    passwordConfirmationLabel: string;
    signUpButtonCopy: string;
    alreadyHaveAnAccountCopy: string;
    logInCopy: string;
}

const messages: SignUpMessages = {
    title: 'Sign Up',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    passwordConfirmationLabel:'Password confirmation',
    signUpButtonCopy: 'Sign up',
    alreadyHaveAnAccountCopy: 'Already have an account? ',
    logInCopy: 'Log in'
};

export default messages;