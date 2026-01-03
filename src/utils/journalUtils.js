export function calculateStreaks(entries) {
  const dates = Object.keys(entries).sort()
  if (dates.length === 0) return []

  const streaks = []
  let currentStreak = { start: dates[0], end: dates[0], count: 1 }

  for (let i = 1; i < dates.length; i++) {
    const prevDate = new Date(dates[i - 1])
    const currDate = new Date(dates[i])
    
    const diffDays = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24))

    if (diffDays === 1) {
      currentStreak.end = dates[i]
      currentStreak.count++
    } else if (diffDays > 1) {
      streaks.push({ ...currentStreak })
      currentStreak = { start: dates[i], end: dates[i], count: 1 }
    }
  }

  streaks.push(currentStreak)
  return streaks
}

export function getCurrentStreak(streakHistory) {
  if (streakHistory.length === 0) return 0
  
  const lastStreak = streakHistory[streakHistory.length - 1]
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = yesterday.toISOString().split('T')[0]

  if (lastStreak.end === today || lastStreak.end === yesterdayStr) {
    return lastStreak.count
  }
  
  return 0
}

export function exportEntryToMarkdown(date, entry, profile) {
  const dateObj = new Date(date)
  const formatted = dateObj.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const markdown = `# ${formatted}

**Author:** ${profile.name} (@${profile.nickname})
**Tasks Completed:** ${entry.tasksCompleted ? '✅ Yes' : '❌ No'}

## What I worked on
${entry.worked || 'Nothing recorded'}

## What I learned
${entry.learned || 'Nothing recorded'}

## Challenges
${entry.challenges || 'None'}

## Tomorrow's goals
${entry.goals || 'Not set'}

## Mood: ${entry.mood}
`

  const blob = new Blob([markdown], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${date}.md`
  a.click()
  URL.revokeObjectURL(url)
}

export function printSingleEntry(date, entry, profile) {
  const dateObj = new Date(date)
  const formatted = dateObj.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Journal Entry - ${formatted}</title>
      <style>
        body {
          font-family: 'Georgia', serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 3px solid #3498db;
          padding-bottom: 10px;
        }
        h2 {
          color: #34495e;
          margin-top: 30px;
          margin-bottom: 10px;
        }
        .author {
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 30px;
        }
        .status {
          display: inline-block;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .completed { background: #d4edda; color: #155724; }
        .incomplete { background: #f8d7da; color: #721c24; }
        .content {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          white-space: pre-wrap;
        }
        .mood {
          font-size: 2em;
          text-align: center;
          margin: 20px 0;
        }
        @media print {
          body { margin: 20px; }
        }
      </style>
    </head>
    <body>
      <h1>${formatted}</h1>
      <p class="author">Author: ${profile.name} (@${profile.nickname})</p>
      <div class="status ${entry.tasksCompleted ? 'completed' : 'incomplete'}">
        ${entry.tasksCompleted ? '✅ Tasks Completed' : '❌ Tasks Not Completed'}
      </div>
      
      <h2>What I worked on</h2>
      <div class="content">${entry.worked || 'Nothing recorded'}</div>
      
      <h2>What I learned</h2>
      <div class="content">${entry.learned || 'Nothing recorded'}</div>
      
      <h2>Challenges</h2>
      <div class="content">${entry.challenges || 'None'}</div>
      
      <h2>Tomorrow's goals</h2>
      <div class="content">${entry.goals || 'Not set'}</div>
      
      <div class="mood">Mood: ${entry.mood}</div>
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.print()
}

export function printAllEntries(entries, profile) {
  const allEntries = Object.keys(entries).sort()
  if (allEntries.length === 0) {
    alert('No entries to export')
    return
  }

  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${profile.name}'s Coding Journal</title>
      <style>
        body {
          font-family: 'Georgia', serif;
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        h1 { color: #2c3e50; text-align: center; margin-bottom: 40px; }
        .entry {
          page-break-inside: avoid;
          margin-bottom: 50px;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
        }
        .entry-date {
          color: #3498db;
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .status {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.9em;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .completed { background: #d4edda; color: #155724; }
        .incomplete { background: #f8d7da; color: #721c24; }
        h3 { color: #34495e; margin-top: 15px; margin-bottom: 5px; }
        .content { margin-bottom: 15px; white-space: pre-wrap; }
        .mood { font-size: 1.5em; }
        @media print {
          body { margin: 20px; }
          .entry { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <h1>📔 ${profile.name}'s Coding Journal</h1>
  `

  allEntries.forEach(dateStr => {
    const entry = entries[dateStr]
    const date = new Date(dateStr)
    const formatted = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    html += `
      <div class="entry">
        <div class="entry-date">${formatted}</div>
        <div class="status ${entry.tasksCompleted ? 'completed' : 'incomplete'}">
          ${entry.tasksCompleted ? '✅ Tasks Completed' : '❌ Tasks Not Completed'}
        </div>
        
        <h3>What I worked on</h3>
        <div class="content">${entry.worked || 'Nothing recorded'}</div>
        
        <h3>What I learned</h3>
        <div class="content">${entry.learned || 'Nothing recorded'}</div>
        
        <h3>Challenges</h3>
        <div class="content">${entry.challenges || 'None'}</div>
        
        <h3>Tomorrow's goals</h3>
        <div class="content">${entry.goals || 'Not set'}</div>
        
        <div class="mood">Mood: ${entry.mood}</div>
      </div>
    `
  })

  html += `
    </body>
    </html>
  `

  const printWindow = window.open('', '_blank')
  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.print()
}