import { useState } from 'react'

const Slider = ({ images }) => {
	const [slideIndex, setSlideIndex] = useState(0)

	const prevSlide = () => {
		setSlideIndex(prev => (prev - 1 + images.length) % images.length)
	}

	const nextSlide = () => {
		setSlideIndex(prev => (prev + 1) % images.length)
	}

	return (
		<div className='slider_container'>
			<div className='slider'>
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`slide ${index + 1}`}
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
	)
}

export default Slider
