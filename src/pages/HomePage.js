import { PostCard } from '../components'

export const HomePage = () => {
	const posts = [
		{
			id: 1,
			title: 'Titulo 1',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque maxime incidunt quae molestias nam explicabo quam eaque ut voluptatum laudantium, cupiditate veritatis, perspiciatis sit non qui distinctio tempore soluta.',
			author: 'Pisculichi vago',
		},
		{
			id: 2,
			title: 'Titulo 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque maxime incidunt quae molestias nam explicabo quam eaque ut voluptatum laudantium, cupiditate veritatis, perspiciatis sit non qui distinctio tempore soluta.',
			author: 'Nicolas Coriale',
		},
	]

	return (
		<section className="space-y-8 my-4">
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</section>
	)
}
