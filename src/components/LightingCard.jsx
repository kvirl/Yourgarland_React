import { useState } from 'react'

const LightingCard = ({ images, material }) => {
	const [slideIndex, setSlideIndex] = useState(0)

	const prevSlide = () => {
		setSlideIndex(prev => (prev - 1 + images.length) % images.length)
	}

	const nextSlide = () => {
		setSlideIndex(prev => (prev + 1) % images.length)
	}

	return (
		<div className='cards'>
			{' '}
			<div className='slider_container'>
				<div className='slider'>
					{images.map((img, index) => (
						<img
							key={index}
							src={img}
							alt={`lighting ${index + 1}`}
							className='img_lighting'
							style={{ display: index === slideIndex ? 'block' : 'none' }}
						/>
					))}
				</div>
				<button onClick={prevSlide} className='prev-button' type='button'>
					&lt;
				</button>
				<button onClick={nextSlide} className='next-button' type='button'>
					&gt;
				</button>
			</div>
			<div className='text_lighting_sub'>
				<p className='text_card'>Материал:</p>
				<p className='text_card'>{material}</p>
			</div>
		</div>
	)
}

export default LightingCard
