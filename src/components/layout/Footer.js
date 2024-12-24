import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<footer className="py-4 border-t border-secondary text-sm text-gray-400">
			<div className='space-y-2 md:flex'>
        <span className='block ms-2 md:ms-0'>© 2024 <Link to='/' className='hover:underline font-display'>Posteame</Link> todos los derechos reservados</span>
				<nav className="flex items-center justify-around h-full mx-auto space-x-4 md:justify-start md:gap-12 *:hover:underline">
					<Link to="/">Sobre nosotros</Link>
					<Link to="/contact">Contacto</Link>
					<Link to="/terms">Términos</Link>
					<Link to="/privacy">Política de Privacidad</Link>
				</nav>
			</div>
		</footer>
	)
}
