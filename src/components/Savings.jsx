import './Savings.scss';

function Savings() {
  return (
    <section className="savings" id="calculator">
      <div className="container">
        
        <div className="savings__header">
          <h2 className="savings__title">
            Калькулятор окупаемости <span className="text-accent">(0.7&nbsp;МВт)</span>
          </h2>
          <p className='savings__subtitle'>
            В примере котла КВПр-0.7 (0.6 ГКал/ч)
          </p>
          <p className="savings__subtitle">
            Сравнение затрат за 1 отопительный сезон (5 месяцев)
          </p>
        </div>

        <div className="savings__compare">
          <div className="compare-card compare-card--bad">
            <h3 className="compare-card__title">Стандартный котел</h3>
            <div className="compare-card__body">
              <div className="compare-card__row">
                <span>КПД:</span>
                <strong>76-78</strong>
              </div>
              <div className="compare-card__row">
                <span>Расход в сутки в среднем за отопительный сезон:</span>
                <strong>1800 кг</strong>
              </div>
              <div className="compare-card__row">
                <span>Требуемый уголь:</span>
                <strong>Марки БК, БР (крупный)</strong>
              </div>
              <div className="compare-card__row">
                <span>Цена угля:</span>
                <strong>~ 6 сом / кг</strong>
              </div>
            </div>
            <div className="compare-card__footer">
              <span>Затраты за сезон:</span>
              <span className="compare-card__price">1 620 000 <span>сом</span></span>
            </div>
          </div>

          <div className="savings__vs">VS</div>

          <div className="compare-card compare-card--good">
            <div className="compare-card__badge">Выбор умного бизнеса</div>
            <h3 className="compare-card__title">Котел «ЭКО-МЕШ»</h3>
            <div className="compare-card__body">
              <div className="compare-card__row">
                <span>КПД:</span>
                <strong>86-88</strong>
              </div>
              <div className="compare-card__row">
                <span>Расход в сутки в среднем <br /> за отопительный сезон:</span>
                <strong>1300 кг</strong>
              </div>
              <div className="compare-card__row">
                <span>Требуемый уголь:</span>
                <strong>БР + БСШ</strong>
              </div>
              <div className="compare-card__row">
                <span>Цена угля:</span>
                <strong>5 сом / кг</strong>
              </div>
            </div>
            <div className="compare-card__footer">
              <span>Затраты за сезон:</span>
              <span className="compare-card__price">975 000 <span>сом</span></span>
            </div>
          </div>
        </div>

        <div className="savings__total">
          <div className="savings__total-text">
            <h4 className='saving__total-title'>Чистая экономия за 1 сезон:</h4>
            <p>Разница окупает стоимость котла на 90%</p>
          </div>
          <div className="savings__total-sum">
            645 000 <span>сом</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Savings;