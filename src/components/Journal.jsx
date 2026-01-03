import { useState } from 'react'
import { BookOpen, LogOut } from './Icons'
import Stats from './Stats'
import StreakHistory from './StreakHistory'
import EntryForm from './EntryForm'
import HistoryView from './HistoryView'
import { useJournalData } from '../hooks/useJournalData'
import { useNotifications } from '../hooks/useNotifications'

function Journal({ userEmail, userProfile, onLogout }) {
  const [view, setView] = useState('today')
  
  const {
    entries,
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
  } = useJournalData(userEmail, userProfile)

  const {
    notificationTime,
    notificationsEnabled,
    toggleNotifications,
    saveNotificationTime
  } = useNotifications(userEmail)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-between mb-4">
            <div></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-white font-semibold">{userProfile.name}</p>
                <p className="text-purple-200 text-sm">@{userProfile.nickname}</p>
              </div>
              <button
                onClick={onLogout}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                title="Logout"
              >
                <LogOut />
              </button>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <div className="w-12 h-12"><BookOpen /></div>
            Daily Code Journal
          </h1>
          <p className="text-purple-200">Document your coding journey, one day at a time</p>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setView('today')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              view === 'today' 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Today's Entry
          </button>
          <button
            onClick={() => setView('history')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              view === 'history' 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            History
          </button>
        </div>

        {/* Stats */}
        <Stats
          currentStreak={getCurrentStreak()}
          totalEntries={Object.keys(entries).length}
          completionScore={getCompletionScore()}
        />

        {/* Streak History */}
        <StreakHistory streakHistory={streakHistory} />

        {/* Main Content */}
        {view === 'today' ? (
          <EntryForm
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentEntry={currentEntry}
            setCurrentEntry={setCurrentEntry}
            onSave={saveEntry}
            onExportMarkdown={exportToMarkdown}
            onPrint={printEntry}
          />
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default Journal