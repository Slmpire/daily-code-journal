import { useState, useEffect } from 'react'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: userCredential.user }
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          return { success: true, user: userCredential.user, newUser: true }
        } catch (signupError) {
          return { success: false, error: signupError.message }
        }
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