import { useState } from 'react'
import { BookOpen, LogOut, BarChart3, Calendar, List } from './Icons' 
import Stats from './Stats'
import StreakHistory from './StreakHistory'
import EntryForm from './EntryForm'
import HistoryView from './HistoryView'
import Dashboard from './Dashboard' 
import MoodChart from './MoodChart'  
import HabitTracker from './HabitTracker'
import { useJournalData } from '../hooks/useJournalData'
import { useNotifications } from '../hooks/useNotifications'

function Journal({ userId, userProfile, onLogout }) {
  const [view, setView] = useState('today')
  
  const {
    entries,
    loading,
    streakHistory,
    currentEntry,
    setCurrentEntry,
    selectedDate,
    setSelectedDate,
    saveEntry,
    getCurrentStreak,
    getCompletionScore,
    exportToMarkdown,
    printEntry,
    exportAllToPDF
  } = useJournalData(userId, userProfile)

  const {
    notificationTime,
    notificationsEnabled,
    toggleNotifications,
    saveNotificationTime
  } = useNotifications(userId)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative flex items-center justify-center mb-4">
            <div className="absolute w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-white text-xl font-semibold">Loading your journal...</p>
          <p className="text-purple-200/60 text-sm mt-2">Syncing your entries</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-20 md:pb-6">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-bold text-white">Daily Code Journal</h1>
                <p className="text-xs text-purple-200/60 hidden sm:block">☁️ Cloud synced</p>
              </div>
            </div>

            {/* User Profile & Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-white font-semibold text-sm">{userProfile.name}</p>
                <p className="text-purple-200 text-xs">@{userProfile.nickname}</p>
              </div>
              <button
                onClick={onLogout}
                className="p-2 sm:p-2.5 bg-white/10 rounded-lg sm:rounded-xl hover:bg-red-500/20 transition-all group border border-white/10 hover:border-red-400/30"
                title="Logout"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-red-400" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs - Desktop/Tablet Only */}
          <div className="hidden md:flex gap-2 mt-4 overflow-x-auto pb-1">
            <button
              onClick={() => setView('dashboard')}
              className={`px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                view === 'dashboard' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setView('today')}
              className={`px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                view === 'today' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Today's Entry</span>
            </button>
            <button
              onClick={() => setView('history')}
              className={`px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                view === 'history' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              <List className="w-4 h-4" />
              <span>History</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* View Content with Animation */}
        <div className="animate-fade-in">
          {view === 'dashboard' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-purple-400/30">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Your Dashboard</h2>
                  <p className="text-purple-200/70 text-xs sm:text-sm">Track your progress and achievements</p>
                </div>
              </div>
              
              <Dashboard 
                entries={entries}
                currentStreak={getCurrentStreak()}
                completionScore={getCompletionScore()}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <MoodChart entries={entries} />
                <HabitTracker userId={userId} />
              </div>
            </div>
          )}

          {view === 'today' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-purple-400/30">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Today's Entry</h2>
                  <p className="text-purple-200/70 text-xs sm:text-sm">Document your coding journey</p>
                </div>
              </div>

              {/* Stats */}
              <Stats
                currentStreak={getCurrentStreak()}
                totalEntries={Object.keys(entries).length}
                completionScore={getCompletionScore()}
              />

              {/* Streak History */}
              <StreakHistory streakHistory={streakHistory} />

              {/* Entry Form */}
              <EntryForm
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                currentEntry={currentEntry}
                setCurrentEntry={setCurrentEntry}
                onSave={saveEntry}
                onExportMarkdown={exportToMarkdown}
                onPrint={printEntry}
              />
            </div>
          )}

          {view === 'history' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-purple-400/30">
                  <List className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Entry History</h2>
                  <p className="text-purple-200/70 text-xs sm:text-sm">Browse and manage your past entries</p>
                </div>
              </div>

              <HistoryView
                entries={entries}
                onSelectEntry={(date) => {
                  setSelectedDate(date)
                  setView('today')
                }}
                onExportAll={exportAllToPDF}
                notificationTime={notificationTime}
                notificationsEnabled={notificationsEnabled}
                onToggleNotifications={toggleNotifications}
                onSaveNotificationTime={saveNotificationTime}
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation - WhatsApp Style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around px-2 py-2 pb-safe">
          <button
            onClick={() => setView('dashboard')}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all flex-1 ${
              view === 'dashboard' 
                ? 'text-purple-400' 
                : 'text-white/50'
            }`}
          >
            <div className={`relative ${view === 'dashboard' ? 'scale-110' : ''} transition-transform`}>
              <BarChart3 className="w-6 h-6" />
              {view === 'dashboard' && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
              )}
            </div>
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          
          <button
            onClick={() => setView('today')}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all flex-1 ${
              view === 'today' 
                ? 'text-purple-400' 
                : 'text-white/50'
            }`}
          >
            <div className={`relative ${view === 'today' ? 'scale-110' : ''} transition-transform`}>
              <Calendar className="w-6 h-6" />
              {view === 'today' && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
              )}
            </div>
            <span className="text-xs font-medium">Today</span>
          </button>
          
          <button
            onClick={() => setView('history')}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all flex-1 ${
              view === 'history' 
                ? 'text-purple-400' 
                : 'text-white/50'
            }`}
          >
            <div className={`relative ${view === 'history' ? 'scale-110' : ''} transition-transform`}>
              <List className="w-6 h-6" />
              {view === 'history' && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
              )}
            </div>
            <span className="text-xs font-medium">History</span>
          </button>
        </div>
      </div>

      <style jsx>{`
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
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }

        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 0.5rem);
        }
      `}</style>
    </div>
  )
}

export default Journal