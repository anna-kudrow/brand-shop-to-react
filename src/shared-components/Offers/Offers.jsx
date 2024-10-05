import './Offers.scss';

export const Offers = () => {
  return (
        <section className="offers">
      <div className="offers-content center">
        <div className="offers-content-pic">
          <img
            className="offers-content-pic__img"
            src="images/offers_bg.jpg"
            alt="woman in winter clothes"
          />
          <div className="offers-content-pic__info">
            <span className="offers-content-pic__text">30%</span>
            <span
              className="offers-content-pic__text offers-content-pic__text--colored"
            >
              OFFER</span><br /><span
              className="offers-content-pic__text offers-content-pic__text-bottom"
              >FOR WOMEN</span>
          </div>
        </div>
        <div className="offers-content-info">
          <div className="offers-content-info__inner">
            <div className="offers-content-info__inner-item">
              <img
                className="inner-item__icon"
                src="images/offers_delivery.svg"
                alt="delivery-car icon"
              />
              <div className="inner-item__info">
                <h3 className="inner-item__title">Free Delivery</h3>
                <p className="inner-item__text">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </div>
            </div>
            <div className="offers-content-info__inner-item">
              <img
                className="inner-item__icon"
                src="images/offers_discount.svg"
                alt="discount icon"
              />
              <div className="inner-item__info">
                <h3 className="inner-item__title">Sales & discounts</h3>
                <p className="inner-item__text">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </div>
            </div>
            <div className="offers-content-info__inner-item">
              <img
                className="inner-item__icon"
                src="images/offers_quality.svg"
                alt="crown icon"
              />
              <div className="inner-item__info">
                <h3 className="inner-item__title">Quality assurance</h3>
                <p className="inner-item__text">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
