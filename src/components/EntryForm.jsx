import { Calendar, Printer, CheckCircle, XCircle } from './Icons'

const moods = ['😊', '🤔', '😤', '🔥', '😴', '🎉', '😅', '💪']

function EntryForm({ 
  selectedDate, 
  setSelectedDate, 
  currentEntry, 
  setCurrentEntry, 
  onSave, 
  onExportMarkdown, 
  onPrint 
}) {
  const getTodayDate = () => new Date().toISOString().split('T')[0]

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl">
      <div className="mb-6">
        <label className="flex items-center gap-2 text-white mb-2 font-medium">
          <div className="w-5 h-5"><Calendar /></div>
          Select Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          max={getTodayDate()}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-white font-medium mb-2 block">What I worked on</label>
          <textarea
            value={currentEntry.worked}
            onChange={(e) => setCurrentEntry({ ...currentEntry, worked: e.target.value })}
            placeholder="Describe what you built or worked on today..."
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-24"
          />
        </div>

        <div>
          <label className="text-white font-medium mb-2 block">What I learned</label>
          <textarea
            value={currentEntry.learned}
            onChange={(e) => setCurrentEntry({ ...currentEntry, learned: e.target.value })}
            placeholder="New concepts, techniques, or insights..."
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-24"
          />
        </div>

        <div>
          <label className="text-white font-medium mb-2 block">Challenges</label>
          <textarea
            value={currentEntry.challenges}
            onChange={(e) => setCurrentEntry({ ...currentEntry, challenges: e.target.value })}
            placeholder="Bugs, obstacles, or tough problems..."
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-20"
          />
        </div>

        <div>
          <label className="text-white font-medium mb-2 block">Tomorrow's goals</label>
          <textarea
            value={currentEntry.goals}
            onChange={(e) => setCurrentEntry({ ...currentEntry, goals: e.target.value })}
            placeholder="What you want to accomplish next..."
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-20"
          />
        </div>

        <div>
          <label className="text-white font-medium mb-2 block">Did you complete today's tasks?</label>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentEntry({ ...currentEntry, tasksCompleted: true })}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                currentEntry.tasksCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-white/20 text-white/70 hover:bg-white/30'
              }`}
            >
              <CheckCircle /> Yes
            </button>
            <button
              onClick={() => setCurrentEntry({ ...currentEntry, tasksCompleted: false })}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                !currentEntry.tasksCompleted
                  ? 'bg-red-500 text-white'
                  : 'bg-white/20 text-white/70 hover:bg-white/30'
              }`}
            >
              <XCircle /> No
            </button>
          </div>
        </div>

        <div>
          <label className="text-white font-medium mb-2 block">Today's mood</label>
          <div className="flex gap-2 flex-wrap">
            {moods.map(mood => (
              <button
                key={mood}
                onClick={() => setCurrentEntry({ ...currentEntry, mood })}
                className={`text-3xl p-3 rounded-lg transition-all ${
                  currentEntry.mood === mood 
                    ? 'bg-purple-500 scale-110' 
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6 flex-wrap">
        <button
          onClick={onSave}
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          💾 Save Entry
        </button>
        <button
          onClick={onExportMarkdown}
          className="px-6 bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30"
        >
          ⬇️ Export .md
        </button>
        <button
          onClick={onPrint}
          className="px-6 bg-green-500/30 text-white py-3 rounded-lg font-semibold hover:bg-green-500/40 transition-all border border-green-400/30 flex items-center gap-2"
          title="Print or Save as PDF"
        >
          <Printer /> Print
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
        <p className="text-blue-100 text-sm">
          <strong>📝 Daily workflow:</strong> Write entry → Mark tasks → Save → Export .md → Commit to GitHub!
        </p>
      </div>
    </div>
  )
}

export default EntryForm