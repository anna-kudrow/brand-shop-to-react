import './ShoppingCard';
import { Arrivals } from '../../shared-components/Arrivals/Arrivals';
import { Bottom } from '../../shared-components/Bottom/Bottom';
import { Footer } from '../../shared-components/Footer/Footer';
import { Header } from '../../shared-components/Header/Header';
import { Subscribe } from '../../shared-components/Subscribe/Subscribe';

export const ShoppingCard = () => {
	return (
		<>
			<Header />
			<Arrivals />

			<Subscribe />
			<Bottom />
			<Footer />
		</>
	);
};
