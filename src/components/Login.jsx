import { useState } from 'react'
import { BookOpen } from './Icons'

function Login({ onLogin, onResetPassword }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetMessage, setResetMessage] = useState('')

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

  const handleResetPassword = async () => {
    if (!resetEmail) {
      setError('Please enter your email address')
      return
    }

    setError('')
    setResetMessage('')
    setIsLoading(true)

    const result = await onResetPassword(resetEmail)
    
    if (result.success) {
      setResetMessage(result.message)
      setTimeout(() => {
        setShowForgotPassword(false)
        setResetMessage('')
        setResetEmail('')
      }, 3000)
    } else {
      setError(result.error)
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Logo & Title Section */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 text-white">
                <BookOpen />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Daily Code Journal
            </h1>
            <p className="text-lg text-purple-200/80">Track your coding journey, build your streak</p>
          </div>

          {/* Login Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl animate-slide-up">
            {showForgotPassword ? (
              // Forgot Password Form
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
                  <p className="text-purple-200/70 text-sm">Enter your email to receive a reset link</p>
                </div>

                <div className="space-y-5">
                  <div className="relative">
                    <label className="block text-sm font-medium text-purple-200 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleResetPassword()}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {resetMessage && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 text-sm animate-fade-in backdrop-blur-sm">
                      <span className="font-semibold">✅ Success:</span> {resetMessage}
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm animate-fade-in backdrop-blur-sm">
                      <span className="font-semibold">⚠️ Error:</span> {error}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={handleResetPassword}
                      disabled={isLoading || !resetEmail}
                      className="flex-1 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-xl"></div>
                      <div className="relative px-6 py-3 font-bold text-white flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Reset Link</span>
                        )}
                      </div>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setShowForgotPassword(false)
                      setError('')
                      setResetMessage('')
                      setResetEmail('')
                    }}
                    className="w-full text-purple-200 hover:text-white text-sm transition-colors"
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </>
            ) : (
              // Login Form
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
                  <p className="text-purple-200/70 text-sm">Sign in to continue your journey</p>
                </div>

            <div className="space-y-5">
              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/10 border-2 text-white placeholder-white/40 focus:outline-none transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-purple-400 bg-white/15 shadow-lg shadow-purple-500/20'
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    disabled={isLoading}
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    placeholder="••••••••"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/10 border-2 text-white placeholder-white/40 focus:outline-none transition-all duration-300 ${
                      focusedField === 'password'
                        ? 'border-purple-400 bg-white/15 shadow-lg shadow-purple-500/20'
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    disabled={isLoading}
                  />
                  {focusedField === 'password' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-xs text-purple-200/50">Minimum 6 characters</p>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPassword(true)
                      setError('')
                    }}
                    className="text-xs text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm animate-fade-in backdrop-blur-sm">
                  <span className="font-semibold">⚠️ Error:</span> {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading || !email || password.length < 6}
                className="w-full relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-xl transition-all duration-300 group-hover:scale-105 group-disabled:scale-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur group-disabled:opacity-0"></div>
                <div className="relative px-6 py-4 font-bold text-white text-lg flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In / Sign Up</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </div>
            </>
          )}

            {/* Info Section */}
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-400/20 rounded-xl backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔐</div>
                <div>
                  <p className="text-blue-100 text-sm font-medium">Secure & Private</p>
                  <p className="text-blue-200/60 text-xs mt-1">
                    Your data is encrypted and synced securely across all your devices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-purple-200/60 text-sm">
              New here? Create an account automatically on first sign-in
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Login