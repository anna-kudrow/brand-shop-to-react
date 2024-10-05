import { Arrivals } from '../../shared-components/Arrivals/Arrivals';
import { Bottom } from '../../shared-components/Bottom/Bottom';
import { Footer } from '../../shared-components/Footer/Footer';
import { Header } from '../../shared-components/Header/Header';
import { Subscribe } from '../../shared-components/Subscribe/Subscribe';
import { OrderInfo } from './OrderInfo';

export const CheckoutPage = () => {
	return (
		<>
			<Header />
			<Arrivals />
			<OrderInfo />
			<Subscribe />
			<Bottom />
			<Footer />
		</>
	);
};
