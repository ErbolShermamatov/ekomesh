import './Benefits.scss';

const benefitsData = [
  {
    id: 1,
    title: 'Абсолютная экологичность',
    text: 'Двухкамерная система полностью сжигает пиролизный газ. Отсутствует черный дым. Соответствует экологическим нормам КР и ЕС.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Высокий КПД 84-88%',
    text: 'Работает на буром и каменном угле (фракции 0-15мм). Выжимает максимум тепла даже из самого дешевого топлива.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Окупаемость за 1 сезон',
    text: 'Экономия угля до 30%. Разница в стоимости топлива полностью окупает покупку котла всего за 5 месяцев отопительного сезона.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
]

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="container">

        <div className="benefits__header">
          <h2 className="benefits__title">Почему выбирают <span className="text-accent">ЭКО-МЕШ</span>?</h2>
          <p className="benefits__subtitle">Инновационные технологии, которые берегут экологию и ваши деньги</p>
        </div>

        <div className="benefits__grid">
          {benefitsData.map((item) => (
            <div className="benefit-card" key={item.id}>
              <div className="benefit-card__icon">
                {item.icon}
              </div>
              <h3 className="benefit-card__title">{item.title}</h3>
              <p className="benefit-card__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits;