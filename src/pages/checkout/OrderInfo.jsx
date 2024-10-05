import './OrderInfo.scss';

export const OrderInfo = () => {
	return (
		<section className="order-info">
			<div className="order-info__content center">
				<ul className="order-info__list">
					<li className="order-info__item">
						<details className="order-info__details" open>
							<summary className="order-info__summary">
								01. Shipping Adress
							</summary>
							<div className="details__box">
								<div className="order-info__register-details">
									<p className="order-info__text-big">
										Check as a guest or register
									</p>
									<p className="order-info__text-small">
										Register with us for future convenience
									</p>
									<form action="#" className="radio-box">
										<div className="radio__item">
											<input
												className="radio-item"
												type="radio"
												name="guest"
												id="guest"
											/>
											<label
												className="order-info__text-middle"
												htmlFor="guest"
											>
												checkout as guest
											</label>
										</div>

										<div className="radio__item">
											<input
												className="radio-item"
												type="radio"
												name="register"
												id="register"
											/>
											<label
												className="order-info__text-middle"
												htmlFor="register"
											>
												register
											</label>
										</div>
									</form>
									<p className="order-info__text-big">
										register and save time!
									</p>
									<p className="order-info__text-small">
										Register with us for future convenience
									</p>
									<div className="order-info__additional">
										<a href="#" className="additional__link">
											<div className="additional__wrapper">
												<img
													height="8px"
													src="images/order_info_arrows.jpg"
													alt="arrow"
												/>
												<p className="additional__text order-info__text-small">
													Fast and easy checkout
												</p>
											</div>
										</a>
										<div className="additional__wrapper">
											<img
												height="8px"
												src="images/order_info_arrows.jpg"
												alt="arrow"
											/>
											<p className="additional__text order-info__text-small">
												Easy access to your order history and status
											</p>
										</div>
									</div>
									<button className="order-info__button" type="button">
										Continue
									</button>
								</div>

								<div className="order-info__log-in">
									<p className="order-info__text-big">Already registed?</p>
									<p className="order-info__text-small">Please log in below</p>
									<form action="#" method="post" className="login-form">
										<label
											className="login-form__label order-info__text-big"
											htmlFor="email"
										>
											EMAIL ADDRESS <span className="red-astrix">*</span>
										</label>
										<br />
										<input
											className="login-form__input"
											type="email"
											id="email"
											name="email"
											required
										/>

										<label
											className="login-form__label order-info__text-big"
											htmlFor="password"
										>
											PASSWORD <span className="red-astrix">*</span>
										</label>
										<br />
										<input
											className="login-form__input"
											type="password"
											id="password"
											name="password"
											required
										/>
									</form>
									<p className="warning-text">* Required Fileds</p>
									<button className="order-info__button" type="button">
										Log in
									</button>
									<a href="#" className="forgot">
										Forgot Password ?
									</a>
								</div>
							</div>
						</details>
					</li>
					<li className="order-info__item">
						<details className="order-info__details">
							<summary className="order-info__summary">
								02. BILLING INFORMATION
							</summary>
						</details>
					</li>
					<li className="order-info__item">
						<details className="order-info__details">
							<summary className="order-info__summary">
								03. SHIPPING INFORMATION
							</summary>
						</details>
					</li>
					<li className="order-info__item">
						<details className="order-info__details">
							<summary className="order-info__summary">
								04. SHIPPING METHOD
							</summary>
						</details>
					</li>
					<li className="order-info__item">
						<details className="order-info__details">
							<summary className="order-info__summary">
								05. PAYMENT METHOD
							</summary>
						</details>
					</li>
					<li className="order-info__item">
						<details className="order-info__details">
							<summary className="order-info__summary">
								06. ORDER REVIEW
							</summary>
						</details>
					</li>
				</ul>
			</div>
		</section>
	);
};
