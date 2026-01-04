import { useState, useEffect } from 'react'
import { useFirestoreJournal } from './useFirestoreJournal'
import { 
  calculateStreaks, 
  getCurrentStreak as getStreak,
  exportEntryToMarkdown,
  printSingleEntry,
  printAllEntries
} from '../utils/journalUtils'

export function useJournalData(userId, userProfile) {
  const { entries, loading, saveEntry: saveToFirestore } = useFirestoreJournal(userId)
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
    setSelectedDate(getTodayDate())
  }, [])

  useEffect(() => {
    if (Object.keys(entries).length > 0) {
      updateStreak(entries)
    }
  }, [entries])

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

  const updateStreak = (updatedEntries) => {
    const streaks = calculateStreaks(updatedEntries)
    setStreakHistory(streaks)
  }

  const saveEntry = async () => {
    if (!selectedDate) return

    const result = await saveToFirestore(selectedDate, currentEntry)
    
    if (result.success) {
      alert('✅ Entry saved to cloud!')
    } else {
      alert('❌ Failed to save: ' + result.error)
    }
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
    loading,
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