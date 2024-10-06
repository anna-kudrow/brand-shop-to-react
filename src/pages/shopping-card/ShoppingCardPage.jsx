// import './ShoppingCard';
import { Arrivals } from '../../shared-components/Arrivals/Arrivals';
import { Bottom } from '../../shared-components/Bottom/Bottom';
import { Footer } from '../../shared-components/Footer/Footer';
import { Header } from '../../shared-components/Header/Header';
import { Subscribe } from '../../shared-components/Subscribe/Subscribe';
import { ShoppingCard } from './ShoppingCard';

export const ShoppingCardPage = () => {
	return (
		<>
			<Header />
			<Arrivals />
			<ShoppingCard />
			<Subscribe />
			<Bottom />
			<Footer />
		</>
	);
};
