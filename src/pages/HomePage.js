import { useEffect, useState, useRef } from 'react'
import { useTitle } from '../hooks/useTitle'

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { PostCard, SkeletonCard } from '../components'

export const HomePage = () => {
	//  Se insertan tres valores falsos para que mientras se carguen los datos se muestren los skeletons
	const [posts, setPosts] = useState(new Array(3).fill(false)),
		[toggle, setToggle] = useState(false)

	useTitle('Inicio')

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
			{posts.map((post, index) =>
				post ? (
					<PostCard
						key={post.id}
						post={post}
						toggle={toggle}
						setToggle={setToggle}
					/>
				) : (
					<SkeletonCard key={index} />
				),
			)}
		</section>
	)
}
