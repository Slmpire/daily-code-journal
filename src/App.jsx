import { useState, useEffect } from 'react'
import Login from './components/Login'
import ProfileSetup from './components/ProfileSetup'
import Journal from './components/Journal'

function App() {
  const [userEmail, setUserEmail] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userProfile, setUserProfile] = useState({ name: '', nickname: '' })
  const [showProfileSetup, setShowProfileSetup] = useState(false)

  useEffect(() => {
    checkAuth()
    requestNotificationPermission()
  }, [])

  const checkAuth = () => {
    const stored = localStorage.getItem('current-user-email')
    if (stored) {
      setUserEmail(stored)
      setIsLoggedIn(true)
      const profileData = localStorage.getItem(`profile-${stored}`)
      if (profileData) {
        setUserProfile(JSON.parse(profileData))
      } else {
        setShowProfileSetup(true)
      }
    }
  }

  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission()
    }
  }

  const handleLogin = (email) => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address')
      return
    }

    localStorage.setItem('current-user-email', email)
    setUserEmail(email)
    setIsLoggedIn(true)

    const profileData = localStorage.getItem(`profile-${email}`)
    if (!profileData) {
      setShowProfileSetup(true)
    } else {
      setUserProfile(JSON.parse(profileData))
    }
  }

  const handleSaveProfile = (profile) => {
    if (!profile.name || !profile.nickname) {
      alert('Please fill in both name and nickname')
      return
    }

    localStorage.setItem(`profile-${userEmail}`, JSON.stringify(profile))
    setUserProfile(profile)
    setShowProfileSetup(false)
    alert('✅ Profile saved!')
  }

  const handleLogout = () => {
    localStorage.removeItem('current-user-email')
    setIsLoggedIn(false)
    setUserEmail('')
    setUserProfile({ name: '', nickname: '' })
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  if (showProfileSetup) {
    return (
      <ProfileSetup
        profile={userProfile}
        setProfile={setUserProfile}
        onSave={handleSaveProfile}
      />
    )
  }

  return (
    <Journal
      userEmail={userEmail}
      userProfile={userProfile}
      onLogout={handleLogout}
    />
  )
}

export default App