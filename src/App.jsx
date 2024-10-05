import './App.scss';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Error } from './pages/Error/Error';
import { IndexPage } from './pages/index/components/IndexPage/IndexPage';
import { MenProducrPage } from './pages/men-products/components/MenProducrPage/MenProducrPage';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/men-products" element={<MenProducrPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
