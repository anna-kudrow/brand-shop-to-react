import './Categories.scss'; 

export const Categories = () => {
  return (
        <section className="categories">
      <div className="categories__grid center">
        <a className="categories__item categories__item1">
          <div className="category__name">
            <h2 className="category__name-top">
              hOT dEAL <br />
              <span className="category__name-bottom">FOR MEN</span>
            </h2>
          </div>
          <img
            className="categories__item-img"
            src="images/cat_item1.jpg"
            alt="man"
          />
        </a>
        <a className="categories__item categories__item2">
          <div className="category__name">
            <h2 className="category__name-top">
              30% offer <br />
              <span className="category__name-bottom">women</span>
            </h2>
          </div>
          <img
            className="categories__item-img"
            src="images/cat_item2.jpg"
            alt="woman"
          />
        </a>
        <a className="categories__item categories__item3">
          <div className="category__name">
            <h2 className="category__name-top">
              new arrivals<br />
              <span className="category__name-bottom">FOR kids</span>
            </h2>
          </div>
          <img
            className="categories__item-img"
            src="images/cat_item3.jpg"
            alt="kid"
          />
        </a>
        <a className="categories__item categories__item4">
          <div className="category__name">
            <h2 className="category__name-top">
              LUXIROUS & trendy<br />
              <span className="category__name-bottom">ACCESORIES</span>
            </h2>
          </div>
          <img
            className="categories__item-img"
            src="images/cat_item4.jpg"
            alt="Accessories"
          />
        </a>
      </div>
    </section>
  )
}
