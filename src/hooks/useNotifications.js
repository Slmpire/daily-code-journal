import { useState, useEffect } from 'react'

export function useNotifications(userEmail) {
  const [notificationTime, setNotificationTime] = useState('18:00')
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  useEffect(() => {
    if (userEmail) {
      const notifTime = localStorage.getItem(`notification-time-${userEmail}`)
      if (notifTime) {
        setNotificationTime(notifTime)
      }

      const notifEnabled = localStorage.getItem(`notifications-enabled-${userEmail}`)
      if (notifEnabled === 'true') {
        setNotificationsEnabled(true)
      }
    }
  }, [userEmail])

  useEffect(() => {
    if (notificationsEnabled) {
      scheduleNotification()
    }
  }, [notificationTime, notificationsEnabled])

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
    if (!notificationsEnabled) {
      if (Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission()
        if (permission !== 'granted') {
          alert('Please enable notifications in your browser settings')
          return
        }
      }
      setNotificationsEnabled(true)
      localStorage.setItem(`notifications-enabled-${userEmail}`, 'true')
    } else {
      setNotificationsEnabled(false)
      localStorage.setItem(`notifications-enabled-${userEmail}`, 'false')
    }
  }

  const saveNotificationTime = (time) => {
    setNotificationTime(time)
    localStorage.setItem(`notification-time-${userEmail}`, time)
  }

  return {
    notificationTime,
    notificationsEnabled,
    toggleNotifications,
    saveNotificationTime
  }
}