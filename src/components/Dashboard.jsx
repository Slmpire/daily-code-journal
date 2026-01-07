import { Calendar, TrendingUp, Award, Target, Zap } from './Icons'
import { format, subDays, eachDayOfInterval, startOfYear } from 'date-fns'

function Dashboard({ entries, currentStreak, completionScore }) {
  // Calculate stats
  const totalEntries = Object.keys(entries).length
  const last7Days = eachDayOfInterval({
    start: subDays(new Date(), 6),
    end: new Date()
  })
  
  const thisWeekEntries = last7Days.filter(day => 
    entries[format(day, 'yyyy-MM-dd')]
  ).length

  const totalGoalsCompleted = Object.values(entries).reduce((sum, entry) => 
    sum + (entry.goals?.filter(g => g.completed).length || 0), 0
  )

  const avgMoodScore = () => {
    const moodScores = {
      '😴': 1, '😤': 2, '🤔': 3, '😅': 4, 
      '😊': 5, '💪': 6, '🔥': 7, '🎉': 8
    }
    const scores = Object.values(entries).map(e => moodScores[e.mood] || 5)
    return scores.length ? (scores.reduce((a, b) => a + b) / scores.length).toFixed(1) : 5
  }

  // Generate heatmap data
  const generateHeatmapData = () => {
    const startDate = startOfYear(new Date())
    const days = eachDayOfInterval({ start: startDate, end: new Date() })
    
    return days.map(day => {
      const dateStr = format(day, 'yyyy-MM-dd')
      const entry = entries[dateStr]
      return {
        date: dateStr,
        count: entry ? 1 : 0,
        mood: entry?.mood || null,
        tasksCompleted: entry?.tasksCompleted || false
      }
    })
  }

  const heatmapData = generateHeatmapData()

  // Group by weeks for display
  const weeks = []
  for (let i = 0; i < heatmapData.length; i += 7) {
    weeks.push(heatmapData.slice(i, i + 7))
  }

  const getHeatmapColor = (count, tasksCompleted) => {
    if (count === 0) return 'bg-white/5'
    if (tasksCompleted) return 'bg-green-500'
    return 'bg-purple-500/70'
  }

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 text-purple-200 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-xs">Current Streak</span>
          </div>
          <div className="text-2xl font-bold text-white">{currentStreak} days</div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 text-purple-200 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">This Week</span>
          </div>
          <div className="text-2xl font-bold text-white">{thisWeekEntries}/7</div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 text-purple-200 mb-1">
            <Target className="w-4 h-4" />
            <span className="text-xs">Goals Done</span>
          </div>
          <div className="text-2xl font-bold text-white">{totalGoalsCompleted}</div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 text-purple-200 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">Avg Mood</span>
          </div>
          <div className="text-2xl font-bold text-white">{avgMoodScore()}/8</div>
        </div>
      </div>

      {/* Streak Calendar Heatmap */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Your Coding Year
        </h3>
        
        <div className="overflow-x-auto">
          <div className="inline-flex flex-col gap-1 min-w-full">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex gap-1">
                {week.map((day, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`w-3 h-3 rounded-sm ${getHeatmapColor(day.count, day.tasksCompleted)} transition-all hover:scale-150 cursor-pointer`}
                    title={`${day.date}: ${day.count ? day.mood || '📝 Entry' : 'No entry'}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 text-xs text-white/60">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-white/5 rounded-sm" />
            <div className="w-3 h-3 bg-purple-500/30 rounded-sm" />
            <div className="w-3 h-3 bg-purple-500/70 rounded-sm" />
            <div className="w-3 h-3 bg-green-500 rounded-sm" />
          </div>
          <span>More</span>
          <span className="ml-4">🟢 = Tasks completed</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-white font-semibold mb-4">Quick Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-white/60">Total Entries</p>
            <p className="text-white font-semibold text-lg">{totalEntries}</p>
          </div>
          <div>
            <p className="text-white/60">Longest Streak</p>
            <p className="text-white font-semibold text-lg">{currentStreak} days</p>
          </div>
          <div>
            <p className="text-white/60">Completion Rate</p>
            <p className="text-white font-semibold text-lg">{completionScore}%</p>
          </div>
          <div>
            <p className="text-white/60">Days Missed</p>
            <p className="text-white font-semibold text-lg">
              {Math.floor((new Date() - new Date(Object.keys(entries).sort()[0])) / (1000 * 60 * 60 * 24)) - totalEntries}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard