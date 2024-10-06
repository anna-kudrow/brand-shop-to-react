import { useSelector } from 'react-redux';
import './ShoppingCard.scss';
import { Purchase } from './Purchase/Purchase';

export const ShoppingCard = () => {
	const purchases = useSelector((state) => state.purchases.purchasesList);

	return (
		<>
			<section className="shopping">
				<div className="shopping__content center">
					<div className="shopping__box">
						<div className="shopping__grid shopping__grid--padd">
							<p className="shopping__title">Product Details</p>
							<p className="shopping__title">unite Price</p>
							<p className="shopping__title">Quantity</p>
							<p className="shopping__title">shipping</p>
							<p className="shopping__title">Subtotal</p>
							<p className="shopping__title">ACTION</p>
						</div>
						{purchases.map((purchase) => (
							<Purchase key={purchase.id} item={purchase} />
						))}

						{/* <div className="shopping__item shopping__grid">
							<div className="grid__left">
								<a href="#" className="shopping__link">
									<img src="images/shopping1.png" alt="black jacket" />
								</a>
								<div className="grid__discription">
									<p className="description__name">Mango People T-shirt</p>
									<p className="description__details">
										Color:{' '}
										<span className="description__details--lighter">Red</span>
									</p>
									<p className="description__details">
										Size:{' '}
										<span className="description__details--lighter">Xll</span>
									</p>
								</div>
							</div>
							<p className="shopping__info">$150</p>
							<p className="shopping__info">2</p>
							<p className="shopping__info">FREE</p>
							<p className="shopping__info">$300</p>
							<img
								className="shopping__info"
								src="images/cancel.jpg"
								alt="cancel"
							/>
						</div>
						<div className="shopping__item shopping__grid">
							<div className="grid__left">
								<a href="#" className="shopping__link">
									<img src="images/shopping2.png" alt="brown jacket" />
								</a>
								<div className="grid__discription">
									<p className="description__name">Mango People T-shirt</p>
									<p className="description__details">
										Color:{' '}
										<span className="description__details--lighter">Red</span>
									</p>
									<p className="description__details">
										Size:{' '}
										<span className="description__details--lighter">Xll</span>
									</p>
								</div>
							</div>
							<p className="shopping__info">$150</p>
							<p className="shopping__info">2</p>
							<p className="shopping__info">FREE</p>
							<p className="shopping__info">$300</p>
							<img
								className="shopping__info"
								src="images/cancel.jpg"
								alt="cancel"
							/>
						</div>
						<div className="shopping__item shopping__grid">
							<div className="grid__left">
								<a href="#" className="shopping__link">
									<img src="images/shopping1.png" alt="black jacket" />
								</a>
								<div className="grid__discription">
									<p className="description__name">Mango People T-shirt</p>
									<p className="description__details">
										Color:{' '}
										<span className="description__details--lighter">Red</span>
									</p>
									<p className="description__details">
										Size:{' '}
										<span className="description__details--lighter">Xll</span>
									</p>
								</div>
							</div>
							<p className="shopping__info">$150</p>
							<p className="shopping__info">2</p>
							<p className="shopping__info">FREE</p>
							<p className="shopping__info">$300</p>
							<img
								className="shopping__info"
								src="images/cancel.jpg"
								alt="cancel"
							/>
						</div> */}
					</div>
					<div className="shopping__buttons">
						<button className="shopping__button" type="reset">
							cLEAR SHOPPING CART
						</button>
						<button className="shopping__button" type="button">
							cONTINUE sHOPPING
						</button>
						<p>TOTAL: </p>
					</div>
					<div className="shopping__information">
						<div className="information__box">
							<h3 className="information__title information__text">
								Shipping Adress
							</h3>
							<form action="#" className="information__form">
								<div className="information__wrapper">
									<select
										className="information__field select__country"
										name="country"
										id="country"
									>
										<option value="Bangladesh">Bangladesh</option>
										<option value="Italy">Italy</option>
									</select>
									<img
										className="select__img"
										src="images/gray_arrow.png"
										alt="arrow"
									/>
								</div>

								<input
									className="information__field information__input"
									type="text"
									placeholder="State"
								/>

								<input
									className="information__field information__input"
									type="text"
									placeholder="Postcode / Zip"
								/>
							</form>
							<button className="information-button quote-button" type="button">
								get a quote
							</button>
						</div>
						<div className="information__box">
							<h3 className="information__title  information__text">
								coupon discount
							</h3>
							<p className="coupon__text">
								Enter your coupon code if you have one
							</p>
						</div>
						<div className="information__box"></div>
					</div>
				</div>
			</section>
		</>
	);
};
