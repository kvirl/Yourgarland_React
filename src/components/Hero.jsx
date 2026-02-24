import { useEffect, useRef } from 'react'

const Hero = () => {
	const textRef = useRef(null)
	const bottomRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('element-show')
					}
				})
			},
			{ threshold: 0.3, rootMargin: '0px' },
		)

		if (textRef.current) observer.observe(textRef.current)
		if (bottomRef.current) observer.observe(bottomRef.current)

		return () => observer.disconnect()
	}, [])

	return (
		<section className='hero'>
			{/* Главный блок с фото и текстом */}
			<div className='hero-main'>
				{/* Левая колонка - фото */}
				<div className='hero-image'></div>

				{/* Правая колонка - появляющийся текст */}
				<div className='hero-text' ref={textRef} id='js_1'>
					<h1 className='hero-title'>Преобразите ваш дом "Ваша гирлянда"</h1>
					<p className='hero-subtitle'>Высокое мастерство и доверие в каждом изделии!</p>
					<p className='hero-region'>Работаем по Рязанской области!</p>
				</div>
			</div>

			{/* Нижний блок с текстом */}
			<div className='hero-bottom' ref={bottomRef} id='js_2'>
				<div className='hero-bottom-item'>
					<h2>
						Данный сайт не является мошенническим! И оказанные услуги делаются настоящими
						людьми!
					</h2>
				</div>
				<div className='hero-bottom-item'>
					<p>
						Мы занимаемся профессиональным украшением домов гирляндами, гарантируя
						надежность и постоянную связь с клиентом
					</p>
				</div>
			</div>
		</section>
	)
}

export default Hero
