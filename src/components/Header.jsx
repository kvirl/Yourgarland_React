// components/Header.jsx
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navRef = useRef(null)
	const burgerRef = useRef(null)

	// Переключение меню
	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	// Закрытие меню при клике вне и Escape
	useEffect(() => {
		const handleClickOutside = e => {
			if (
				isOpen &&
				navRef.current &&
				!navRef.current.contains(e.target) &&
				!burgerRef.current.contains(e.target)
			) {
				setIsOpen(false)
			}
		}

		const handleEsc = e => {
			if (e.key === 'Escape' && isOpen) {
				setIsOpen(false)
			}
		}

		// Блокировка скролла
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('keydown', handleEsc)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleEsc)
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<header id='header'>
			<div className='header'>
				<div className='header_container'>
					<div className='nav-bar'>
						<div className='logo_title'>
							<Link to='/' onClick={() => setIsOpen(false)}>
								<h1 className='item_logo'>
									<span className='line'>Ваша</span>гирлянда
								</h1>
							</Link>
						</div>

						{/* Навигация с рефом */}
						<nav className={`nav-link ${isOpen ? 'open' : ''}`} ref={navRef}>
							<ul className='ul-nav'>
								<li className='li-nav'>
									<Link to='/gallery' className='item_a' onClick={toggleMenu}>
										<h2 className='item-nav'>Галерея</h2>
									</Link>
								</li>
								<li className='li-nav'>
									<Link to='/reviews' className='item_a' onClick={toggleMenu}>
										<h2 className='item-nav'>Отзывы</h2>
									</Link>
								</li>
								<li className='li-nav'>
									<Link to='/contacts' className='item_a' onClick={toggleMenu}>
										<h2 className='item-nav'>Контакты</h2>
									</Link>
								</li>
								<li className='li-nav'>
									<Link to='/about' className='item_a' onClick={toggleMenu}>
										<h2 className='item-nav'>О нас</h2>
									</Link>
								</li>
							</ul>
						</nav>

						{/* Бургер с рефом */}
						<div
							className={`burger ${isOpen ? 'active' : ''}`}
							onClick={toggleMenu}
							ref={burgerRef}
						>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
