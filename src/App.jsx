import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarProvider } from './context/NavbarContext';
import About from './ui/About';
import Advantages from './ui/Advantages';
import Header from './ui/Header';
import Hero from './ui/Hero';
import Purchase from './ui/Purchase';
import Socials from './ui/Socials';
import Reviews from './ui/Reviews';
import Footer from './ui/Footer';
import OurTeam from './ui/OurTeam';

function App() {
	return (
		<NavbarProvider>
			<ToastContainer />
			<div className='min-h-[150vh]'>
				<Header />
				<main>
					<Hero />
					<About />
					<Advantages />
					<Purchase />
					<OurTeam/>
					<Socials />
					<Reviews/>
					<Footer/>
				</main>
			</div>
		</NavbarProvider>
	);
}

export default App;
