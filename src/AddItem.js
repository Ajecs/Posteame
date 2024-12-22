import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc
} from 'firebase/firestore'
import { useRef } from 'react'

export const AddItem = () => {
  const formRef = useRef(),
    nameRef = useRef(),
    descriptionRef = useRef(),
    idRef = useRef()

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

  /* getDocs(colRef)
    .then((data) => {
      let rolls = []
      data.docs.forEach((doc) => {
        rolls.push({ ...doc.data(), id: doc.id })
      })
      console.log(rolls)
    })
    .catch((error) => console.log(error)) */

  onSnapshot(colRef, (data) => {
    // onSnapshot permite obtener los datos en tiempo real
    let rolls = []
    data.docs.forEach((doc) => {
      rolls.push({ ...doc.data(), id: doc.id })
    })
    console.log(rolls)
  })

  function handleAddItem(event) {
    event.preventDefault()
    addDoc(colRef, {
      name: nameRef.current.value,
      description: descriptionRef.current.value
    }).then(() => {
      nameRef.current.value = ''
      descriptionRef.current.value = ''
    })
  }

  function handleDeleteItem(event) {
    event.preventDefault()
    // es necesario una referencia para el documnt de firebase
    const docRef = doc(db, 'rolls', idRef.current.value)
    deleteDoc(docRef).then(() => {
      nameRef.current.value = ''
      descriptionRef.current.value = ''
      idRef.current.value = ''
    })
  }

  return (
    <div className=''>
      <h2 className='mb-2'>Firebase example</h2>
      <form
        ref={formRef}
        className='add-form grid grid-cols-3 md:grid-cols-3 gap-4'
      >
        <input
          ref={nameRef}
          type='text'
          name='name'
          placeholder='Roll'
          autoComplete='off'
        />
        <input
          ref={descriptionRef}
          type='text'
          name='description'
          placeholder='Descripción'
          autoComplete='off'
        />
        <button
          className='btn-primary place-self-start'
          onClick={handleAddItem}
        >
          Añadir
        </button>
        <div className='col-span-full flex gap-4'>
          <input
            ref={idRef}
            className='place-self-start'
            type='text'
            placeholder='Ingresa el id del item'
          />
          <button
            className='btn-danger place-self-start'
            onClick={handleDeleteItem}
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
  )
}
