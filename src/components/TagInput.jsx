import { useState } from 'react'

function TagInput({ tags = [], onTagsChange }) {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      const newTag = inputValue.trim().toLowerCase()
      if (!tags.includes(newTag)) {
        onTagsChange([...tags, newTag])
      }
      setInputValue('')
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      onTagsChange(tags.slice(0, -1))
    }
  }

  const removeTag = (tagToRemove) => {
    onTagsChange(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div>
      <label className="text-white font-medium mb-2 block">Tags</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm border border-purple-400/30"
          >
            #{tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="ml-1 hover:text-white"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add tags (press Enter)"
        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <p className="text-white/50 text-xs mt-1">
        Suggested: #react #debugging #learning #feature #bug #achievement
      </p>
    </div>
  )
}

export default TagInput