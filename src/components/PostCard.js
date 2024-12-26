import { useNavigate } from 'react-router-dom'

import { doc, deleteDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'

export const PostCard = ({ post, setToggle, toggle }) => {
	const navigate = useNavigate()

	const { id, title, description, author } = post

	const isAuth = JSON.parse(localStorage.getItem('isAuth') || false)

	async function handleDelete() {
		const postDoc = doc(db, 'posts', id)
		await deleteDoc(postDoc)
		setToggle(!toggle)
	}

	return (
		<div className="px-8 pb-8 border shadow border-secondary/40">
			<h2>{title}</h2>
			<p className="mb-4">{description}</p>
			<div className="flex content-center">
				<span className="inline-block p-2 font-medium rounded-lg bg-secondary/30">
					{author.name}
				</span>
				{isAuth && author.id === auth.currentUser.uid && (
					<span
						onClick={handleDelete}
						className="flex items-center h-10 px-2 text-2xl text-gray-500 transition-colors duration-300 rounded-lg shadow cursor-pointer hover:bg-amber-50 ms-auto bi bi-trash shadow-primary/50"
					></span>
				)}
			</div>
		</div>
	)
}
