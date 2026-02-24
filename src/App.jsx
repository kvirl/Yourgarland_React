import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './css/App.css'
import './css/NotFound.css'
import About from './page/About'
import Confidentiality from './page/Confidentiality'
import Contacts from './page/Contacts'
import Gallery from './page/Gallery'
import MainPage from './page/MainPage'
import NotFound from './page/NotFound'
import Reviews from './page/Reviews'

const LayoutWithHeader = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Все страницы с хедером */}
					<Route element={<LayoutWithHeader />}>
						<Route path='/' element={<MainPage />} />
						<Route path='/about' element={<About />} />
						<Route path='/confidentiality' element={<Confidentiality />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/reviews' element={<Reviews />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
