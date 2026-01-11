import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { format, subDays } from 'date-fns'

// TrendingUp Icon
const TrendingUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
)

function MoodChart({ entries }) {
  const moodScores = {
    '😴': 1,
    '😤': 2,
    '🤔': 3,
    '😅': 4,
    '😊': 5,
    '💪': 6,
    '🔥': 7,
    '🎉': 8
  }

  // Get last 30 days of data
  const last30Days = []
  for (let i = 29; i >= 0; i--) {
    const date = subDays(new Date(), i)
    const dateStr = format(date, 'yyyy-MM-dd')
    const entry = entries[dateStr]
    
    if (entry && entry.mood) {
      last30Days.push({
        date: format(date, 'MMM dd'),
        fullDate: dateStr,
        mood: entry.mood,
        score: moodScores[entry.mood] || 5
      })
    }
  }

  // Calculate average mood
  const avgMood = last30Days.length > 0 
    ? (last30Days.reduce((sum, d) => sum + d.score, 0) / last30Days.length).toFixed(1)
    : '5.0'

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-purple-400/30 rounded-xl p-3 shadow-2xl backdrop-blur-sm">
          <p className="text-white font-semibold text-sm">{payload[0].payload.fullDate}</p>
          <p className="text-purple-300 text-sm mt-1">
            Mood: {payload[0].payload.mood} <span className="text-white/60">(Score: {payload[0].value})</span>
          </p>
        </div>
      )
    }
    return null
  }

  if (last30Days.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-pink-500/20 rounded-xl">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-pink-300" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Mood Trends</h3>
        </div>
        <div className="text-center py-8 sm:py-12">
          <div className="text-4xl sm:text-5xl mb-3">😊</div>
          <p className="text-white/60 text-sm sm:text-base">Add more entries to see your mood trends</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-white/30 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-2 bg-pink-500/20 rounded-xl">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-pink-300" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Mood Trends</h3>
            <p className="text-xs sm:text-sm text-purple-200/70">Last 30 days</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl sm:text-3xl font-bold text-white">{avgMood}</div>
          <div className="text-[10px] sm:text-xs text-purple-200/70 uppercase tracking-wider">Avg Score</div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={last30Days}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.5)"
              style={{ fontSize: '11px' }}
              tick={{ fill: 'rgba(255,255,255,0.6)' }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)"
              domain={[0, 8]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
              style={{ fontSize: '11px' }}
              tick={{ fill: 'rgba(255,255,255,0.6)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#ec4899" 
              strokeWidth={3}
              dot={{ fill: '#a855f7', r: 5, strokeWidth: 2, stroke: '#ec4899' }}
              activeDot={{ r: 7, fill: '#ec4899', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Mood Scale */}
      <div className="mt-4 sm:mt-5 flex items-center justify-between text-xs sm:text-sm px-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xl sm:text-2xl">😴</span>
          <span className="text-white/60">Low</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xl sm:text-2xl">😊</span>
          <span className="text-white/60">Neutral</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xl sm:text-2xl">🎉</span>
          <span className="text-white/60">High</span>
        </div>
      </div>

      {/* Mood Summary */}
      <div className="mt-4 p-3 sm:p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-purple-200/70">Data points:</span>
          <span className="text-white font-semibold">{last30Days.length} entries</span>
        </div>
      </div>
    </div>
  )
}

export default MoodChart