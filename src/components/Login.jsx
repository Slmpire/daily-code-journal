import { BookOpen } from './Icons'

function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    onLogin(email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 text-purple-300">
            <BookOpen />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Daily Code Journal</h1>
          <p className="text-purple-200">Enter your email to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Continue
          </button>
        </form>

        <p className="text-white/60 text-sm text-center mt-4">
          No password needed. Your data is stored locally in your browser.
        </p>
      </div>
    </div>
  )
}

export default Login