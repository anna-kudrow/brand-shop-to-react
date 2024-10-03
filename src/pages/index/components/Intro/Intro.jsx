import './Intro.scss';

export const Intro = () => {
  return (
        <section className="intro">
            <div className="intro-content center">
                <div className="intro__moto">
                <img src="images/top_moto_stick.svg" alt="moto decorative stick" />
                <h1 className="intro__moto-text">
                    <span className="moto-up-text">THE BRAND<br /></span>
                    <span className="moto-down-text">
                    OF LUXERIOUS <span className="moto-down-text--colored">FASHION</span>
                    </span>
                </h1>
                </div>
            </div>
    </section>
  )
}
