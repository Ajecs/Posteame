import { Routes, Route } from 'react-router-dom'
import { HomePage, CreatePost, PageNotFound } from '../pages'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AllRoutes = () => {
	return [
		<main className="grow py-4">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/create_post"
					element={
						<ProtectedRoutes>
							<CreatePost />
						</ProtectedRoutes>
					}
				/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>,
	]
}
