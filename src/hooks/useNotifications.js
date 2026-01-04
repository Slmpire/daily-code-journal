import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export function useNotifications(userId) {
  const [notificationTime, setNotificationTime] = useState('18:00')
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  useEffect(() => {
    if (userId) {
      loadSettings()
    }
  }, [userId])

  useEffect(() => {
    if (notificationsEnabled) {
      scheduleNotification()
    }
  }, [notificationTime, notificationsEnabled])

  const loadSettings = async () => {
    try {
      const settingsDoc = await getDoc(doc(db, 'users', userId, 'settings', 'notifications'))
      if (settingsDoc.exists()) {
        const data = settingsDoc.data()
        setNotificationTime(data.time || '18:00')
        setNotificationsEnabled(data.enabled || false)
      }
    } catch (error) {
      console.error('Error loading notification settings:', error)
    }
  }

  const scheduleNotification = () => {
    const [hours, minutes] = notificationTime.split(':')
    const now = new Date()
    const scheduledTime = new Date()
    scheduledTime.setHours(parseInt(hours), parseInt(minutes), 0, 0)

    if (scheduledTime <= now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1)
    }

    const timeUntilNotification = scheduledTime - now

    setTimeout(() => {
      if (Notification.permission === 'granted') {
        new Notification('📔 Daily Code Journal Reminder', {
          body: "Time to log your coding day! Don't break the streak!",
          icon: '📔',
          badge: '🔥'
        })
      }
      scheduleNotification()
    }, timeUntilNotification)
  }

  const toggleNotifications = async () => {
    const newState = !notificationsEnabled

    if (newState) {
      if (Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission()
        if (permission !== 'granted') {
          alert('Please enable notifications in your browser settings')
          return
        }
      }
    }

    try {
      await setDoc(doc(db, 'users', userId, 'settings', 'notifications'), {
        enabled: newState,
        time: notificationTime
      })
      setNotificationsEnabled(newState)
    } catch (error) {
      console.error('Error saving notification settings:', error)
    }
  }

  const saveNotificationTime = async (time) => {
    try {
      await setDoc(doc(db, 'users', userId, 'settings', 'notifications'), {
        enabled: notificationsEnabled,
        time
      })
      setNotificationTime(time)
    } catch (error) {
      console.error('Error saving notification time:', error)
    }
  }

  return {
    notificationTime,
    notificationsEnabled,
    toggleNotifications,
    saveNotificationTime
  }
}