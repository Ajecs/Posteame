import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCj8GE444Vgm3tSYz5R8xpuMKZChyonM9k',
	authDomain: 'lanotione.firebaseapp.com',
	projectId: 'lanotione',
	storageBucket: 'lanotione.firebasestorage.app',
	messagingSenderId: '434031687516',
	appId: '1:434031687516:web:45f906d195f6348e497399',
}

const app = initializeApp(firebaseConfig)

/* 
  Se exportan la bases de datos, el servicio de autenticación y el proveedor de Google
*/
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
