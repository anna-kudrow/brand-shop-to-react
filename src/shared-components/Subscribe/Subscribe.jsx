import './Subscribe.scss';

export const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-content center">
        <div className="subscribe__reviews">
          <img
            src="images/reviewer.jpg"
            alt="reviewer"
            className="reviewer__photo"
          />
          <div className="review__content">
            <p className="review__text">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum a. Aliquam condimentum mattis neque sed
              pretium”
            </p>
            <p className="reviewer__name">Bin Burhan</p>
            <p className="reviewer__city">Dhaka, Bd</p>
          </div>
        </div>
        <div className="subscribe__subscribtion">
          <h2 className="subscribtion__title">
            Subscribe <br /><span className="subscribtion__subtitle"
              >FOR OUR NEWLETTER AND PROMOTION</span>
          </h2>
          <form className="subscribtion__form" action="#" method="post">
            <label htmlFor="email">
              <input
                className="subscribtion__field"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </label>
            <button className="subscribtion__button button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
