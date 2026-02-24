// components/Portfolio.jsx
import ProjectCard from './ProjectCard'

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			title: 'Новое Семкино',
			materials: 'Бахрома, неон, нить, свет холодный',
			time: '2 дня',
			images: [
				'/src/assets/IMG/home_1.1.webp',
				'/src/assets/IMG/home_1.2.webp',
				'/src/assets/IMG/home_1.3.webp',
			],
		},
		{
			id: 2,
			title: 'Солотча',
			materials: 'Бахрома с мерцанием, свет теплый, белый',
			time: '1 день',
			images: ['/src/assets/IMG/4.webp', '/src/assets/IMG/4_1.webp'],
		},
		{
			id: 3,
			title: 'Борки',
			materials: 'Бахрома с мерцанием , свет холодный , теплый',
			time: '1 день',
			images: [
				'/src/assets/IMG/home_2.1.webp',
				'/src/assets/IMG/home_2.2.webp',
				'/src/assets/IMG/home_2.3.webp',
			],
		},
		{
			id: 4,
			title: 'Александрово',
			materials: 'Бахрома неон , свет холодный',
			time: '1 день',
			images: [
				'/src/assets/IMG/alexandrovo1.webp',
				'/src/assets/IMG/alexandrovo2.webp',
				'/src/assets/IMG/alexandrovo3.webp',
				'/src/assets/IMG/alexandrovo4.webp',
				'/src/assets/IMG/alexandrovo5.webp',
			],
		},
		{
			id: 5,
			title: 'ТИЗ Рязань',
			materials: 'Бахрома, свет белый , теплый',
			time: '1 день',
			images: [
				'/src/assets/IMG/tiz1.webp',
				'/src/assets/IMG/tiz2.webp',
				'/src/assets/IMG/tiz3.webp',
			],
		},
		{
			id: 6,
			title: 'Соколовка',
			materials: 'Неон - тёплый свет, бахрома - тёплый свет',
			time: '1 день',
			images: [
				'/src/assets/IMG/sok1.webp',
				'/src/assets/IMG/sok2.webp',
				'/src/assets/IMG/sok3.webp',
				'/src/assets/IMG/sok4.webp',
			],
		},
		{
			id: 7,
			title: 'Солотча',
			materials: 'Свет холодный с мерцанием',
			time: '1 день',
			images: [
				'/src/assets/IMG/solotcha1.webp',
				'/src/assets/IMG/solotcha2.webp',
				'/src/assets/IMG/solotcha3.webp',
				'/src/assets/IMG/solotcha4.webp',
			],
		},
		{
			id: 8,
			title: 'Секиотово',
			materials: 'Свет холодный с мерцанием',
			time: '1 день',
			images: [
				'/src/assets/IMG/sekiotovo1.webp',
				'/src/assets/IMG/sekiotovo2.webp',
				'/src/assets/IMG/sekiotovo3.webp',
			],
		},
		{
			id: 9,
			title: 'Вилланд',
			materials: 'Бахрома теплая с мерцанием',
			time: '1 день',
			images: [
				'/src/assets/IMG/villand1.webp',
				'/src/assets/IMG/villand2.webp',
				'/src/assets/IMG/villand3.webp',
				'/src/assets/IMG/villand4.webp',
				'/src/assets/IMG/villand5.webp',
			],
		},
		{
			id: 10,
			title: 'Алеканово',
			materials: 'Бахрома теплая с мерцанием',
			time: '1 день',
			images: [
				'/src/assets/IMG/alekanovo1.webp',
				'/src/assets/IMG/alekanovo2.webp',
				'/src/assets/IMG/alekanovo3.webp',
				'/src/assets/IMG/alekanovo4.webp',
				'/src/assets/IMG/alekanovo5.webp',
				'/src/assets/IMG/alekanovo6.webp',
			],
		},
	]

	return (
		<section id='object'>
			<div className='block5'>
				<div className='text_heading'>
					<h2 className='text_2'>Примеры наших работ</h2>
					<p className='text_2'>За более подробной информацией свяжитесь с нами!</p>
				</div>
				<hr />
				<div className='home_container'>
					{projects.map(project => (
						<ProjectCard
							key={project.id}
							title={project.title}
							materials={project.materials}
							time={project.time}
							images={project.images}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Portfolio
