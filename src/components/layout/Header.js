import { NavLink, Link } from 'react-router-dom'
import { Burger } from '../elements/Burger'

export const Header = () => {
	const isAuth = true

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
					<button className='hidden'><Burger /></button>
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
