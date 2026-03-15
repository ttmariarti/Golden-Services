import './App.css'
import circle1 from './assets/Combined shape 134.png'
import circle2 from './assets/Combined shape 132.png'
import circle3 from './assets/Combined shape 130.png'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__brand">Golden</div>
        <nav className="nav">
          <a href="#home" className="nav__link">
            Home
          </a>
          <a href="#services" className="nav__link">
            Services
          </a>
          <a href="#portfolio" className="nav__link">
            Portfolio
          </a>
          <a href="#about" className="nav__link">
            About
          </a>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="services" className="section section--light">
          <div className="container">
            <h2 className="section__title">SERVICES</h2>
            <div className="services">
              <article className="service">
                <img src={circle1} alt="E-Commerce" className="service__icon" />
                <h3 className="service__title">E-Commerce</h3>
                <p className="service__description">
                  Proin iaculis purus consequat sem cure dignissim. Donec porttitor entum suscipit aenean rhoncus posuere odio in tincidunt.
                </p>
              </article>

              <article className="service">
                <img src={circle2} alt="Responsive Web" className="service__icon" />
                <h3 className="service__title">Responsive Web</h3>
                <p className="service__description">
                  Proin iaculis purus consequat sem cure dignissim. Donec porttitor entum suscipit aenean rhoncus posuere odio in tincidunt.
                </p>
              </article>

              <article className="service">
                <img src={circle3} alt="Web Security" className="service__icon" />
                <h3 className="service__title">Web Security</h3>
                <p className="service__description">
                  Proin iaculis purus consequat sem cure dignissim. Donec porttitor entum suscipit aenean rhoncus posuere odio in tincidunt.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--dark">
          <div className="container">
            <h2 className="section__title section__title--light">CONTACT US</h2>
            <div className="contact">
              <form className="contact__form">
                <div className="contact__fields">
                  <label className="field">
                    <span className="field__label">Your Name *</span>
                    <input className="field__input" type="text" placeholder="Your name" required />
                  </label>
                  <label className="field">
                    <span className="field__label">Your Email *</span>
                    <input className="field__input" type="email" placeholder="Your email" required />
                  </label>
                  <label className="field">
                    <span className="field__label">Subject</span>
                    <input className="field__input" type="text" placeholder="Subject" />
                  </label>
                </div>

                <label className="field field--message">
                  <span className="field__label">Your Message *</span>
                  <textarea
                    className="field__input field__input--textarea"
                    rows={6}
                    placeholder="Your message"
                    required
                  />
                </label>

                <button type="submit" className="button">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__content">
          <span className="footer__credit">Built with React + Vite</span>
        </div>
      </footer>
    </div>
  )
}
