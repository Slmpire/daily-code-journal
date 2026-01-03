import { useState, useEffect } from 'react'
import { 
  calculateStreaks, 
  getCurrentStreak as getStreak,
  exportEntryToMarkdown,
  printSingleEntry,
  printAllEntries
} from '../utils/journalUtils'

export function useJournalData(userEmail, userProfile) {
  const [entries, setEntries] = useState({})
  const [streakHistory, setStreakHistory] = useState([])
  const [currentEntry, setCurrentEntry] = useState({
    worked: '',
    learned: '',
    challenges: '',
    goals: '',
    mood: '😊',
    tasksCompleted: false
  })
  const [selectedDate, setSelectedDate] = useState('')

  useEffect(() => {
    if (userEmail) {
      setSelectedDate(getTodayDate())
      loadUserData()
    }
  }, [userEmail])

  useEffect(() => {
    if (selectedDate && entries[selectedDate]) {
      setCurrentEntry(entries[selectedDate])
    } else if (selectedDate) {
      setCurrentEntry({
        worked: '',
        learned: '',
        challenges: '',
        goals: '',
        mood: '😊',
        tasksCompleted: false
      })
    }
  }, [selectedDate, entries])

  const getTodayDate = () => new Date().toISOString().split('T')[0]

  const loadUserData = () => {
    const entriesData = localStorage.getItem(`journal-entries-${userEmail}`)
    if (entriesData) {
      const loadedEntries = JSON.parse(entriesData)
      setEntries(loadedEntries)
      updateStreak(loadedEntries)
    }
  }

  const updateStreak = (updatedEntries) => {
    const streaks = calculateStreaks(updatedEntries)
    setStreakHistory(streaks)
    localStorage.setItem(`streak-history-${userEmail}`, JSON.stringify(streaks))
  }

  const saveEntry = () => {
    if (!selectedDate) return

    const updated = {
      ...entries,
      [selectedDate]: currentEntry
    }

    localStorage.setItem(`journal-entries-${userEmail}`, JSON.stringify(updated))
    setEntries(updated)
    updateStreak(updated)
    
    alert('✅ Entry saved!')
  }

  const getCurrentStreak = () => {
    return getStreak(streakHistory)
  }

  const getCompletionScore = () => {
    const entriesArray = Object.values(entries)
    if (entriesArray.length === 0) return 0
    const completed = entriesArray.filter(e => e.tasksCompleted).length
    return Math.round((completed / entriesArray.length) * 100)
  }

  const exportToMarkdown = () => {
    if (!selectedDate || !entries[selectedDate]) {
      alert('No entry for this date')
      return
    }
    exportEntryToMarkdown(selectedDate, entries[selectedDate], userProfile)
  }

  const printEntry = () => {
    if (!selectedDate || !entries[selectedDate]) {
      alert('No entry for this date')
      return
    }
    printSingleEntry(selectedDate, entries[selectedDate], userProfile)
  }

  const exportAllToPDF = () => {
    printAllEntries(entries, userProfile)
  }

  return {
    entries,
    streakHistory,
    currentEntry,
    setCurrentEntry,
    selectedDate,
    setSelectedDate,
    saveEntry,
    getCurrentStreak,
    getCompletionScore,
    exportToMarkdown,
    printEntry,
    exportAllToPDF
  }
}