import Slider from './Slider'
const ProjectCard = ({ title, materials, time, images }) => {
	return (
		<div className='home homes'>
			<Slider images={images} />
			<div className='text_home'>
				<h2 className='heading_home texth'>{title}</h2>
				<p className='text_material texth'>
					<span className='color'>М</span>ы использовали:
					<span> {materials}</span>
				</p>
				<p className='text_period texth'>
					<span className='color'>С</span>рок реализации: <span>{time}</span>
				</p>
			</div>
		</div>
	)
}

export default ProjectCard
