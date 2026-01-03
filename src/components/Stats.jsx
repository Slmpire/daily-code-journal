import { Zap, TrendingUp, Award } from './Icons'

function Stats({ currentStreak, totalEntries, completionScore }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="flex items-center gap-2 text-purple-200 mb-1">
          <div className="w-5 h-5"><Zap /></div>
          <span className="text-sm">Current Streak</span>
        </div>
        <div className="text-3xl font-bold text-white">{currentStreak} days</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="flex items-center gap-2 text-purple-200 mb-1">
          <div className="w-5 h-5"><TrendingUp /></div>
          <span className="text-sm">Total Entries</span>
        </div>
        <div className="text-3xl font-bold text-white">{totalEntries}</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="flex items-center gap-2 text-purple-200 mb-1">
          <div className="w-5 h-5"><Award /></div>
          <span className="text-sm">Completion Rate</span>
        </div>
        <div className="text-3xl font-bold text-white">{completionScore}%</div>
      </div>
    </div>
  )
}

export default Stats