import { useState } from "react";
import "./Catalog.scss";
import { boilers, equipments } from "../data/boilers.data";
import OrderModal from "./OrderModal";

function Catalog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <div className="catalog__header">
          <h2 className="catalog__title">Каталог промышленных котлов</h2>
          <p className="catalog__subtitle">
            Тип и модель котла в зависимости от вида топлива и способа подачи
          </p>
        </div>

        <div className="catalog__grid">
          {boilers.map((boiler) => (
            <div className="boiler-card" key={boiler.id}>
              {boiler.isBestseller && (
                <div className="boiler-card__badge">Хит продаж</div>
              )}

              <div className="boiler-card__image">
                <img loading="lazy" src={boiler.imageUrl} alt={boiler.title} />
              </div>

              <div className="boiler-card__content">
                <h3 className="boiler-card__title">
                  <p className="boiler-card__name">«ЭКО-МЕШ»</p>
                  <p>{boiler.title}</p>
                </h3>

                <ul className="boiler-card__specs">
                  <li className="boiler-card__specs-item">
                    <span>Мощность:</span>
                    <strong>{boiler.powerKw} кВт</strong>
                  </li>
                  <li className="boiler-card__specs-item">
                    <span>
                      {boiler.title === "Тип котла: КВГМ-1.5 МВт (Газ/Мазут)"
                        ? "Вид топлива"
                        : "Марка угля"}
                    </span>
                    <strong>{boiler.fuelType}</strong>
                  </li>
                  <li className="boiler-card__specs-item">
                    <span>Отапливаемая площадь:</span>
                    <strong>{boiler.heatingAreaSqM}&nbsp;м²</strong>
                  </li>
                  <li className="boiler-card__specs-item">
                    <span>КПД:</span>
                    <strong>{boiler.efficiencyPercent}%</strong>
                  </li>
                  <li className="boiler-card__specs-item">
                    <span>Подача угля:</span>
                    <strong>{boiler.feedType}</strong>
                  </li>
                </ul>

                <div className="boiler-card__footer">
                  {boiler.posterUrl ? (
                    <a
                      href={boiler.posterUrl}
                      className="btn btn--outline-primary boiler-card__download-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Открыть подробную информацию
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ width: "1.25em", height: "1.25em" }}
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn btn--outline-dark"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    Получить расчет стоимости
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="catalog__equipment">
          <h2>Дополнительное котельное оборудование</h2>
          <div className="catalog__equip-grid">
            {equipments.map((equip) => (
              <div className="boiler-equip-card" key={equip.id}>
                <div className="boiler-equip-card__img">
                  <img src={equip.imageUrl} alt={equip.title} loading="lazy" />
                </div>
                <div className="boiler-equip-card__content">
                  <h3 className="boiler-equip-card__title">{equip.title}</h3>
                  <div className="boiler-equip-card__info">
                    <h4 className="boiler-equip-card__type-title">Типа:</h4>
                    <ul className="boiler-equip-card__types">
                      {equip.types.map((type) => (
                        <li
                          className="boiler-equip-card__types-item"
                          key={type}
                        >
                          - {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default Catalog;
