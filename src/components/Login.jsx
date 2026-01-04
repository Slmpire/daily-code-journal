import { useState } from 'react'
import { BookOpen } from './Icons'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const result = await onLogin(email, password)
    
    if (!result.success) {
      setError(result.error)
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 text-purple-300">
            <BookOpen />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Daily Code Journal</h1>
          <p className="text-purple-200">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password (min 6 characters)"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
              minLength={6}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Sign In / Sign Up'}
          </button>
        </form>

        <p className="text-white/60 text-sm text-center mt-4">
          Your data is securely stored in the cloud and synced across devices.
        </p>
      </div>
    </div>
  )
}

export default Login