import { useState, useEffect } from 'react'
import { useAuth } from './hooks/useAuth'
import Login from './components/Login'
import ProfileSetup from './components/ProfileSetup'
import Journal from './components/Journal'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase'

function App() {
  const { user, loading, login, logout } = useAuth()
  const [userProfile, setUserProfile] = useState({ name: '', nickname: '' })
  const [showProfileSetup, setShowProfileSetup] = useState(false)
  const [profileLoading, setProfileLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadProfile()
    } else {
      setProfileLoading(false)
    }
  }, [user])

  const loadProfile = async () => {
    if (!user) return

    try {
      const profileDoc = await getDoc(doc(db, 'profiles', user.uid))
      
      if (profileDoc.exists()) {
        setUserProfile(profileDoc.data())
        setShowProfileSetup(false)
      } else {
        setShowProfileSetup(true)
      }
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setProfileLoading(false)
    }
  }

  const handleSaveProfile = async (profile) => {
    if (!profile.name || !profile.nickname) {
      alert('Please fill in both name and nickname')
      return
    }

    try {
      await setDoc(doc(db, 'profiles', user.uid), profile)
      setUserProfile(profile)
      setShowProfileSetup(false)
      alert('✅ Profile saved!')
    } catch (error) {
      console.error('Error saving profile:', error)
      alert('Failed to save profile. Please try again.')
    }
  }

  const handleLogout = async () => {
    const result = await logout()
    if (result.success) {
      setUserProfile({ name: '', nickname: '' })
      setShowProfileSetup(false)
    }
  }

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Login onLogin={login} />
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
      userId={user.uid}
      userProfile={userProfile}
      onLogout={handleLogout}
    />
  )
}

export default App