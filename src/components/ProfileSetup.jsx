import { User } from './Icons'

function ProfileSetup({ profile, setProfile, onSave }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 text-purple-300">
            <User />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Setup Your Profile</h1>
          <p className="text-purple-200">Tell us a bit about yourself</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-white font-medium mb-2 block">Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="text-white font-medium mb-2 block">Nickname / GitHub Username</label>
            <input
              type="text"
              value={profile.nickname}
              onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
              placeholder="johndoe"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            onClick={() => onSave(profile)}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSetup