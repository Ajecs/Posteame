export const CreatePost = () => {
	return (
		<section>
			<form className=" lg:w-[60%] mx-auto **:block space-y-8 text-lg">
				<h1 className="my-4 text-2xl font-display">Crear Post</h1>
				<div className="space-y-2">
					<label htmlFor="post-title">Título</label>
					<input className="w-full" type="text" id="post-title" maxLength="50" required />
				</div>
				<div className="space-y-5">
					<label htmlFor="post-content">Descripción</label>
					<textarea
						className="w-full border resize-none border-secondary h-64"
						name="post-content"
						id="post-content"
						required
					></textarea>
					<button
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
