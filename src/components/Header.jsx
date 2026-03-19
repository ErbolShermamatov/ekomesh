import { useState } from "react";
import "./Header.scss";
import logoImg from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.documentElement.classList.toggle("is-lock", !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.documentElement.classList.remove("is-lock");
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <img
            src={logoImg}
            alt="Логотип ЭКО-МЕШ Стройматпром"
            className="header__logo-img"
          />
        </a>
        <nav
          className={`header__nav ${isMenuOpen ? "header__nav--active" : ""}`}
        >
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#benefits" className="header__link" onClick={closeMenu}>
                Преимущества
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#catalog" className="header__link" onClick={closeMenu}>
                Каталог котлов
              </a>
            </li>
            <li className="header__menu-item">
              <a
                href="#calculator"
                className="header__link"
                onClick={closeMenu}
              >
                Окупаемость
              </a>
            </li>
            <li className="header__menu-item">
              <a
                href="#production"
                className="header__link"
                onClick={closeMenu}
              >
                Наше произодство
              </a>
            </li>
          </ul>

          <div className="header__mobile-contacts">
            <a
              href="https://wa.me/996552134647"
              target="_blank"
              rel="noopener noreferrer"
              className="header__phone"
            >
              +996 (552) 13-46-47
            </a>
            <a
              href="https://wa.me/996553099494"
              target="_blank"
              rel="noopener noreferrer"
              className="header__phone"
            >
              +996 (553) 09-94-94
            </a>
            <a
              href="#contacts"
              onClick={closeMenu}
              className="btn btn--primary"
              style={{ marginTop: "20px" }}
            >
              Заказать звонок
            </a>
          </div>
        </nav>

        <div className="header__contacts">
          <div className="header__phones">
            <a
              href="https://wa.me/996552134647"
              target="_blank"
              rel="noopener noreferrer"
              className="header__phone header__phone--desktop"
            >
              +996 (552) 13-46-47
            </a>
            <a
              href="https://wa.me/996553099494"
              target="_blank"
              rel="noopener noreferrer"
              className="header__phone header__phone--desktop"
            >
              +996 (553) 09-94-94
            </a>
          </div>

          <a
            href="#contacts"
            className="hidden-laptop btn btn--primary header__btn"
          >
            Заказать звонок
          </a>

          <button
            className={`burger-btn ${isMenuOpen ? "burger-btn--active" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
