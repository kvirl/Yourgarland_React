import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='footer' id='footer'>
			<div className='container'>
				<div className='row'>
					<div className='footer-col'>
						<h4>Конфиденциальность</h4>
						<ul>
							<li>
								<Link to='confidentiality' className='confidentiality'>
									Наша политика конфиденциальности
								</Link>
							</li>
						</ul>
					</div>
					<div className='footer-col'>
						<h4>Другие страницы</h4>
						<ul>
							<li>
								<Link to='gallery' className='confidentiality'>
									Галлерея
								</Link>
							</li>
							<li>
								<Link to='reviews' className='confidentiality'>
									Отзывы
								</Link>
							</li>
							<li>
								<Link to='contact' className='confidentiality'>
									Контакты
								</Link>
							</li>
							<li>
								<Link to='about' className='confidentiality'>
									О нас
								</Link>
							</li>
						</ul>
					</div>
					<div className='footer-col'>
						<h4>Контакты</h4>
						<ul>
							<li>
								<a to='tel:+79106181381'>
									<i className='fa fa-mobile' aria-hidden='true'></i>+79106181381
								</a>
							</li>
							<li>
								<a to='mailto:ifnormation@yandex.ru'>
									<i className='fa fa-envelope' aria-hidden='true'></i>
									ifnormation@yandex.ru
								</a>
							</li>
						</ul>
					</div>
					<div className='footer-col'>
						<h4>follow us</h4>
						<div className='social-links'>
							<a to='https://vk.com/kv1rl'>
								<i className='fab fa-vk'></i>
							</a>
							<a to='https://wa.me/79106181381'>
								<i className='fab fa-whatsapp'></i>
							</a>
							<a to='https://t.me/kv1rl'>
								<i className='fab fa-telegram'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
