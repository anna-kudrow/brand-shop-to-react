import './Arrivals.scss';

export const Arrivals = () => {
	return (
		<section className="arrivals">
			<div className="arrivals__header center">
				<h1 className="arrivals__header-title">New Arrivals</h1>
				<ul className="arrivals__breadcrumps">
					<li className="breadcrumps__item">
						<a href="#" className="breadcrumps__link">
							Home
						</a>
					</li>
					<li className="breadcrumps__item">
						<a href="#" className="breadcrumps__link">
							Men
						</a>
					</li>
					<li className="breadcrumps__item">
						<a href="#" className="breadcrumps__link">
							New Arrivals
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};
