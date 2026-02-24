const Service = () => {
	return (
		<section>
			<div className='services'>
				<div className='block_3'>
					<h2 className='text_2'>Наши услуги</h2>
					<p className='text_2'>
						Профессионализм, надежность и постоянный контакт с клиентами — вот три кита,
						на которых строится наша работа.
					</p>
				</div>
				<div className='block_3'>
					<div className='sub_block'>
						<img src='/src/assets/IMG/1.webp' alt='img' className='photo_sub_block' />
						<div className='text_sub_block'>
							<h3 className='item_text_1'>Праздничное Освещение</h3>
							<p className='item_text_2'>
								Создаем атмосферу праздника и уюта с помощью профессионально установленных
								гирлянд.
							</p>
						</div>
					</div>
					<div className='sub_block'>
						<img src='/src/assets/IMG/2.webp' alt='img' className='photo_sub_block' />
						<div className='text_sub_block'>
							<h3 className='item_text_1'>Надежность и Безопасность</h3>
							<p className='item_text_2'>
								Используем качественные материалы и соблюдаем все нормы безопасности при
								установке.
							</p>
						</div>
					</div>
					<div className='sub_block'>
						<img
							src='/src/assets/SVG/1.svg'
							alt='SVG'
							type='image/svg+xml'
							className='photo_sub_block'
						/>
						<div className='text_sub_block'>
							<h3 className='item_text_1'>Индивидуальный Подход</h3>
							<p className='item_text_2'>
								Каждый проект уникален, поэтому мы учитываем все пожелания клиента и
								особенности дома.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Service
