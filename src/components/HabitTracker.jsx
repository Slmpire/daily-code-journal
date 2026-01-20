import { useState, useEffect } from 'react'
import { Zap, Plus, Trash2 } from './Icons'
import { format, subDays, eachDayOfInterval } from 'date-fns'

// X Icon (Close)
const X = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

// Popular habit emojis
const EMOJI_OPTIONS = [
  '💻', '📚', '🏃', '🧘', '🎨', '✍️', '🎵', '🎮', '🍎', '💪',
  '🧠', '☕', '🌱', '📝', '🎯', '⚡', '🔥', '✨', '🚀', '🎓',
  '🏋️', '🧑‍💻', '📖', '🎸', '🎹', '🎤', '📷', '🎬', '🖌️', '🧑‍🍳',
  '🌟', '💡', '🎪', '🏆', '🎁', '🌈', '🦋', '🌺', '🌻', '🌙'
]

function HabitTracker({ userId }) {
  const [habits, setHabits] = useState([])
  const [habitLogs, setHabitLogs] = useState({})
  const [showAddHabit, setShowAddHabit] = useState(false)
  const [newHabitName, setNewHabitName] = useState('')
  const [selectedEmoji, setSelectedEmoji] = useState('🎯')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  useEffect(() => {
    loadHabits()
    loadHabitLogs()
  }, [userId])

  const loadHabits = () => {
    const stored = localStorage.getItem(`habits-${userId}`)
    if (stored) {
      setHabits(JSON.parse(stored))
    }
  }

  const loadHabitLogs = () => {
    const stored = localStorage.getItem(`habit-logs-${userId}`)
    if (stored) {
      setHabitLogs(JSON.parse(stored))
    }
  }

  const saveHabits = (newHabits) => {
    localStorage.setItem(`habits-${userId}`, JSON.stringify(newHabits))
    setHabits(newHabits)
  }

  const saveHabitLogs = (newLogs) => {
    localStorage.setItem(`habit-logs-${userId}`, JSON.stringify(newLogs))
    setHabitLogs(newLogs)
  }

  const addHabit = () => {
    if (!newHabitName.trim()) return
    
    const newHabit = {
      id: Date.now().toString(),
      name: newHabitName.trim(),
      emoji: selectedEmoji,
      createdAt: new Date().toISOString()
    }
    
    saveHabits([...habits, newHabit])
    setNewHabitName('')
    setSelectedEmoji('🎯')
    setShowAddHabit(false)
    setShowEmojiPicker(false)
  }

  const deleteHabit = (habitId) => {
    if (confirm('Are you sure you want to delete this habit?')) {
      saveHabits(habits.filter(h => h.id !== habitId))
      
      // Remove logs for this habit
      const newLogs = { ...habitLogs }
      Object.keys(newLogs).forEach(date => {
        delete newLogs[date]?.[habitId]
      })
      saveHabitLogs(newLogs)
    }
  }

  const toggleHabit = (habitId, date) => {
    const newLogs = { ...habitLogs }
    if (!newLogs[date]) newLogs[date] = {}
    newLogs[date][habitId] = !newLogs[date][habitId]
    saveHabitLogs(newLogs)
  }

  const getHabitStreak = (habitId) => {
    let streak = 0
    const today = new Date()
    
    for (let i = 0; i < 365; i++) {
      const date = format(subDays(today, i), 'yyyy-MM-dd')
      if (habitLogs[date]?.[habitId]) {
        streak++
      } else {
        break
      }
    }
    
    return streak
  }

  const getLast7Days = () => {
    return eachDayOfInterval({
      start: subDays(new Date(), 6),
      end: new Date()
    })
  }

  const last7Days = getLast7Days()
  const today = format(new Date(), 'yyyy-MM-dd')

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-white/30 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-2 bg-yellow-500/20 rounded-xl">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Daily Habits</h3>
            <p className="text-xs sm:text-sm text-purple-200/70">Build consistency</p>
          </div>
        </div>
        <button
          onClick={() => {
            setShowAddHabit(!showAddHabit)
            if (showAddHabit) setShowEmojiPicker(false)
          }}
          className={`p-2 sm:p-2.5 rounded-xl transition-all ${
            showAddHabit 
              ? 'bg-red-500/20 hover:bg-red-500/30 border border-red-400/30' 
              : 'bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/30'
          }`}
        >
          {showAddHabit ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
          ) : (
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          )}
        </button>
      </div>

      {/* Add Habit Form */}
      {showAddHabit && (
        <div className="mb-4 sm:mb-6 p-4 bg-white/5 rounded-xl border border-white/10 animate-slide-down">
          <label className="text-white font-medium mb-2 block text-sm sm:text-base">New Habit</label>
          
          {/* Emoji Selector */}
          <div className="mb-3">
            <label className="text-white/70 text-xs sm:text-sm mb-2 block">Choose an emoji</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center text-2xl sm:text-3xl transition-all border-2 border-white/30 hover:border-purple-400"
              >
                {selectedEmoji}
              </button>
              <div className="text-white/50 text-xs sm:text-sm">
                Click to pick emoji
              </div>
            </div>
            
            {/* Emoji Picker Grid */}
            {showEmojiPicker && (
              <div className="mt-3 p-3 bg-white/10 rounded-xl border border-white/20 max-h-48 overflow-y-auto animate-slide-down">
                <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 sm:gap-2">
                  {EMOJI_OPTIONS.map((emoji, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setSelectedEmoji(emoji)
                        setShowEmojiPicker(false)
                      }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-xl sm:text-2xl transition-all hover:bg-white/20 ${
                        selectedEmoji === emoji ? 'bg-purple-500/40 ring-2 ring-purple-400' : 'bg-white/5'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Habit Name Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addHabit()}
              placeholder="e.g., Code 1hr, Read docs, Exercise"
              className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white/20 border border-white/30 text-white text-sm sm:text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={addHabit}
              disabled={!newHabitName.trim()}
              className="px-3 sm:px-4 py-2 sm:py-2.5 bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {/* Habits List */}
      {habits.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <div className="text-4xl sm:text-5xl mb-3">🎯</div>
          <p className="text-white/60 text-sm sm:text-base mb-2">No habits yet</p>
          <p className="text-white/40 text-xs sm:text-sm">Click the + button to add your first habit!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {habits.map(habit => {
            const streak = getHabitStreak(habit.id)
            const completedToday = habitLogs[today]?.[habit.id]
            const completedCount = last7Days.filter(day => 
              habitLogs[format(day, 'yyyy-MM-dd')]?.[habit.id]
            ).length
            
            return (
              <div 
                key={habit.id} 
                className="group bg-white/5 hover:bg-white/10 rounded-xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Habit Header */}
                <div className="flex items-start gap-2 sm:gap-3 mb-3">
                  <input
                    type="checkbox"
                    checked={completedToday || false}
                    onChange={() => toggleHabit(habit.id, today)}
                    className="mt-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white/20 border-2 border-white/30 text-green-500 focus:ring-2 focus:ring-green-400 cursor-pointer hover:border-green-400 transition-all flex-shrink-0"
                  />
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{habit.emoji || '🎯'}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-white font-semibold text-sm sm:text-base transition-all ${
                        completedToday ? 'line-through text-white/60' : ''
                      }`}>
                        {habit.name}
                      </p>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        {streak > 0 ? (
                          <span className="text-xs sm:text-sm text-orange-300 font-medium flex items-center gap-1">
                            🔥 {streak} day{streak !== 1 ? 's' : ''}
                          </span>
                        ) : (
                          <span className="text-xs sm:text-sm text-white/40">⭕ Start your streak!</span>
                        )}
                        <span className="text-xs sm:text-sm text-purple-300">
                          {completedCount}/7 this week
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="p-1.5 sm:p-2 hover:bg-red-500/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex-shrink-0"
                    title="Delete habit"
                  >
                    <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
                  </button>
                </div>

                {/* Last 7 Days Visualization */}
                <div className="flex gap-1 sm:gap-1.5">
                  {last7Days.map((day, index) => {
                    const dateStr = format(day, 'yyyy-MM-dd')
                    const completed = habitLogs[dateStr]?.[habit.id]
                    const dayName = format(day, 'EEE')
                    
                    return (
                      <div key={dateStr} className="flex-1 group/day">
                        <div
                          className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                            completed 
                              ? 'bg-green-500 hover:bg-green-400 shadow-sm shadow-green-500/50' 
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                          onClick={() => toggleHabit(habit.id, dateStr)}
                          title={`${dayName}, ${format(day, 'MMM dd')}: ${completed ? 'Done ✓' : 'Not done'}`}
                        />
                        <div className="text-[9px] sm:text-[10px] text-white/30 text-center mt-1 hidden sm:block">
                          {dayName[0]}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Progress Bar */}
                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
                    <span>Weekly Progress</span>
                    <span className="font-semibold">{Math.round(completedCount/7*100)}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                      style={{ width: `${(completedCount/7)*100}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Info Card */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-500/10 border border-blue-400/20 rounded-xl backdrop-blur-sm">
        <div className="flex items-start gap-2">
          <span className="text-base sm:text-lg flex-shrink-0">💡</span>
          <p className="text-blue-100 text-xs sm:text-sm">
            <strong>Tip:</strong> Pick an emoji that represents your habit! Click the bars to toggle past days and build streaks.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default HabitTracker