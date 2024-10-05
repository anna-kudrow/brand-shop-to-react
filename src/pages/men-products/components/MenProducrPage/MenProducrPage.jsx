import { Arrivals } from '../../../../shared-components/Arrivals/Arrivals';
import { Bottom } from '../../../../shared-components/Bottom/Bottom';
import { Footer } from '../../../../shared-components/Footer/Footer';
import { Header } from '../../../../shared-components/Header/Header';
import { Offers } from '../../../../shared-components/Offers/Offers';
import { Subscribe } from '../../../../shared-components/Subscribe/Subscribe';
import { MenProductsList } from '../MenProductsList/MenProductsList';

export const MenProducrPage = () => {
	return (
		<>
			<Header />
			<Arrivals />
			<MenProductsList />
			<Offers />
			<Subscribe />
			<Bottom />
			<Footer />
		</>
	);
};
