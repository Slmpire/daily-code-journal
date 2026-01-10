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
    sum + (entry.dailyGoals?.filter(g => g.completed).length || 0), 0
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
    if (count === 0) return 'bg-white/5 hover:bg-white/10'
    if (tasksCompleted) return 'bg-green-500 hover:bg-green-400'
    return 'bg-purple-500/70 hover:bg-purple-500'
  }

  // Calculate longest streak
  const calculateLongestStreak = () => {
    const sortedDates = Object.keys(entries).sort()
    let longest = 0
    let current = 1
    
    for (let i = 1; i < sortedDates.length; i++) {
      const prevDate = new Date(sortedDates[i - 1])
      const currDate = new Date(sortedDates[i])
      const diffDays = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24))
      
      if (diffDays === 1) {
        current++
      } else {
        longest = Math.max(longest, current)
        current = 1
      }
    }
    return Math.max(longest, current)
  }

  const longestStreak = calculateLongestStreak()

  return (
    <div className="space-y-6">
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Streak */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl group-hover:bg-purple-400/20 transition-all"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-purple-500/20 rounded-xl">
                <Zap className="w-5 h-5 text-purple-300" />
              </div>
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Streak</span>
            </div>
            <div className="text-4xl font-bold text-white mb-1">{currentStreak}</div>
            <div className="text-sm text-purple-200/70">days in a row 🔥</div>
          </div>
        </div>

        {/* This Week */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <Calendar className="w-5 h-5 text-blue-300" />
              </div>
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">This Week</span>
            </div>
            <div className="text-4xl font-bold text-white mb-1">{thisWeekEntries}<span className="text-2xl text-white/50">/7</span></div>
            <div className="text-sm text-blue-200/70">entries logged</div>
          </div>
        </div>

        {/* Goals Completed */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 hover:border-green-400/50 transition-all hover:shadow-xl hover:shadow-green-500/20 hover:scale-105">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/10 rounded-full blur-2xl group-hover:bg-green-400/20 transition-all"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-green-500/20 rounded-xl">
                <Target className="w-5 h-5 text-green-300" />
              </div>
              <span className="text-xs font-semibold text-green-300 uppercase tracking-wider">Goals</span>
            </div>
            <div className="text-4xl font-bold text-white mb-1">{totalGoalsCompleted}</div>
            <div className="text-sm text-green-200/70">completed ✓</div>
          </div>
        </div>

        {/* Average Mood */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30 hover:border-pink-400/50 transition-all hover:shadow-xl hover:shadow-pink-500/20 hover:scale-105">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-400/10 rounded-full blur-2xl group-hover:bg-pink-400/20 transition-all"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-pink-500/20 rounded-xl">
                <TrendingUp className="w-5 h-5 text-pink-300" />
              </div>
              <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">Avg Mood</span>
            </div>
            <div className="text-4xl font-bold text-white mb-1">{avgMoodScore()}<span className="text-2xl text-white/50">/8</span></div>
            <div className="text-sm text-pink-200/70">feeling good 😊</div>
          </div>
        </div>
      </div>

      {/* Yearly Activity Heatmap */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-xl">
              <Calendar className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Your Coding Year</h3>
              <p className="text-sm text-purple-200/70">Activity heatmap for {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="inline-flex flex-col gap-1.5 min-w-full">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex gap-1.5">
                {week.map((day, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`w-3.5 h-3.5 rounded transition-all cursor-pointer ${getHeatmapColor(day.count, day.tasksCompleted)}`}
                    title={`${day.date}: ${day.count ? day.mood || '📝 Entry' : 'No entry'}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 mt-6 text-xs text-white/60 flex-wrap">
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1.5">
              <div className="w-3.5 h-3.5 bg-white/5 rounded" />
              <div className="w-3.5 h-3.5 bg-purple-500/30 rounded" />
              <div className="w-3.5 h-3.5 bg-purple-500/70 rounded" />
              <div className="w-3.5 h-3.5 bg-green-500 rounded" />
            </div>
            <span>More</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-green-500 rounded" />
            <span>= Tasks completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-purple-500/70 rounded" />
            <span>= Entry logged</span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Summary Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 rounded-xl">
              <Award className="w-6 h-6 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-white">Quick Summary</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-white/60 text-sm mb-1">Total Entries</p>
              <p className="text-white font-bold text-2xl">{totalEntries}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-white/60 text-sm mb-1">Longest Streak</p>
              <p className="text-white font-bold text-2xl">{longestStreak} days</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-white/60 text-sm mb-1">Completion Rate</p>
              <p className="text-white font-bold text-2xl">{completionScore}%</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-white/60 text-sm mb-1">Goals Done</p>
              <p className="text-white font-bold text-2xl">{totalGoalsCompleted}</p>
            </div>
          </div>
        </div>

        {/* Motivational Card */}
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">🎯</div>
            <h3 className="text-xl font-bold text-white">Keep Going!</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl">🔥</div>
              <div>
                <p className="text-white font-semibold text-sm">Current Streak</p>
                <p className="text-purple-200/70 text-xs">{currentStreak} days - Keep it up!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl">⭐</div>
              <div>
                <p className="text-white font-semibold text-sm">Next Milestone</p>
                <p className="text-purple-200/70 text-xs">
                  {currentStreak < 7 ? '7 day streak' : 
                   currentStreak < 30 ? '30 day streak' : 
                   currentStreak < 100 ? '100 day streak' : 
                   '365 day streak'} - You're on fire! 🚀
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl">📈</div>
              <div>
                <p className="text-white font-semibold text-sm">This Week Progress</p>
                <p className="text-purple-200/70 text-xs">{thisWeekEntries}/7 entries ({Math.round(thisWeekEntries/7*100)}%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard