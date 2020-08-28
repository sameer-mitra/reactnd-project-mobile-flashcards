import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'flashcards:notification';

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync());
}

export function createNotification () {
  return {
    title: 'Study Reminder',
    body: 'You still have time to study today 😜',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync();

          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(21);
          tomorrow.setMinutes(40);

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tomorrow,
              repeat: 'day',
            }
          )

          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
        }
      })
    }
  })
}
