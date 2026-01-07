import { useState, useEffect } from 'react'
import { Zap, Plus, Trash2 } from './Icons'
import { format, subDays, eachDayOfInterval } from 'date-fns'

function HabitTracker({ userId }) {
  const [habits, setHabits] = useState([])
  const [habitLogs, setHabitLogs] = useState({})
  const [showAddHabit, setShowAddHabit] = useState(false)
  const [newHabitName, setNewHabitName] = useState('')

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
      createdAt: new Date().toISOString()
    }
    
    saveHabits([...habits, newHabit])
    setNewHabitName('')
    setShowAddHabit(false)
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
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Daily Habits
        </h3>
        <button
          onClick={() => setShowAddHabit(!showAddHabit)}
          className="p-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-all"
        >
          <Plus />
        </button>
      </div>

      {showAddHabit && (
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addHabit()}
            placeholder="New habit name (e.g., Code 1hr)"
            className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            autoFocus
          />
          <button
            onClick={addHabit}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all"
          >
            Add
          </button>
          <button
            onClick={() => setShowAddHabit(false)}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
          >
            Cancel
          </button>
        </div>
      )}

      {habits.length === 0 ? (
        <p className="text-white/60 text-center py-8">
          No habits yet. Click + to add your first habit!
        </p>
      ) : (
        <div className="space-y-3">
          {habits.map(habit => {
            const streak = getHabitStreak(habit.id)
            const completedToday = habitLogs[today]?.[habit.id]
            
            return (
              <div key={habit.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={completedToday || false}
                      onChange={() => toggleHabit(habit.id, today)}
                      className="w-6 h-6 rounded bg-white/20 border-white/30 text-purple-500 focus:ring-2 focus:ring-purple-400"
                    />
                    <div className="flex-1">
                      <p className="text-white font-medium">{habit.name}</p>
                      <p className="text-white/60 text-xs">
                        {streak > 0 ? `🔥 ${streak} day streak` : '⭕ No streak yet'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>

                {/* Last 7 days visualization */}
                <div className="flex gap-1">
                  {last7Days.map(day => {
                    const dateStr = format(day, 'yyyy-MM-dd')
                    const completed = habitLogs[dateStr]?.[habit.id]
                    return (
                      <div
                        key={dateStr}
                        className={`flex-1 h-2 rounded-sm ${
                          completed ? 'bg-green-500' : 'bg-white/10'
                        }`}
                        title={`${format(day, 'MMM dd')}: ${completed ? 'Done' : 'Missed'}`}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-4 p-3 bg-blue-500/20 border border-blue-400/30 rounded-lg">
        <p className="text-blue-100 text-xs">
          💡 <strong>Tip:</strong> Check off habits daily to build streaks. Consistency is key!
        </p>
      </div>
    </div>
  )
}

export default HabitTracker