import { useState } from 'react'
import { User } from './Icons'

// Edit2 Icon
const Edit2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
)

// Check Icon
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

// X Icon
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

// Mail Icon
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

function ProfileManagement({ userEmail, userProfile, onSaveProfile, onClose }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState({
    name: userProfile.name || '',
    nickname: userProfile.nickname || ''
  })
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = async () => {
    if (!editedProfile.name.trim() || !editedProfile.nickname.trim()) {
      setMessage('Please fill in both fields')
      return
    }

    setIsSaving(true)
    setMessage('')

    const result = await onSaveProfile(editedProfile)
    
    if (result) {
      setMessage('✅ Profile updated successfully!')
      setIsEditing(false)
      setTimeout(() => setMessage(''), 3000)
    } else {
      setMessage('❌ Failed to update profile')
    }

    setIsSaving(false)
  }

  const handleCancel = () => {
    setEditedProfile({
      name: userProfile.name || '',
      nickname: userProfile.nickname || ''
    })
    setIsEditing(false)
    setMessage('')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl border border-white/20 shadow-2xl w-full max-w-md animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-white/20 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-500/30 rounded-xl">
                <User className="w-6 h-6 text-purple-200" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Your Profile</h2>
                <p className="text-sm text-purple-200/70">Manage your account details</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <XIcon className="w-5 h-5 text-white/70" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Email (Read-only) */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <label className="flex items-center gap-2 text-white/60 text-sm mb-2">
              <MailIcon className="w-4 h-4" />
              Email Address
            </label>
            <p className="text-white font-medium">{userEmail}</p>
            <p className="text-xs text-white/50 mt-1">Email cannot be changed</p>
          </div>

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <User className="w-4 h-4 text-purple-300" />
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-purple-400 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-all"
              />
            ) : (
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white">
                {userProfile.name || 'Not set'}
              </div>
            )}
          </div>

          {/* Nickname */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <span className="text-purple-300">@</span>
              Nickname / GitHub Username
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editedProfile.nickname}
                onChange={(e) => setEditedProfile({ ...editedProfile, nickname: e.target.value })}
                placeholder="johndoe"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-purple-400 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-all"
              />
            ) : (
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white">
                @{userProfile.nickname || 'Not set'}
              </div>
            )}
          </div>

          {/* Message */}
          {message && (
            <div className={`p-3 rounded-xl text-sm animate-fade-in ${
              message.includes('✅') 
                ? 'bg-green-500/20 border border-green-500/50 text-green-200'
                : 'bg-red-500/20 border border-red-500/50 text-red-200'
            }`}>
              {message}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-white/20 px-6 py-4 rounded-b-2xl">
          {isEditing ? (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
              <button
                onClick={handleCancel}
                disabled={isSaving}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Edit2Icon className="w-5 h-5" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ProfileManagement