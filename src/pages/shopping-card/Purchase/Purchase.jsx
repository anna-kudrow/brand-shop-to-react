export const Purchase = ({ item }) => {
	return (
		<div className="shopping__item shopping__grid">
			<div className="grid__left">
				<a href="#" className="shopping__link">
					<img src={item.src} style={{ width: '100px' }} alt="black jacket" />
				</a>
				<div className="grid__discription">
					<p className="description__name">{item.title}</p>
					<p className="description__details">
						Color: <span className="description__details--lighter">Red</span>
					</p>
					<p className="description__details">
						Size:{' '}
						<span className="description__details--lighter">{item.size}</span>
					</p>
				</div>
			</div>
			<p className="shopping__info">{item.price}</p>
			<p className="shopping__info">1</p>
			<p className="shopping__info">FREE</p>
			<p className="shopping__info">...</p>
			<img className="shopping__info" src="images/cancel.jpg" alt="cancel" />
		</div>
	);
};
