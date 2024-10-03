import './Bottom.scss';


export const Bottom = () => {
  return (
        <section className="bottom-navigation">
      <div className="bottom-navigation__content center">
        <div className="bottom-navigation__left-block">
          <a className="logo-link" href="index.html">
            <img src="images/logo.jpg" alt="logo" />
            <p className="logo-text">
              BRAN<span className="logo-text logo-text--colored">D</span>
            </p>
          </a>
          <div className="bottom-navigation__scroll-info">
            <p className="left-block__text">
              Objectively transition extensive data rather than cross functional
              solutions. Monotonectally syndicate multidisciplinary materials
              before go forward benefits. Intrinsicly syndicate an expanded
              array of processes and cross-unit partnerships.
            </p>
            <p className="left-block__text">
              Efficiently plagiarize 24/365 action items and focused
              infomediaries. Distinctively seize superior initiatives for
              wireless technologies. Dynamically optimize. Objectively
              strategize seamless relationships via resource sucking testing
              procedures. Proactively cultivate next-generation results for
              value-added methodologies. Dynamically plagiarize unique
              methodologies after performance based methodologies.
              Monotonectally empower stand-alone mindshare rather than
              ubiquitous opportunities. Dynamically orchestrate resource sucking
              scenarios after alternative synergy. Compellingly envisioneer
              corporate methods of empowerment before standards compliant
              technologies. Objectively facilitate progressive.
            </p>
          </div>
        </div>
        <div className="bottom-navigation__right-block">
          <nav className="bottom-navigation__nav">
            <div className="bottom-navigation__nav-block">
              <h2 className="nav-block__nav-title">COMPANY</h2>
              <ul className="nav-block__nav-list">
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Home</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Shop</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">About</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">How It Works</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Contact</li></a>
              </ul>
            </div>

            <div className="bottom-navigation__nav-block">
              <h2 className="nav-block__nav-title">INFORMATION</h2>
              <ul className="nav-block__nav-list">
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Tearms & Condition</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Privacy Policy</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">How to Buy</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">How to Sell</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Promotion</li></a>
              </ul>
            </div>

            <div className="bottom-navigation__nav-block">
              <h2 className="nav-block__nav-title">SHOP CATEGORY</h2>
              <ul className="nav-block__nav-list">
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Men</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Women</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Child</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Apparel</li></a>
                <a href="#" className="nav-item__link"
                  ><li className="nav-block__nav-item">Brows All</li></a>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
