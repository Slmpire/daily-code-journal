import { Zap } from './Icons'

function StreakHistory({ streakHistory }) {
  if (streakHistory.length === 0) return null

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-6">
      <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
        <Zap /> All Streaks
      </h3>
      <div className="space-y-2">
        {streakHistory.map((streak, idx) => (
          <div key={idx} className="bg-white/10 rounded-lg p-3 flex justify-between items-center">
            <span className="text-white">
              {streak.start} to {streak.end}
            </span>
            <span className="text-purple-300 font-bold">{streak.count} days 🔥</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StreakHistory