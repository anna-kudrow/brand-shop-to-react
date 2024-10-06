import './ProductsList.scss';
import { indexCatalog } from '../../../../cards-data';
import { ProductCard } from '../../../../shared-components/ProductCard/ProductCard';

export default function ProductsList() {
	return (
		<section className="products">
			<div className="products__info center">
				<h2 className="products__title">Fetured Items</h2>
				<p className="products__text">
					Shop for items based on what we featured in this week
				</p>
			</div>
			<div className="products__cards center">
				{indexCatalog.map((card) => (
					<ProductCard key={card.id} item={card} />
				))}
			</div>
			<a className="products__link-button button" href="#">
				<div className="products__button-wrapper">
					<p className="products__button-text">Browse All Product</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="12"
						width="15"
						viewBox="0 0 512 512"
					>
						<path
							fill="#ffffff"
							d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
						/>
					</svg>
				</div>
			</a>
		</section>
	);
}
