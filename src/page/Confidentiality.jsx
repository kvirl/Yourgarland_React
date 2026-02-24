import { Link } from 'react-router-dom'

const Confidentiality = () => {
	return (
		<div
			style={{
				fontFamily: 'Arial, sans-serif',
				lineHeight: 1.6,
				margin: '40px auto',
				padding: '20px',
				maxWidth: '800px',
				backgroundColor: '#f9f9f9',
				borderRadius: '10px',
				boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
			}}
		>
			<h1 style={{ color: '#333', marginBottom: '20px' }}>Политика конфиденциальности</h1>

			<h2 style={{ color: '#333', marginTop: '30px' }}>1. Введение</h2>
			<p style={{ color: '#555' }}>
				Настоящая политика конфиденциальности описывает, как
				<strong> Ваша гирлянда</strong> собирает, использует и защищает информацию,
				которую вы предоставляете, используя наш сайт{' '}
				<strong>https://yourgarland.ru</strong>.
			</p>

			<h2 style={{ color: '#333', marginTop: '30px' }}>2. Сбор информации</h2>
			<p style={{ color: '#555' }}>Мы можем собирать следующую информацию:</p>
			<ul style={{ marginLeft: '20px', color: '#555' }}>
				<li>Имя</li>
				<li>Электронная почта</li>
				<li>Телефонный номер</li>
				<li>Другие данные, которые вы предоставляете через формы на нашем сайте</li>
			</ul>

			<h2 style={{ color: '#333', marginTop: '30px' }}>3. Использование информации</h2>
			<p style={{ color: '#555' }}>Мы используем собранные данные для следующих целей:</p>
			<ul style={{ marginLeft: '20px', color: '#555' }}>
				<li>Ответы на ваши запросы</li>
				<li>Улучшение нашего сервиса</li>
				<li>Отправка информационных материалов и обновлений</li>
			</ul>

			<h2 style={{ color: '#333', marginTop: '30px' }}>4. Защита информации</h2>
			<p style={{ color: '#555' }}>
				Мы принимаем необходимые меры для защиты вашей информации от несанкционированного
				доступа, изменения или уничтожения.
			</p>

			<h2 style={{ color: '#333', marginTop: '30px' }}>5. Раскрытие информации</h2>
			<p style={{ color: '#555' }}>
				Мы не будем продавать или передавать ваши персональные данные третьим лицам без
				вашего согласия, за исключением случаев, предусмотренных законом.
			</p>

			<h2 style={{ color: '#333', marginTop: '30px' }}>6. Изменения в политике</h2>
			<p style={{ color: '#555' }}>
				Мы можем периодически обновлять эту политику. Все изменения будут опубликованы на
				этой странице.
			</p>

			<h2 style={{ color: '#333', marginTop: '30px' }}>7. Контактная информация</h2>
			<p style={{ color: '#555' }}>
				Если у вас есть вопросы о нашей политике конфиденциальности, пожалуйста, свяжитесь
				с нами по адресу: <strong>ifnormation@yandex.ru</strong>.
			</p>

			<Link
				to='/'
				style={{
					display: 'inline-block',
					marginTop: '30px',
					fontSize: '20px',
					textDecoration: 'none',
					color: '#333',
					transition: 'color 0.3s',
					borderBottom: '2px solid #ffcf40',
					paddingBottom: '5px',
				}}
				onMouseEnter={e => (e.target.style.color = '#ffcf40')}
				onMouseLeave={e => (e.target.style.color = '#333')}
			>
				← Вернуться на главную
			</Link>
		</div>
	)
}

export default Confidentiality
