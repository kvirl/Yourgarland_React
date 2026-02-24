import Garland from '../components/Garland'

const Contacts = () => {
	return (
		<>
			<Garland />
			<main className='main_contact'>
				<div className='main_containers'>
					<div className='container_contact'>
						<div className='title_con'>
							<h1 className='title_c'>Наши контакты</h1>
						</div>
						<div className='block_con_svg'>
							{/* Email */}
							<div className='card_con'>
								<div className='svg_con'>
									<img
										src='src/assets/SVG/reshot-icon-email-TRU6DW7HBS.svg'
										alt='email'
										className='svg_c'
									/>
								</div>
								<div className='con_text'>
									<p className='c_t'>ifnormation@yandex.ru</p>
								</div>
							</div>

							{/* Телефон */}
							<div className='card_con'>
								<div className='svg_con'>
									<img
										src='src/assets/SVG/reshot-icon-telephone-UCDP3YSL94.svg'
										alt='phone'
										className='svg_c'
									/>
								</div>
								<div className='con_text'>
									<a href='tel:+79106181381' className='c_t'>
										+79106181381
									</a>
								</div>
							</div>

							{/* Текст */}
							<div className='card_con'>
								<div className='svg_con'>
									<img
										src='src/assets/SVG/reshot-icon-garland-Q2CE6AW8U5.svg'
										alt='garland'
										className='svg_c'
									/>
								</div>
								<div className='con_text'>
									<p className='c_t'>
										Мы рады всем! Если у вас есть вопросы, предложения или просто желание
										пообщаться, не стесняйтесь писать нам!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Contacts
