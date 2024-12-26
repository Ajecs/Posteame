export const PostCard = ({post}) => {
	const {title, description, author} = post

	return (
		<div className="px-8 pb-8 border shadow border-secondary/40">
			<h2>{title}</h2>
			<p className="mb-4">
			{description}
			</p>
			<div className="flex content-center">
				<span className="inline-block p-2 font-medium rounded-lg bg-secondary/30">
					{author}
				</span>
				<span className="flex items-center px-2 text-2xl text-gray-500 transition-colors duration-300 rounded-lg shadow cursor-pointer hover:bg-amber-50 ms-auto bi bi-trash shadow-primary/50"></span>
			</div>
		</div>
	)
}
