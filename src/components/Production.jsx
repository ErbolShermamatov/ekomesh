import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Production.scss';

// Импортируем фотографии производства
import prod1 from '../assets/production-1.jpeg';
import prod2 from '../assets/production-2.jpeg';
import prod3 from '../assets/production-3.jpeg';
import prod4 from '../assets/production-4.jpeg';
import prod5 from '../assets/production-5.jpeg';
import prod6 from '../assets/production-6.jpeg';
import prod7 from '../assets/production-7.jpeg';

const images = [prod1, prod2, prod3, prod4, prod5, prod6, prod7];

function Production() {
  return (
    <section className="production" id="production">
      <div className="container">
        <div className="production__header">
          <h2 className="production__title">Собственное производство в&nbsp;Оше</h2>
          <p className="production__subtitle">
            Линейка промышленных котлов «ЭКО-МЕШ» мощностью от 0.3 МВт до 2.5 МВт готовы к отправке по всему Кыргызстану.
          </p>
        </div>

        <div className="production__navigation-wrapper">
          <button className="production__nav production-prev" aria-label="Предыдущий слайд">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            navigation={{
              prevEl: '.production-prev',
              nextEl: '.production-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="production__slider"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="production-slide">
                  <img loading="lazy" src={img} alt={`Цех Стройматпром ${index + 1}`} className='production-slide-img' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="production__nav production-next" aria-label="Следующий слайд">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}

export default Production;