import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,

  authDomain: import.meta.env.VITE_AUTHDOMAIN,

  databaseURL: import.meta.env.VITE_DATABASEURL,

  projectId: import.meta.env.VITE_PROJECTID,

  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,

  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,

  appId: import.meta.env.VITE_APPID
}

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const storage = getStorage(app)

export { app, db, storage }
