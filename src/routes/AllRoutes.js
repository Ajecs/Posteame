import { Routes, Route } from 'react-router-dom'
import { HomePage, CreatePost, PageNotFound } from '../pages'

export const AllRoutes = () => {
	return [
		<main className="grow py-4">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create_post" element={<CreatePost />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>,
	]
}
