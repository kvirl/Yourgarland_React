// src/page/About.jsx
import Garland from '../components/Garland'

const About = () => {
	return (
		<>
			<Garland />
			<main className='main_about'>
				<div className='main_containers'>
					<div className='responsive-container-block'>
						{/* Левая колонка с золотыми линиями */}
						<div className='img_block_about'>
							<img
								alt='golden-lines.png'
								className='bg_image_about'
								src='https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png'
							/>
						</div>

						{/* Правая колонка с текстом */}
						<div className='text_block_about'>
							<h2 className='text_blk_title'>О нас</h2>

							<p className='text-blk'>
								Мы верим, что гирлянды <span className='line_color_card'>—</span> это не
								просто украшение, а символ радости, единства и любви. Они способны
								преобразить любое пространство, добавив в него свет и магию.
							</p>

							<p className='text-blk'>
								С "Нашей гирляндой" каждый день может стать праздником! Мы предлагаем вам
								не только красивые изделия, но и советы по их использованию, чтобы ваша
								гирлянда стала настоящим произведением искусства. Давайте вместе создавать
								незабываемые моменты и наполнять жизнь яркими красками!
							</p>

							{/* Карточки с преимуществами */}
							<div className='block_card_about'>
								<div className='cards_ab'>
									{/* Карточка 1 - Цена */}
									<div className='card_ab'>
										<div className='img-container'>
											<img src='src/assets/SVG/1c.svg' alt='Цена' />
										</div>
										<ul className='social-media'>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
										<div className='user-info'>
											<h2>Цена</h2>
											<span>Обговаривается после осмотра</span>
										</div>
									</div>

									{/* Карточка 2 - Размеры */}
									<div className='card_ab'>
										<div className='img-container'>
											<img src='src/assets/SVG/2c.svg' alt='Размеры' />
										</div>
										<ul className='social-media'>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
										<div className='user-info'>
											<h2>Размеры</h2>
											<span>Измеряем точно и без ошибок</span>
										</div>
									</div>

									{/* Карточка 3 - Связь */}
									<div className='card_ab'>
										<div className='img-container'>
											<img src='src/assets/SVG/3c.svg' alt='Связь' />
										</div>
										<ul className='social-media'>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
										<div className='user-info'>
											<h2>Связь</h2>
											<span>Всегда на связи с клиентом</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default About
