import { useState, useEffect } from 'react'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  fetchSignInMethodsForEmail
} from 'firebase/auth'
import { auth } from '../firebase'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = async (email, password) => {
    try {
      // First, check if the email exists
      const signInMethods = await fetchSignInMethodsForEmail(auth, email)
      
      if (signInMethods.length > 0) {
        // Email exists, try to sign in
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          return { success: true, user: userCredential.user }
        } catch (signInError) {
          // Handle specific sign-in errors
          if (signInError.code === 'auth/wrong-password') {
            return { success: false, error: 'Incorrect password. Please try again.' }
          } else if (signInError.code === 'auth/invalid-credential') {
            return { success: false, error: 'Invalid credentials. Please check your email and password.' }
          } else if (signInError.code === 'auth/too-many-requests') {
            return { success: false, error: 'Too many failed attempts. Please try again later.' }
          }
          return { success: false, error: signInError.message }
        }
      } else {
        // Email doesn't exist, create new account
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          return { success: true, user: userCredential.user, newUser: true }
        } catch (signupError) {
          if (signupError.code === 'auth/weak-password') {
            return { success: false, error: 'Password should be at least 6 characters.' }
          } else if (signupError.code === 'auth/email-already-in-use') {
            return { success: false, error: 'Email already in use. Please try signing in.' }
          }
          return { success: false, error: signupError.message }
        }
      }
    } catch (error) {
      // Handle network errors or other issues
      if (error.code === 'auth/network-request-failed') {
        return { success: false, error: 'Network error. Please check your internet connection.' }
      } else if (error.code === 'auth/invalid-email') {
        return { success: false, error: 'Invalid email address format.' }
      }
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  return { user, loading, login, logout }
}