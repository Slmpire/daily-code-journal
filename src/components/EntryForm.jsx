import { Calendar, Printer, CheckCircle, XCircle, Plus, Trash2 } from './Icons'
import TagInput from './TagInput'

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '🤔', label: 'Thinking' },
  { emoji: '😤', label: 'Frustrated' },
  { emoji: '🔥', label: 'On Fire' },
  { emoji: '😴', label: 'Tired' },
  { emoji: '🎉', label: 'Excited' },
  { emoji: '😅', label: 'Relieved' },
  { emoji: '💪', label: 'Motivated' }
]

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

  const handleAddGoal = () => {
    const newGoals = [...(currentEntry.dailyGoals || []), { text: '', completed: false }]
    setCurrentEntry({ ...currentEntry, dailyGoals: newGoals })
  }

  const handleRemoveGoal = (index) => {
    const newGoals = currentEntry.dailyGoals.filter((_, i) => i !== index)
    setCurrentEntry({ ...currentEntry, dailyGoals: newGoals })
  }

  const handleGoalChange = (index, field, value) => {
    const newGoals = [...(currentEntry.dailyGoals || [])]
    newGoals[index] = { ...newGoals[index], [field]: value }
    setCurrentEntry({ ...currentEntry, dailyGoals: newGoals })
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-white/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/30 rounded-xl">
              <Calendar className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Journal Entry</h3>
              <p className="text-sm text-purple-200/70">Document your day</p>
            </div>
          </div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            max={getTodayDate()}
            className="px-4 py-2 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-white/25 transition-all"
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 space-y-6">
        {/* What I worked on */}
        <div className="group">
          <label className="text-white font-semibold mb-2 block flex items-center gap-2">
            <span className="text-purple-300">💻</span>
            What I worked on
          </label>
          <textarea
            value={currentEntry.worked}
            onChange={(e) => setCurrentEntry({ ...currentEntry, worked: e.target.value })}
            placeholder="Describe what you built or worked on today..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/15 transition-all min-h-24 resize-y hover:border-white/30"
          />
        </div>

        {/* What I learned */}
        <div className="group">
          <label className="text-white font-semibold mb-2 block flex items-center gap-2">
            <span className="text-blue-300">📚</span>
            What I learned
          </label>
          <textarea
            value={currentEntry.learned}
            onChange={(e) => setCurrentEntry({ ...currentEntry, learned: e.target.value })}
            placeholder="New concepts, techniques, or insights..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all min-h-24 resize-y hover:border-white/30"
          />
        </div>

        {/* Challenges */}
        <div className="group">
          <label className="text-white font-semibold mb-2 block flex items-center gap-2">
            <span className="text-orange-300">🐛</span>
            Challenges
          </label>
          <textarea
            value={currentEntry.challenges}
            onChange={(e) => setCurrentEntry({ ...currentEntry, challenges: e.target.value })}
            placeholder="Bugs, obstacles, or tough problems..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white/15 transition-all min-h-20 resize-y hover:border-white/30"
          />
        </div>

        {/* Tomorrow's goals */}
        <div className="group">
          <label className="text-white font-semibold mb-2 block flex items-center gap-2">
            <span className="text-green-300">🎯</span>
            Tomorrow's goals
          </label>
          <textarea
            value={currentEntry.goals}
            onChange={(e) => setCurrentEntry({ ...currentEntry, goals: e.target.value })}
            placeholder="What you want to accomplish next..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white/15 transition-all min-h-20 resize-y hover:border-white/30"
          />
        </div>

        {/* Daily Goals Section */}
        <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10">
          <div className="flex items-center justify-between gap-2 mb-4">
            <label className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
              <span className="text-yellow-300">✓</span>
              Today's Tasks
            </label>
            <button
              type="button"
              onClick={handleAddGoal}
              className="px-2.5 sm:px-3 py-1.5 bg-purple-500/30 hover:bg-purple-500/40 text-purple-200 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1 sm:gap-1.5 border border-purple-400/30 whitespace-nowrap"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Add Task</span>
              <span className="xs:hidden">Add</span>
            </button>
          </div>
          
          <div className="space-y-2">
            {(currentEntry.dailyGoals || [
              { text: '', completed: false },
              { text: '', completed: false },
              { text: '', completed: false }
            ]).map((goal, index) => (
              <div key={index} className="flex items-center gap-1.5 sm:gap-2 group/goal">
                <input
                  type="checkbox"
                  checked={goal.completed || false}
                  onChange={(e) => handleGoalChange(index, 'completed', e.target.checked)}
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-lg bg-white/20 border-2 border-white/30 text-green-500 focus:ring-2 focus:ring-green-400 cursor-pointer hover:border-green-400 transition-all flex-shrink-0"
                />
                <input
                  type="text"
                  value={goal.text || ''}
                  onChange={(e) => handleGoalChange(index, 'text', e.target.value)}
                  placeholder={`Task ${index + 1}`}
                  className={`flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border text-white text-sm sm:text-base placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${
                    goal.completed 
                      ? 'bg-green-500/10 border-green-400/30 line-through text-white/60' 
                      : 'bg-white/10 border-white/20 hover:border-white/30'
                  }`}
                />
                {(currentEntry.dailyGoals?.length || 3) > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveGoal(index)}
                    className="p-1.5 sm:p-2 hover:bg-red-500/20 rounded-lg transition-all opacity-0 group-hover/goal:opacity-100 flex-shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {(currentEntry.dailyGoals?.filter(g => g.completed).length || 0) > 0 && (
            <div className="mt-3 p-2 bg-green-500/10 border border-green-400/20 rounded-lg">
              <p className="text-green-200 text-xs text-center">
                🎉 {currentEntry.dailyGoals?.filter(g => g.completed).length} of {currentEntry.dailyGoals?.length} tasks completed!
              </p>
            </div>
          )}
        </div>

        {/* Tags Section */}
        <TagInput
          tags={currentEntry.tags || []}
          onTagsChange={(newTags) => setCurrentEntry({ ...currentEntry, tags: newTags })}
        />

        {/* Tasks Completed Toggle */}
        <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10">
          <label className="text-white font-semibold mb-3 block text-sm sm:text-base">Did you complete today's main tasks?</label>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setCurrentEntry({ ...currentEntry, tasksCompleted: true })}
              className={`py-3 sm:py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
                currentEntry.tasksCompleted
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
              }`}
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Yes</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentEntry({ ...currentEntry, tasksCompleted: false })}
              className={`py-3 sm:py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
                !currentEntry.tasksCompleted
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30 scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
              }`}
            >
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>No</span>
            </button>
          </div>
        </div>

        {/* Mood Selector */}
        <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10">
          <label className="text-white font-semibold mb-3 block text-sm sm:text-base">Today's mood</label>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {moods.map(mood => (
              <button
                key={mood.emoji}
                type="button"
                onClick={() => setCurrentEntry({ ...currentEntry, mood: mood.emoji })}
                className={`relative p-2 sm:p-4 rounded-xl transition-all group/mood ${
                  currentEntry.mood === mood.emoji 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 scale-105 sm:scale-110 shadow-lg shadow-purple-500/30' 
                    : 'bg-white/10 hover:bg-white/20 hover:scale-105 border border-white/20'
                }`}
                title={mood.label}
              >
                <div className="text-2xl sm:text-3xl">{mood.emoji}</div>
                <div className={`text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium transition-opacity leading-tight ${
                  currentEntry.mood === mood.emoji ? 'text-white' : 'text-white/50 group-hover/mood:text-white/70'
                }`}>
                  {mood.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-white/20 px-4 sm:px-6 py-4">
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          <button
            onClick={onSave}
            type="button"
            className="flex-1 min-w-full sm:min-w-48 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-xl transition-all duration-300 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            <div className="relative px-4 sm:px-6 py-3 font-bold text-white text-sm sm:text-base flex items-center justify-center gap-2">
              <span>💾</span>
              <span>Save Entry</span>
            </div>
          </button>
          
          <button
            onClick={onExportMarkdown}
            type="button"
            className="flex-1 min-w-0 px-4 sm:px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-white/30 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>⬇️</span>
            <span className="hidden xs:inline">Export .md</span>
            <span className="xs:hidden">Export</span>
          </button>
          
          <button
            onClick={onPrint}
            type="button"
            className="flex-1 min-w-0 px-4 sm:px-6 py-3 bg-green-500/20 text-white rounded-xl font-semibold hover:bg-green-500/30 transition-all border border-green-400/30 hover:border-green-400/50 flex items-center justify-center gap-2 text-sm sm:text-base"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Print</span>
          </button>
        </div>

        {/* Tip */}
        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-400/20 rounded-xl backdrop-blur-sm">
          <p className="text-blue-100 text-xs sm:text-sm flex items-start gap-2">
            <span className="text-sm sm:text-base flex-shrink-0">💡</span>
            <span><strong>Tip:</strong> Write entry → Set goals → Mark tasks → Save → Export .md → Commit to GitHub!</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EntryForm