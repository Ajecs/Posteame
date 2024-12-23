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
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { useRef } from 'react'

export const AddItem = () => {
	// Referencias de inputs y formulario
	const formRef = useRef(),
		nameRef = useRef(),
		idRef = useRef(),
		categoryRef = useRef(),
		nameUpdateRef = useRef(),
		idUpdateRef = useRef(),
		emailRegRef = useRef(),
		passwordRegRef = useRef(),
		emailLoginRef = useRef(),
		passwordLoginRef = useRef()

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
		// iniciando servicio de base de datos
		db = getFirestore(),
		// iniciando servicio de autenticación
		auth = getAuth(),
		colRef = collection(db, 'rolls'),
		docRef = doc(db, 'rolls', 'fQ7p5aPrJsrvv75Endoq'),
		// Query para filtrar y ordenar colección
		queryRef = query(
			colRef,
			where('category', '==', 'especiales'),
			orderBy('name'),
		)
	/* 
      query recibe la referencia de la colección junto con el método where que genera una condición 
      que recibe el campo, una condición y el valor que queremos buscar   
    */

	onSnapshot(colRef, (data) => {
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
		// console.log(rolls)
	})
	// Obtención de un document
	onSnapshot(docRef, (doc) => {
		// console.log(doc.data(), doc.id)
	})

	// Funciones para el manejo de datos
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

	function handleRegister() {
		createUserWithEmailAndPassword(
			auth,
			emailRegRef.current.value,
			passwordRegRef.current.value,
		)
			.then((userCredential) => {
				console.log(userCredential)
				emailRegRef.current.value = ''
				passwordRegRef.current.value = ''
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handleLogin() {
		signInWithEmailAndPassword(
			auth,
			emailLoginRef.current.value,
			passwordLoginRef.current.value,
		)
			.then((userCredential) => {
				console.log(userCredential.user.email)
				emailLoginRef.current.value = ''
				passwordLoginRef.current.value = ''
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handleLogout() {
		signOut(auth)
			.then(() => {
				console.log('logged out')
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div className="">
			<h2 className="mb-2">Firebase example</h2>
			<form
				ref={formRef}
				className="grid items-center grid-cols-3 gap-4 add-form md:grid-cols-3"
			>
				<input
					ref={nameRef}
					type="text"
					name="name"
					placeholder="Roll"
					autoComplete="off"
				/>
				<select
					className="h-full px-2 justify-self-start"
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
			<div className="bg-amber-500/30 md:w-fit p-8 rounded-2xl my-8">
				<h1 className="w-fit mx-auto text-3xl">Autenticación</h1>
				<h2>Registro</h2>
				<div className="flex flex-col md:grid md:grid-cols-[max-content_40%] gap-x-8 gap-y-4 md:items-center mx-auto mb-4">
					<label className="" htmlFor="mail">
						Ingrese el correo electrónico
					</label>
					<input
						ref={emailRegRef}
						id="mail-reg"
						type="email"
						placeholder="email"
					/>
					<label className="" htmlFor="pass">
						Ingrese la contrasena
					</label>
					<input
						ref={passwordRegRef}
						id="pass-reg"
						type="password"
						placeholder="*****"
					/>
					<button
						onClick={handleRegister}
						className="btn-primary col-span-2 justify-self-end ms-auto"
					>
						Registrarse
					</button>
				</div>
				<h2>Inicio de sesión</h2>
				<div className="flex flex-col md:grid md:grid-cols-[max-content_40%] gap-x-8 gap-y-4 md:items-center mx-auto mb-4">
					<label className="md:text-right" htmlFor="mail">
						Ingrese el correo electrónico
					</label>
					<input
						ref={emailLoginRef}
						id="mail-login"
						type="email"
						placeholder="email"
					/>
					<label className="md:text-right" htmlFor="pass">
						Ingrese la contrasena
					</label>
					<input
						ref={passwordLoginRef}
						id="pass-login"
						type="password"
						placeholder="*****"
					/>
					<button
						onClick={handleLogin}
						className="btn-primary col-span-2 justify-self-end ms-auto"
					>
						Iniciar sesión
					</button>
					<button
						onClick={handleLogout}
						className="btn-danger btn-stretch col-span-2 mt-4"
					>
						Cerrar sesión
					</button>
				</div>
			</div>
		</div>
	)
}
