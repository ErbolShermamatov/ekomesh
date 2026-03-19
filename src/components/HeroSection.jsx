import './HeroSection.scss';
import heroBg from '../assets/hero-bg.jpeg';


function HeroSection() {
  return (
    <section className='hero' style={{backgroundImage: `url(${heroBg})`}}>
      <div className='hero__overlay'></div>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">Инновационные технологии обогрева</span>
          <h1 className='hero__title'>
            Промышленные котлы <br />
            <span className='text-accent'>ЭКО-МЕШ</span>
          </h1>
          <p className="hero__subtitle">Экологичное тепло для вашего бизнеса с экономией угля до 30%. Окупаемость всего за 1 отопительный сезон.</p>
          <div className="hero__actions">
            <a href="#catalog" className="btn btn--primary">Подобрать котел</a>
            <a href="/price.pdf" download="Прайс-лист_ЭКО-МЕШ.pdf" className="btn btn--outline-white">Скачать прайс-лист</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;