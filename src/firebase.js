import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCZJXHtgXnWBJViZx17wydas9XWUhxFUr8',

  authDomain: 'resto-app-b4a6a.firebaseapp.com',

  databaseURL:
    'https://resto-app-b4a6a-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'resto-app-b4a6a',

  storageBucket: 'resto-app-b4a6a.appspot.com',

  messagingSenderId: '829620356057',

  appId: '1:829620356057:web:e2fe691812dbe80c404fc8'
}

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const storage = getStorage(app)

export { app, db, storage }
