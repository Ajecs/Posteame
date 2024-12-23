import { initializeApp } from 'firebase/app'
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	getFirestore,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	where,
	updateDoc,
} from 'firebase/firestore'
import { useRef } from 'react'

export const AddItem = () => {
	const formRef = useRef(),
		nameRef = useRef(),
		idRef = useRef(),
		categoryRef = useRef(),
		nameUpdateRef = useRef(),
		idUpdateRef = useRef()

	const firebaseConfig = {
		apiKey: 'AIzaSyCj8GE444Vgm3tSYz5R8xpuMKZChyonM9k',
		authDomain: 'lanotione.firebaseapp.com',
		projectId: 'lanotione',
		storageBucket: 'lanotione.firebasestorage.app',
		messagingSenderId: '434031687516',
		appId: '1:434031687516:web:45f906d195f6348e497399',
	}

	// Initialize Firebase
	const app = initializeApp(firebaseConfig),
		db = getFirestore(),
		colRef = collection(db, 'rolls'),
		queryRef = query(
			colRef,
			where('category', '==', 'especiales'),
			orderBy('name'),
		)
	/* 
      query recibe la referencia de la colección junto con el método where que genera una condición 
      que recibe el campo, una condición y el valor que queremos buscar   
    */

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
	onSnapshot(queryRef, (data) => {
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
			category: categoryRef.current.value,
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
		}).then(() => {
			nameRef.current.value = ''
			idRef.current.value = ''
		})
	}

	function handleDeleteItem(event) {
		event.preventDefault()
		// es necesario una referencia para el documnt de firebase
		const docRef = doc(db, 'rolls', idRef.current.value)
		deleteDoc(docRef).then(() => {
			nameRef.current.value = ''
			idRef.current.value = ''
		})
	}
	function handleUpadateItem(event) {
		event.preventDefault()
		// es necesario una referencia para el documnt de firebase
		const docRef = doc(db, 'rolls', idUpdateRef.current.value)
		updateDoc(docRef, {
			name: nameUpdateRef.current.value,
			updatedAt: serverTimestamp(),
		}).then(() => {
			nameUpdateRef.current.value = ''
			idUpdateRef.current.value = ''
		})
	}

	return (
		<div className="">
			<h2 className="mb-2">Firebase example</h2>
			<form
				ref={formRef}
				className="add-form grid grid-cols-3 md:grid-cols-3 gap-4 items-center"
			>
				<input
					ref={nameRef}
					type="text"
					name="name"
					placeholder="Roll"
					autoComplete="off"
				/>
				<select
					className="justify-self-start px-2 h-full"
					ref={categoryRef}
					name="category"
					id=""
				>
					<option value="especiales">Especiales</option>
					<option value="sin-tacc">Sin tacc</option>
					<option value="rellenos">Rellenos</option>
				</select>
				<button
					className="btn-primary justify-self-start"
					onClick={handleAddItem}
				>
					Añadir
				</button>
				<input
					ref={idRef}
					className=""
					type="text"
					placeholder="Ingresa el id del item"
				/>
				<button
					className="btn-danger place-self-start"
					onClick={handleDeleteItem}
				>
					Eliminar
				</button>
				<div></div>
				<input
					className=""
					ref={nameUpdateRef}
					type="text"
					placeholder="Nombre del roll"
				/>
				<input
					className="row-start-3"
					ref={idUpdateRef}
					type="text"
					placeholder="Ingresa el id del item"
				/>
				<button onClick={handleUpadateItem} className="btn-primary">
					Actualizar
				</button>
			</form>
		</div>
	)
}
