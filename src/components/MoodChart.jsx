import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { format, subDays } from 'date-fns'

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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-purple-400/30 rounded-lg p-3 shadow-lg">
          <p className="text-white font-semibold">{payload[0].payload.fullDate}</p>
          <p className="text-purple-300">
            Mood: {payload[0].payload.mood} (Score: {payload[0].value})
          </p>
        </div>
      )
    }
    return null
  }

  if (last30Days.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-white font-semibold mb-4">Mood Trends</h3>
        <p className="text-white/60 text-center py-8">
          Add more entries to see your mood trends
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-white font-semibold mb-4">Mood Trends (Last 30 Days)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={last30Days}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="date" 
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.5)"
            domain={[0, 8]}
            ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
            style={{ fontSize: '12px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#a855f7" 
            strokeWidth={3}
            dot={{ fill: '#ec4899', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex items-center justify-between text-xs text-white/60">
        <span>😴 Low</span>
        <span>😊 Neutral</span>
        <span>🎉 High</span>
      </div>
    </div>
  )
}

export default MoodChart