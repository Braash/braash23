import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext<any>('')

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  // #region STATE
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  // #endregion

  // #region FUNCTIONS
  const signUp = (authenticate: any, email: string, password: string) => {
    console.log(authenticate, email, password)
    return createUserWithEmailAndPassword(authenticate, email, password)
  }

  const logIn = (authenticate: any, email: string, password: string) => {
    return signInWithEmailAndPassword(authenticate, email, password)
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  // #endregion

  const value = {
    currentUser,
    signUp,
    logIn
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}