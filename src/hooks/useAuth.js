import { useState, useEffect } from 'react'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth'
import { auth } from '../firebase'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lastSyncTime, setLastSyncTime] = useState(null)

  useEffect(() => {
    // Set persistence to LOCAL so user stays logged in across browser sessions
    // This ensures the same account can be accessed from different devices
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error('Failed to set persistence:', error)
    })

    // Listen for auth state changes across all devices
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
      
      if (user) {
        setLastSyncTime(new Date().toISOString())
        // Store user info for offline access
        localStorage.setItem('lastUserEmail', user.email)
        localStorage.setItem('lastLoginTime', new Date().toISOString())
      } else {
        localStorage.removeItem('lastUserEmail')
        localStorage.removeItem('lastLoginTime')
      }
    })

    return unsubscribe
  }, [])

  const login = async (email, password, rememberMe = true) => {
    try {
      // Set persistence based on user preference
      // LOCAL = stays logged in across browser restarts (multi-device friendly)
      // SESSION = logs out when browser closes
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)

      // Check if email exists
      const signInMethods = await fetchSignInMethodsForEmail(auth, email)
      
      if (signInMethods.length > 0) {
        // Email exists, sign in
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          
          // Store device info for tracking (optional)
          const deviceInfo = {
            lastLogin: new Date().toISOString(),
            userAgent: navigator.userAgent,
            platform: navigator.platform
          }
          localStorage.setItem('deviceInfo', JSON.stringify(deviceInfo))
          
          return { 
            success: true, 
            user: userCredential.user,
            message: 'Successfully logged in! Your data will sync across all devices.'
          }
        } catch (signInError) {
          // Handle specific sign-in errors
          if (signInError.code === 'auth/wrong-password') {
            return { success: false, error: 'Incorrect password. Please try again.' }
          } else if (signInError.code === 'auth/invalid-credential') {
            return { success: false, error: 'Invalid credentials. Please check your email and password.' }
          } else if (signInError.code === 'auth/too-many-requests') {
            return { 
              success: false, 
              error: 'Too many failed attempts. Please try again later or reset your password.' 
            }
          } else if (signInError.code === 'auth/user-disabled') {
            return { success: false, error: 'This account has been disabled.' }
          }
          return { success: false, error: signInError.message }
        }
      } else {
        // Email doesn't exist, create new account
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          
          // Store device info
          const deviceInfo = {
            firstLogin: new Date().toISOString(),
            userAgent: navigator.userAgent,
            platform: navigator.platform
          }
          localStorage.setItem('deviceInfo', JSON.stringify(deviceInfo))
          
          return { 
            success: true, 
            user: userCredential.user, 
            newUser: true,
            message: 'Account created! You can now access your journal from any device using these credentials.'
          }
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
        return { 
          success: false, 
          error: 'Network error. Please check your internet connection and try again.' 
        }
      } else if (error.code === 'auth/invalid-email') {
        return { success: false, error: 'Invalid email address format.' }
      }
      return { success: false, error: error.message }
    }
  }

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email)
      return { 
        success: true, 
        message: 'Password reset email sent! Check your inbox. You can use the new password on all your devices.' 
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        return { success: false, error: 'No account found with this email.' }
      } else if (error.code === 'auth/invalid-email') {
        return { success: false, error: 'Invalid email address.' }
      } else if (error.code === 'auth/too-many-requests') {
        return { success: false, error: 'Too many requests. Please try again later.' }
      }
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      // Clear device info but keep email for convenience
      localStorage.removeItem('deviceInfo')
      return { 
        success: true,
        message: 'Logged out successfully. Your data is safely synced across all devices.'
      }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Force refresh the auth token (useful for syncing across devices)
  const refreshAuth = async () => {
    if (user) {
      try {
        await user.reload()
        setLastSyncTime(new Date().toISOString())
        return { success: true }
      } catch (error) {
        return { success: false, error: error.message }
      }
    }
    return { success: false, error: 'No user logged in' }
  }

  // Get last known user email (for convenience on login screen)
  const getLastUserEmail = () => {
    return localStorage.getItem('lastUserEmail')
  }

  return { 
    user, 
    loading, 
    login, 
    logout, 
    resetPassword, 
    refreshAuth,
    getLastUserEmail,
    lastSyncTime 
  }
}