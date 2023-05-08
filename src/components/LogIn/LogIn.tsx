import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import messages from './messages';
import logoImg from '../../assets/logo.png';

const LogIn = () => {
  // #region HOOKS
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { logIn, signInWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();
  // #endregion

  // #region STATE
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // #endregion 

  // #region FUNCTIONS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    try {
      setError("");
      setLoading(true);
      await logIn(auth, emailRef.current?.value, passwordRef.current?.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }
  
  const handleGoogle = async () => {
    await signInWithGoogle();
    navigate("/");
  }
  // #endregion

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
      <div className="flex items-center justify-center">
            <img src={logoImg} className="pr-1 justify-center h-6" alt='Logo' />
      </div>
        <h2 className="text-center text-2xl mb-4">{messages?.title}</h2>
        {currentUser && currentUser?.email}
        {error && <div className="bg-red-100 text-red-700 py-2 px-4 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>
                {messages?.emailLabel}
            </label>
            <input id="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={emailRef} required />
          </div>
          <div className="mb-6">
            <label>
                {messages?.passwordLabel}
            </label>
            <input id="password" type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={passwordRef} required />
          </div>
          <button disabled={loading} className="bg-gray-200 rounded-md py-2 px-4 w-full max-w-md" type="submit">
            {messages?.title}
          </button>
        </form>
          <button onClick={handleGoogle} className="bg-gray-400 mt-4 rounded-md py-2 px-4 w-full max-w-md" type="submit">
            {messages?.signInWithGoogleButtonCopy}
          </button>
        <div className="mt-4 text-center">
            {messages?.needAnAccountCopy}<Link to="/signup" className="font-bold text-gray-500">{messages?.signUpCopy}</Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
