// components/ContactForm.jsx
import { useState } from 'react'

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		tel: '',
		email: '',
	})
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState({ text: '', type: '' })

	const handleChange = e => {
		const { name, value } = e.target

		// Для телефона форматируем
		if (name === 'tel') {
			setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }))
		} else {
			setFormData(prev => ({ ...prev, [name]: value }))
		}
	}

	const formatPhoneNumber = value => {
		const numbers = value.replace(/\D/g, '')
		let trimmed = numbers.slice(0, 11)

		if (trimmed.length > 0 && !trimmed.startsWith('7')) {
			trimmed = '7' + trimmed.slice(1)
		}

		let formatted = '+7'
		if (trimmed.length > 1) {
			formatted += ` (${trimmed.slice(1, 4)}`
		}
		if (trimmed.length >= 5) {
			formatted += `) ${trimmed.slice(4, 7)}`
		}
		if (trimmed.length >= 8) {
			formatted += `-${trimmed.slice(7, 9)}`
		}
		if (trimmed.length >= 10) {
			formatted += `-${trimmed.slice(9, 11)}`
		}
		return formatted
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		setMessage({ text: '', type: '' })

		const formDataToSend = new FormData()
		formDataToSend.append('name', formData.name)
		formDataToSend.append('tel', formData.tel)
		formDataToSend.append('email', formData.email)

		try {
			const res = await fetch('/api/send.php', {
				method: 'POST',
				body: formDataToSend,
			})

			const data = await res.json()

			if (res.ok && data.success) {
				setMessage({ text: data.message || 'Заявка отправлена!', type: 'success' })
				setFormData({ name: '', tel: '', email: '' })
			} else {
				setMessage({ text: data.error || 'Ошибка отправки', type: 'error' })
			}
		} catch (error) {
			console.error('Ошибка:', error)
			setMessage({ text: 'Ошибка соединения с сервером', type: 'error' })
		} finally {
			setLoading(false)
		}
	}

	return (
		<section className='form_section'>
			<div className='form_block'>
				<div className='text_heading'>
					<h2 className='text_2'>Отправьте свои данные</h2>
					<p className='text_2'>
						Отправьте свой номер телефона нам на почту, и мы с вами свяжемся!
					</p>
				</div>

				<div className='form'>
					<div className='form-left-decoration'></div>
					<div className='form-right-decoration'></div>
					<div className='circle'></div>

					<div className='text_form'>
						<div className='title'>Здравствуйте</div>
						<div className='subtitle'>Давайте свяжемся с вами!</div>
					</div>

					<form onSubmit={handleSubmit} className='form_action'>
						<div className='input-container ic1'>
							<input
								id='name'
								className='input'
								type='text'
								placeholder=' '
								required
								name='name'
								value={formData.name}
								onChange={handleChange}
							/>
							<div className='cut cut_short_1'></div>
							<label htmlFor='name' className='placeholder'>
								ФИО
							</label>
						</div>

						<div className='input-container ic2'>
							<input
								id='tel'
								className='input'
								name='tel'
								type='tel'
								placeholder=' '
								required
								value={formData.tel}
								onChange={handleChange}
							/>
							<div className='cut cut_short_2'></div>
							<label htmlFor='tel' className='placeholder'>
								Номер телефона
							</label>
						</div>

						<div className='input-container ic2'>
							<input
								id='email'
								className='input'
								name='email'
								type='email'
								placeholder=' '
								required
								value={formData.email}
								onChange={handleChange}
							/>
							<div className='cut cut_short_3'></div>
							<label htmlFor='email' className='placeholder'>
								Email
							</label>
						</div>

						<button type='submit' className='submit' disabled={loading}>
							{loading ? 'Отправка...' : 'Отправить'}
						</button>

						{message.text && (
							<div className={`message ${message.type}`}>{message.text}</div>
						)}
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactForm
