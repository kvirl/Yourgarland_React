import ContactForm from '../components/ContactForm'
import Garland from '../components/Garland'
import Hero from '../components/Hero'
import LightTypes from '../components/LightTypes'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'

const MainPage = () => {
	return (
		<>
			<Garland />
			<Hero />
			<Services />
			<LightTypes />
			<Portfolio />
			<ContactForm />
		</>
	)
}

export default MainPage
