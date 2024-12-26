import { useEffect, useState, useRef } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { PostCard } from '../components'

export const HomePage = () => {
	const [posts, setPosts] = useState([]),
		[toggle, setToggle] = useState(false)

	const postsRef = useRef(collection(db, 'posts'))
	// De esta forma un objeto se puede usar como dependencia de useEffect

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsRef.current)
			setPosts(
				data.docs.map((docs) => ({
					...docs.data(),
					id: docs.id,
				})),
			)
		}

		getPosts()
	}, [postsRef, toggle])

	return (
		<section className="space-y-8 my-4">
			{posts.map((post) => (
				<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
			))}
		</section>
	)
}
