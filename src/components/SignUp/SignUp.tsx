import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase"
import messages from './messages'
import logoImg from '../../assets/logo.png'

const SignUp = () => {
  // #region HOOKS
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signUp, currentUser } = useAuth();
  const navigate = useNavigate();
  // #endregion
  
  // #region STATE
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // #endregion

  // #region FUNCTIONS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>,) => {
    e.preventDefault();
    console.log(auth, 'value auth')
    if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(auth, emailRef.current?.value, passwordRef.current?.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };
  // #endregion

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center flex-shrink-0 text-black ml-1 mr-6">
            <img src={logoImg} className="pr-1 h-6" alt='Logo' />
            <span className="font-semibold text-xl tracking-tight">{messages?.name}</span>
      </div>
      <h2 className="text-center mb-4 text-2xl font-medium font-bold">{messages?.title}</h2>
      {currentUser && currentUser?.email}
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSubmit}>
        <div className="form-group mb-4 w-full max-w-md">
          <label>{messages?.emailLabel}</label>
          <input type="email" className="rounded-md border-gray-400 border p-2 w-full" ref={emailRef} required />
        </div>
        <div className="form-group mb-4 w-full max-w-md">
          <label>{messages?.passwordLabel}</label>
          <input type="password" className="rounded-md border-gray-400 border p-2 w-full" ref={passwordRef} required />
        </div>
        <div className="form-group mb-4 w-full max-w-md">
          <label>{messages?.passwordConfirmationLabel}</label>
          <input type="password" className="rounded-md border-gray-400 border p-2 w-full" ref={passwordConfirmRef} required />
        </div>
        <button disabled={loading} className="bg-gray-200 rounded-md py-2 px-4 w-full max-w-md" type="submit">
          {messages?.passwordConfirmationLabel}
        </button>

      </form>
      <div className="w-full text-center mt-2">
        {messages?.alreadyHaveAnAccountCopy} <Link to="/login" className="font-bold text-gray-500">{messages?.logInCopy}</Link>
      </div>
    </div>
  );
};

export default SignUp;
