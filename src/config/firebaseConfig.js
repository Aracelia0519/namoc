import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyB03XsQyiYpOp7mC8vfLstpfkKFZMM9QBg',
    authDomain: 'edu-platform-cb934.firebaseapp.com',
    projectId: 'edu-platform-cb934',
    storageBucket: 'edu-platform-cb934.firebasestorage.app',
    messagingSenderId: '589323055756',
    appId: '1:589323055756:web:cddbbe9db0b93e0e7e01a9',
    measurementId: 'G-36XQRWPWPD',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)