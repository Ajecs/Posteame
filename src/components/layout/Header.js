import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export const Header = () => {
	const isAuth = false

	return (
		<header className="border-b border-b-secondary h-[8vh] content-center">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4 text-2xl lg:text-3xl font-display">
					<Link to="/">
						<span>Posteame</span>
					</Link>
				</div>
				<nav className="nav-primary content-center h-full">
					<ul className="flex items-center gap-6 text-lg lg:gap-12 lg:text-xl">
						<li>
							<NavLink to="/">Inicio</NavLink>
						</li>
						{isAuth ? (
							<>
								<li>
									<NavLink to="/create_post">Crear</NavLink>
								</li>
								<li>
									<NavLink to="/logout">Cerrar Sesión</NavLink>
								</li>
							</>
						) : (
							<>
								<li>
									<NavLink to="/login">Iniciar Sesión</NavLink>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}
