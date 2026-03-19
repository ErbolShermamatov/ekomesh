import './Catalog.scss';
import boilerImg from '../assets/boiler-card.jpeg';

const catalogData = [
  {
    id: 1,
    name: 'ЭКО-МЕШ 0.3 МВт',
    area: 'до 3 000 м²',
    fuel: '300 - 500 кг / сутки',
    price: 'по запросу',
  },
  {
    id: 2,
    name: 'ЭКО-МЕШ 0.7 МВт',
    area: 'до 7 000 м²',
    fuel: '800 - 1350 кг / сутки',
    price: 'по запросу',
    isHit: true,
  },
  {
    id: 3,
    name: 'ЭКО-МЕШ 1.5 МВт',
    area: 'до 15 000 м²',
    fuel: '1500 - 2500 кг / сутки',
    price: 'по запросу',
  },
]

function Catalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="container">
        
        <div className="catalog__header">
          <h2 className="catalog__title">Каталог промышленных котлов</h2>
          <p className="catalog__subtitle">Подберем оптимальную мощность под ваше помещение</p>
        </div>

        <div className="catalog__grid">
          {catalogData.map((boiler) => (
            <div className="boiler-card" key={boiler.id}>
              
              {boiler.isHit && <div className="boiler-card__badge">Хит продаж</div>}

              <div className="boiler-card__image">
                <img loading='lazy' src={boilerImg} alt={boiler.name} />
              </div>

              <div className="boiler-card__content">
                <h3 className="boiler-card__title">{boiler.name}</h3>
                
                <ul className="boiler-card__specs">
                  <li className="boiler-card__specs-item">
                    <span>Отапливаемая площадь:</span>
                    <strong>{boiler.area}</strong>
                  </li>
                  <li className="boiler-card__specs-item">
                    <span>Расход угля:</span>
                    <strong>{boiler.fuel}</strong>
                  </li>
                </ul>
                <div className="boiler-card__footer">
                  <span className="boiler-card__price">{boiler.price}</span>
                  <a href="#contacts" className="btn btn--outline-dark">Узнать цену</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;