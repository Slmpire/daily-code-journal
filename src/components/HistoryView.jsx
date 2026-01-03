import { Printer, Bell } from './Icons'

function HistoryView({ 
  entries, 
  onSelectEntry, 
  onExportAll,
  notificationTime,
  notificationsEnabled,
  onToggleNotifications,
  onSaveNotificationTime
}) {
  return (
    <div className="space-y-6">
      {/* All Entries */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">All Entries</h2>
          <button
            onClick={onExportAll}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2"
          >
            <Printer /> Export All
          </button>
        </div>
        
        {Object.keys(entries).length === 0 ? (
          <p className="text-white/60 text-center py-8">No entries yet. Start writing!</p>
        ) : (
          <div className="space-y-2">
            {Object.keys(entries).sort().reverse().map(date => {
              const entry = entries[date]
              return (
                <button
                  key={date}
                  onClick={() => onSelectEntry(date)}
                  className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium block">{date}</span>
                      <span className="text-white/60 text-sm">
                        {entry.tasksCompleted ? '✅ Completed' : '❌ Not Completed'}
                      </span>
                    </div>
                    <span className="text-2xl">{entry.mood}</span>
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Notification Settings */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Bell /> Reminder Settings
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white">Enable daily reminders</span>
            <button
              onClick={onToggleNotifications}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                notificationsEnabled
                  ? 'bg-green-500 text-white'
                  : 'bg-white/20 text-white/70'
              }`}
            >
              {notificationsEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
          
          {notificationsEnabled && (
            <div>
              <label className="text-white font-medium mb-2 block">Reminder Time</label>
              <input
                type="time"
                value={notificationTime}
                onChange={(e) => onSaveNotificationTime(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HistoryView