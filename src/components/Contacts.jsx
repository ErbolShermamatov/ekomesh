import "./Contacts.scss";

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__header">
          <h2 className="contacts__title">Приезжайте к нам на производство</h2>
          <p className="contacts__subtitle">
            Мы всегда рады гостям. Покажем цех, расскажем про технологии и
            подберем идеальный котел для вашего бизнеса.
          </p>
        </div>

        <div className="contacts__body">
          <div className="contacts__info">
            <div className="contacts__card">
              <h3 className="contacts__card-title">Наши координаты</h3>

              <ul className="contacts__list">
                <li>
                  <span className="contacts__icon">
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div>
                    <strong>Адрес:</strong>
                    <p>Кыргызстан, г. Ош, пр. Исхак Разакова 19/15</p>
                  </div>
                </li>
                <li>
                  <span className="contacts__icon">
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <div>
                    <strong>Телефон:</strong>
                    <a href="tel:+996552134647" className="contacts__phone">
                      +996 (552) 13-46-47
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contacts__icon">
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <div>
                    <strong>Телефон:</strong>
                    <a href="tel:+996553099494" className="contacts__phone">
                      +996 (553) 09-94-94
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contacts__icon">
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </span>
                  <div>
                    <strong>График работы:</strong>
                    <p>Пн - Пт: 09:00 - 18:00</p>
                  </div>
                </li>
              </ul>

              <a href="https://2gis.kg/osh/search/%D0%B3.%20%D0%9E%D1%88%2C%20%D0%BF%D1%80.%20%D0%98%D1%81%D1%85%D0%B0%D0%BA%20%D0%A0%D0%B0%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2019%2F15/geo/70030076150034442/72.77872%2C40.498887?m=72.77872%2C40.498887%2F15" target="_blank" rel="noopener noreferrer" className="btn btn--primary contacts__btn">
                Проложить маршрут
              </a>
            </div>
          </div>

          <div className="contacts__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24256.097894282542!2d72.76430857431642!3d40.541318800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad006a867d6b%3A0xbea9d97529afe900!2z0KPQuyDQoNCw0LfQt9Cw0LrQvtCy0LAgMTU!5e0!3m2!1sru!2spl!4v1773946169432!5m2!1sru!2spl"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Мы на карте"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
