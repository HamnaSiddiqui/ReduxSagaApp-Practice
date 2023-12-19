import {Messaging} from 'react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await Messaging().requestUserPermission();
  const enabled =
    authStatus === Messaging.authStatus.AUTHORIZED ||
    authStatus === Messaging.authStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization Status: ', authStatus);
  }
}

async function registerForPushNotification() {
  const token = await Messaging().getToken();
  console.log('Push Notification Token: ', token);
}

Messaging().onMessage(async remoteMessage => {
  console.log('Message recieved!', remoteMessage);
});

Messaging().onNotification(notification => {
  console.log('Notification recieved!', notification);
});

Messaging().onNotificationOpened(notificationOpened => {
  console.log('Notification Opened!', notificationOpened);
});
