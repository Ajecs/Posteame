import { useTitle } from '../hooks/useTitle'


export const PageNotFound = () => {
	useTitle('Pagina no encontrada')
	return (
		<section className=" md:text-xl">
			<div className="w-fit mx-auto space-y-4">
				<h1>404 / La p&aacute;gina no se encuentra</h1>
				<img
					className="rounded-lg"
					src="https://http.cat/404"
					alt="Gato escondido"
				/>
			</div>
		</section>
	)
}
