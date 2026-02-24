import Garland from '../components/Garland'
import '../css/App.css'

const Gallery = () => {
	return (
		<>
			<Garland />
			<main className='gallery_main'>
				<div className='main_containers'>
					<div className='container_gallery'>
						<div className='title_gal'>
							<h1 className='title_g'>Наша галлерея объектов</h1>
						</div>
						<hr />
						<div className='block_video'>
							<video controls className='video_g'>
								<source src='src/assets/VIDEO/object1.mp4' type='video/mp4' />
								<source src='src/assets/VIDEO/object1.webm' type='video/webm' />
							</video>
							<video controls className='video_g'>
								<source src='src/assets/VIDEO/object2.mp4' type='video/mp4' />
								<source src='src/assets/VIDEO/object2.webm' type='video/webm' />
							</video>
							<video controls className='video_g'>
								<source src='src/assets/VIDEO/object3.mp4' type='video/mp4' />
								<source src='src/assets/VIDEO/object3.webm' type='video/webm' />
							</video>
							<video controls className='video_g'>
								<source src='src/assets/VIDEO/alekanovo_v1.mp4' type='video/mp4' />
								<source src='src/assets/VIDEO/alekanovo_v1.webm' type='video/webm' />
							</video>
							<video controls className='video_g'>
								<source src='src/assets/VIDEO/alekanovo_v2.mp4' type='video/mp4' />
								<source src='src/assets/VIDEO/alekanovo_v2.webm' type='video/webm' />
							</video>
						</div>
						<hr />
					</div>
				</div>
			</main>
		</>
	)
}

export default Gallery
