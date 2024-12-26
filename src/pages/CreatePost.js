import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase/config'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreatePost = () => {
	const navigate = useNavigate()

	const postsRef = collection(db, 'posts')

	const titleRef = useRef()
	const descriptionRef = useRef()

	async function handleCreatePost(event) {
		event.preventDefault()

		const doc = {
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			author: {
				name: auth.currentUser.displayName,
				id: auth.currentUser.uid,
			},
		}
		await addDoc(postsRef, doc)
		navigate('/')
	}
	return (
		<section>
			<form className=" lg:w-[60%] mx-auto **:block space-y-8 text-lg">
				<h1 className="my-4 text-2xl font-display">Crear Post</h1>
				<div className="space-y-2">
					<label htmlFor="post-title">Título</label>
					<input
						ref={titleRef}
						className="w-full"
						type="text"
						id="post-title"
						maxLength="50"
						required
					/>
				</div>
				<div className="space-y-5">
					<label htmlFor="post-content">Descripción</label>
					<textarea
						ref={descriptionRef}
						className="w-full border resize-none border-secondary h-64"
						name="post-content"
						id="post-content"
						required
					></textarea>
					<button
						onClick={handleCreatePost}
						type="submit"
						className="btn-stretch bg-primary font-bold text-white text-xl saturate-100 hover:saturate-200"
					>
						Publicar
					</button>
				</div>
			</form>
		</section>
	)
}
