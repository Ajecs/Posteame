import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { auth, provider } from '../../firebase/config'
import { signInWithPopup, signOut } from 'firebase/auth'
import { Burger } from '../elements/Burger'

export const Header = () => {
	const [isAuth, setIsAuth] = useState(
		JSON.parse(localStorage.getItem('isAuth') || false),
	)

	const navigate = useNavigate()

	function handleLogin() {
		signInWithPopup(auth, provider).then((result) => {
			setIsAuth(true)
			localStorage.setItem('isAuth', true)
			navigate('/')
		})
	}
	function handleLogout() {
		signOut(auth)
		setIsAuth(false)
		localStorage.setItem('isAuth', false)
		navigate('/')
	}

	return (
		<header className="border-b border-b-secondary h-[8vh] content-center">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4 text-2xl lg:text-3xl font-display">
					<Link to="/">
						<span>Posteame</span>
					</Link>
				</div>
				<nav className="nav-primary content-center md:h-full me-2">
					{/* opcional para el responsive */}
					<button className="hidden">
						<Burger />
					</button>
					<ul className="flex items-center gap-4 text-lg lg:gap-8 lg:text-xl">
						<li>
							<NavLink to="/">Inicio</NavLink>
						</li>
						{isAuth ? (
							<>
								<li>
									<NavLink to="/create_post">Crear</NavLink>
								</li>
								<li>
									<button onClick={handleLogout}>Cerrar Sesión</button>
								</li>
							</>
						) : (
							<>
								<li>
									<button onClick={handleLogin}>Iniciar Sesión</button>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}
