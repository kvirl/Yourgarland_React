// src/page/NotFound.jsx
import { Link } from 'react-router-dom'
import Garland from '../components/Garland'

const NotFound = () => {
	return (
		<>
			<Garland />
			<main>
				<div className='main_containers error_containers'>
					<div className='block_404'>
						<h1>
							4<span className='color_404'>0</span>4
						</h1>
						<p>К сожалению, страница, которую вы ищете, не найдена.</p>
						<p>
							<Link to='/'>Вернуться на главную страницу</Link>
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default NotFound
