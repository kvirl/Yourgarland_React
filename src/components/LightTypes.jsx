import Slider from './Slider'

const LightTypes = () => {
	const lightingData = [
		{
			id: 1,
			images: ['/src/assets/IMG/4.webp', '/src/assets/IMG/4_1.webp'],
			material: 'Бахрома — свет теплый c мерцанием',
		},
		{
			id: 2,
			images: ['/src/assets/IMG/5.webp', '/src/assets/IMG/nav.webp'],
			material: 'Бахрома и неон — свет холодный',
		},
		{
			id: 3,
			images: ['/src/assets/IMG/6.webp', '/src/assets/IMG/6_1.webp'],
			material: 'Бахрома — свет холодный c мерцанием',
		},
	]

	return (
		<section id='lighting'>
			<div className='lighting'>
				<div className='block4'>
					<div className='text_lighting'>
						<h2 className='text_2'>Наш тип освещения</h2>
						<p className='text_2'>Вот примеры освещения, который мы используем</p>
					</div>
					<div className='card'>
						{lightingData.map(item => (
							<div key={item.id} className='cards card_1'>
								{' '}
								<Slider images={item.images} />
								<div className='text_lighting_sub'>
									<p className='text_card'>Материал:</p>
									<p className='text_card'>{item.material}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default LightTypes
