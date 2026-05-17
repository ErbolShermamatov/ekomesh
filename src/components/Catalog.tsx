import { useState } from "react";
import "./Catalog.scss";
import boilerImg from "../assets/boiler-card.jpeg";
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
            Подберем оптимальную мощность: от обогрева теплицы до целого завода
          </p>
        </div>

        <div className="catalog__grid">
          {boilers.map((boiler) => (
            <div className="boiler-card" key={boiler.id}>
              {boiler.isBestseller && (
                <div className="boiler-card__badge">Хит продаж</div>
              )}

              <div className="boiler-card__image">
                <img loading="lazy" src={boilerImg} alt={boiler.title} />
              </div>

              <div className="boiler-card__content">
                <h3 className="boiler-card__title">{boiler.title}</h3>

                <ul className="boiler-card__specs">
                  <li className="boiler-card__specs-item">
                    <span>Мощность:</span>
                    <strong>{boiler.powerKw} кВт</strong>
                  </li>
                  <li className="boiler-card__specs-item">
                    <span>Отапливаемая площадь:</span>
                    <strong>
                      до {boiler.heatingAreaSqM.toLocaleString("ru-RU")} м²
                    </strong>
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
