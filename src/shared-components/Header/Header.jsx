import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
	return (
		<header className="main-header">
			<div className="main-header__header-top center">
				<div className="header-top__left">
					<Link to={`/`} className="logo-link">
						<img src="images/logo.jpg" alt="logo" />
						<p className="logo-text">
							BRAN<span className="logo-text logo-text--colored">D</span>
						</p>
					</Link>
					<div className="header-top__search-field">
						<button className="search-field__button" type="button">
							<details className="header-top__browse">
								<summary className="browse-summary">
									<p>Browse</p>
								</summary>
								<div className="browse__details">
									<h3 className="header-top__browse-title">Women</h3>
									<ul className="browse__dropdown-list">
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Dresses
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Tops
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Sweaters/Knits
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Jackets/Coats
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Blazers
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Denim
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Leggings/Pants
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Skirts/Shorts
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Accessories
											</a>
										</li>
									</ul>
									<h3 className="header-top__browse-title">Men</h3>
									<ul className="browse__dropdown-list">
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Tees/Tank tops
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Shirts/Polos
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Sweaters
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Sweatshirts/Hoodies
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Blazers
											</a>
										</li>
										<li className="browse__dropdown-item">
											<a href="#" className="browse__dropdown-link">
												Jackets/vests
											</a>
										</li>
									</ul>
								</div>
							</details>
						</button>
						<form action="#" method="get">
							<label htmlFor="search">
								<input
									className="search-field__search-input"
									type="search"
									name="search"
									id="search"
									placeholder="Search for Item..."
								/>
							</label>
						</form>
						<button className="search-field__search-button">
							<img src="images/search.jpg" alt="search" />
						</button>
					</div>
				</div>
				<div className="header-top__right">
					<details className="header-top__right-details">
						<summary>
							<img
								className="basket__button"
								src="images/basket.svg"
								alt="basket"
							/>
						</summary>
						<div className="bascket-box">
							<div className="total-summ">
								<p className="total-text">TOTAL</p>
								<p className="total-text__amount"></p>
							</div>
							<div className="purchase__buttons">
								<Link
									to={'/checkout'}
									className="purchase__button"
									type="button"
								>
									Checkout
								</Link>
								<Link
									to={'/shopping-card'}
									className="purchase__button"
									type="button"
								>
									Go to cart
								</Link>
							</div>
						</div>
					</details>
					<button className="main-header__account-button button" type="button">
						<p className="account-button__text">My Account</p>
					</button>
				</div>
			</div>
			<div className="main-header__header-bottom">
				<nav className="header-bottom__nav">
					<ul className="header-bottom__nav-list">
						<li className="header-bottom__nav-item">
							<a href="/" className="menu-link">
								Home
							</a>
							<div className="mega-box">
								<div className="mega-item">
									<h3 className="mega-title">Style</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
									<a href="#" className="mega-link">
										Swimwear/Underwear
									</a>
									<a href="#" className="mega-link">
										Nightwear
									</a>
									<a href="#" className="mega-link">
										Shoes
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Decor</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Dish</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Glasses</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
							</div>
						</li>
						<li className="header-bottom__nav-item">
							<Link to={'men-products'} className="menu-link">
								Man
							</Link>
							<div className="mega-box">
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
									<a href="#" className="mega-link">
										Swimwear/Underwear
									</a>
									<a href="#" className="mega-link">
										Nightwear
									</a>
									<a href="#" className="mega-link">
										Shoes
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
							</div>
						</li>
						<li className="header-bottom__nav-item">
							<a href="#" className="menu-link">
								Women
							</a>
							<div className="mega-box">
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
									<a href="#" className="mega-link">
										Swimwear/Underwear
									</a>
									<a href="#" className="mega-link">
										Nightwear
									</a>
									<a href="#" className="mega-link">
										Shoes
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
							</div>
						</li>
						<li className="header-bottom__nav-item">
							<a href="#" className="menu-link">
								Kids
							</a>
							<div className="mega-box">
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
									<a href="#" className="mega-link">
										Swimwear/Underwear
									</a>
									<a href="#" className="mega-link">
										Nightwear
									</a>
									<a href="#" className="mega-link">
										Shoes
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
							</div>
						</li>
						<li className="header-bottom__nav-item reverse">
							<a href="#" className="menu-link">
								Accoseriese
							</a>
							<div className="mega-box">
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
									<a href="#" className="mega-link">
										Swimwear/Underwear
									</a>
									<a href="#" className="mega-link">
										Nightwear
									</a>
									<a href="#" className="mega-link">
										Shoes
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
							</div>
						</li>
						<li className="header-bottom__nav-item reverse">
							<a href="#" className="menu-link">
								Featured
							</a>
							<div className="mega-box">
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
									<a href="#" className="mega-link">
										Swimwear/Underwear
									</a>
									<a href="#" className="mega-link">
										Nightwear
									</a>
									<a href="#" className="mega-link">
										Shoes
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
							</div>
						</li>
						<li className="header-bottom__nav-item reverse">
							<a href="#" className="menu-link">
								Hot Deals
							</a>
							<div className="mega-box">
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
									<a href="#" className="mega-link">
										Swimwear/Underwear
									</a>
									<a href="#" className="mega-link">
										Nightwear
									</a>
									<a href="#" className="mega-link">
										Shoes
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
									<a href="#" className="mega-link">
										Beauty
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
								</div>
								<div className="mega-item">
									<h3 className="mega-title">Women</h3>
									<a href="#" className="mega-link">
										Dresses{' '}
									</a>
									<a href="#" className="mega-link">
										Skirts/Shorts
									</a>
									<a href="#" className="mega-link">
										{' '}
										Accessories
									</a>
									<a href="#" className="mega-link">
										Bags/Purses
									</a>
								</div>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
