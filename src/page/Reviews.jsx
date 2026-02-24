import { useEffect, useState } from 'react'
import Garland from '../components/Garland'

const Reviews = () => {
	// Состояния
	const [reviews, setReviews] = useState([])
	const [form, setForm] = useState({
		firstname: '',
		lastname: '',
		rating: 5,
		text: '',
	})
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState({ text: '', type: '' })

	// Загружаем отзывы при первом рендере
	useEffect(() => {
		loadReviews()
	}, [])

	// Функция загрузки отзывов
	const loadReviews = async () => {
		try {
			const res = await fetch('/api/reviews.php')
			const data = await res.json()
			if (Array.isArray(data)) {
				setReviews(data)
			}
		} catch (error) {
			console.error('Ошибка загрузки:', error)
		}
	}

	// Обработка изменений в форме
	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	// Отправка формы
	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		setMessage({ text: '', type: '' })

		const formData = new FormData()
		formData.append('firstname', form.firstname)
		formData.append('lastname', form.lastname)
		formData.append('rating', form.rating)
		formData.append('text', form.text)

		try {
			const res = await fetch('/api/reviews.php', {
				method: 'POST',
				body: formData,
			})

			const data = await res.json()

			if (res.ok) {
				setMessage({ text: 'Спасибо! Отзыв отправлен.', type: 'success' })
				setForm({ firstname: '', lastname: '', rating: 5, text: '' })
				loadReviews() // перезагружаем список
			} else {
				setMessage({ text: data.error || 'Ошибка отправки', type: 'error' })
			}
		} catch (error) {
			console.error('Ошибка загрузки:', error)
			setMessage({ text: 'Ошибка соединения с сервером', type: 'error' })
		} finally {
			setLoading(false)
		}
	}

	// Функция для отрисовки звёзд
	const renderStars = rating => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<svg
					key={i}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 576 512'
					width='24'
					height='24'
					fill={i <= rating ? '#ffcf40' : '#ddd'}
				>
					<path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z' />
				</svg>,
			)
		}
		return stars
	}

	return (
		<>
			<Garland />
			<main className='reviews_php'>
				<div className='main_containers'>
					{/* Форма добавления отзыва */}
					<section className='form_section'>
						<div className='form_block'>
							<div className='text_heading'>
								<h2 className='text_2 text_2_rev'>Поделитесь своим мнением</h2>
								<p className='text_2'>
									Расскажите, как мы смогли сделать ваш день лучше!
								</p>
							</div>

							<div className='form form_rev'>
								<div className='text_form tf_2'>
									<h2 className='text_rev'>Напишите свой комментарий</h2>
									<p className='text_rev_p'>Рады каждому сообщению!</p>
								</div>

								<form onSubmit={handleSubmit} className='form_action form_act'>
									{/* Рейтинг звёздами */}
									<div className='full-stars'>
										<div className='rating-group'>
											{[1, 2, 3, 4, 5].map(val => (
												<label key={val} htmlFor={`star-${val}`}>
													<input
														type='radio'
														name='rating'
														id={`star-${val}`}
														value={val}
														checked={form.rating == val}
														onChange={handleChange}
													/>
													<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
														<path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z' />
													</svg>
												</label>
											))}
										</div>
									</div>

									{/* Поля формы */}
									<div className='inputs_rev'>
										<div className='input-container ic1'>
											<input
												id='firstname'
												className='input in_2'
												type='text'
												placeholder=' '
												required
												name='firstname'
												value={form.firstname}
												onChange={handleChange}
											/>
											<label htmlFor='firstname' className='placeholder'>
												Имя
											</label>
										</div>

										<div className='input-container ic2'>
											<input
												id='lastname'
												className='input in_2'
												name='lastname'
												type='text'
												placeholder=' '
												required
												value={form.lastname}
												onChange={handleChange}
											/>
											<label htmlFor='lastname' className='placeholder'>
												Фамилия
											</label>
										</div>

										<div className='input-container ic2'>
											<input
												id='text'
												className='input in_2'
												name='text'
												type='text'
												placeholder=' '
												required
												value={form.text}
												onChange={handleChange}
											/>
											<label htmlFor='text' className='placeholder'>
												Текст отзыва
											</label>
										</div>

										{/* Кнопка отправки */}
										<button type='submit' className='submit' disabled={loading}>
											{loading ? 'Отправка...' : 'Отправить'}
										</button>

										{/* Сообщение об успехе/ошибке */}
										{message.text && (
											<p className={`message ${message.type}`}>{message.text}</p>
										)}
									</div>
								</form>
							</div>
						</div>
					</section>

					{/* Список отзывов */}
					<div className='block_reviews_user'>
						<div className='container_review'>
							<h1 className='review_title'>Отзывы наших клиентов</h1>
							<div className='reviews_users'>
								{reviews.length === 0 ? (
									<p className='subtitle'>Отзывов пока нет...</p>
								) : (
									reviews.map((review, index) => (
										<div key={index} className='user_block'>
											<div className='rating'>{renderStars(review.rating)}</div>
											<h2 className='title_user_name'>
												{review.firstname} {review.lastname}
											</h2>
											<p className='title_user_name_p'>{review.text}</p>
										</div>
									))
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Reviews
