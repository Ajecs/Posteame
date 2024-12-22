// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj8GE444Vgm3tSYz5R8xpuMKZChyonM9k',
  authDomain: 'lanotione.firebaseapp.com',
  projectId: 'lanotione',
  storageBucket: 'lanotione.firebasestorage.app',
  messagingSenderId: '434031687516',
  appId: '1:434031687516:web:45f906d195f6348e497399'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig),
  db = getFirestore(),
  colRef = collection(db, 'rolls')

getDocs(colRef)
  .then((data) => {
    let rolls = []
    data.docs.forEach((doc) => {
      rolls.push({ ...doc.data(), id: doc.id })
    })
    console.log(rolls)
  })
  .catch((error) => console.log(error))

// const addForm = document.querySelector('.add-form')
// console.log(addForm);

// addForm.addEventListener('submit', (event) => {
//   event.preventDefault()
//   addDoc(colRef, {
//     name: addForm.name.value,
//     description: addForm.description.value
//   }).then(() => addForm.reset())
// })
