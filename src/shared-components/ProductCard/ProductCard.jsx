import { useDispatch } from 'react-redux';
import { addPurchase } from '../../store/purchases.slice';

export const ProductCard = ({ item }) => {
	const dispatch = useDispatch();

	const handleAddClick = () => {
		dispatch(addPurchase(item));
	};

	return (
		<div id={item.id} className="product__card">
			<a href="111" className="product__card-link">
				<img
					className="card__img"
					src={item.src}
					alt="${element.description}"
				/>
				<div className="card__text-wrapper">
					<p className="card__name">{item.title}</p>
					<p className="card__descrip">{item.description}</p>
					<p className="card__price">{item.price}</p>
				</div>
			</a>
			<div className="add-box">
				<button onClick={handleAddClick} className="add-button">
					<img src="images/add.svg" alt="add product icon" />
					<p className="add-text">Add to Cart</p>
				</button>
			</div>
		</div>
	);
};
