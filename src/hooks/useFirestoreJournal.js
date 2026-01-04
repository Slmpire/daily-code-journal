import { useState, useEffect } from 'react'
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs,
  query,
  orderBy 
} from 'firebase/firestore'
import { db } from '../firebase'

export function useFirestoreJournal(userId) {
  const [entries, setEntries] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      loadEntries()
    }
  }, [userId])

  const loadEntries = async () => {
    if (!userId) return

    try {
      // Load entries from Firestore
      const entriesRef = collection(db, 'users', userId, 'entries')
      const q = query(entriesRef, orderBy('date', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const loadedEntries = {}
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        loadedEntries[data.date] = {
          worked: data.worked || '',
          learned: data.learned || '',
          challenges: data.challenges || '',
          goals: data.goals || '',
          mood: data.mood || '😊',
          tasksCompleted: data.tasksCompleted || false
        }
      })

      setEntries(loadedEntries)

      // Migrate old localStorage data if exists
      await migrateLocalStorageData(loadedEntries)
    } catch (error) {
      console.error('Error loading entries:', error)
    } finally {
      setLoading(false)
    }
  }

  const migrateLocalStorageData = async (existingEntries) => {
    try {
      // Check for old localStorage data
      const oldData = localStorage.getItem(`journal-entries-${userId}`)
      
      if (oldData) {
        const oldEntries = JSON.parse(oldData)
        let migratedCount = 0

        // Migrate each entry that doesn't exist in Firestore
        for (const [date, entry] of Object.entries(oldEntries)) {
          if (!existingEntries[date]) {
            await saveEntry(date, entry)
            existingEntries[date] = entry
            migratedCount++
          }
        }

        if (migratedCount > 0) {
          console.log(`✅ Migrated ${migratedCount} entries from localStorage to Firestore`)
          setEntries(existingEntries)
          
          // Clear old localStorage data after successful migration
          localStorage.removeItem(`journal-entries-${userId}`)
          localStorage.removeItem(`streak-history-${userId}`)
        }
      }
    } catch (error) {
      console.error('Error migrating data:', error)
    }
  }

  const saveEntry = async (date, entry) => {
    if (!userId || !date) return

    try {
      const entryRef = doc(db, 'users', userId, 'entries', date)
      await setDoc(entryRef, {
        date,
        worked: entry.worked || '',
        learned: entry.learned || '',
        challenges: entry.challenges || '',
        goals: entry.goals || '',
        mood: entry.mood || '😊',
        tasksCompleted: entry.tasksCompleted || false,
        updatedAt: new Date().toISOString()
      })

      // Update local state
      setEntries(prev => ({
        ...prev,
        [date]: entry
      }))

      return { success: true }
    } catch (error) {
      console.error('Error saving entry:', error)
      return { success: false, error: error.message }
    }
  }

  return { entries, loading, saveEntry, reloadEntries: loadEntries }
}