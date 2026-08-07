import { ICertificate } from '../types/certificate.types';
import cert1Img from '../assets/ЭКО-МЕШ-Деклар.26-preview.jpg';
import cert2Img from '../assets/ЭКО-МЕШ-ПисьмоМин.Энерго-preview.jpg';
import cert3Img from '../assets/ЭКО-МЕШ-Эко.серт.2025г-preview.jpg';

export const certificatesData: ICertificate[] = [
  {
    id: 1,
    title: 'Декларация ЕАЭС',
    text: 'Декларация о соответствии Евразийского экономического союза на котлы КВР и КВМ.',
    fileUrl: '/ЭКО-МЕШ - Деклар.26.pdf',
    imageUrl: cert1Img,
  },
  {
    id: 2,
    title: 'Письмо Мин. Энерго КР',
    text: 'Рекомендательное письмо Министерства энергетики Кыргызской Республики.',
    fileUrl: '/ЭКО-МЕШ - Письмо Мин.Энерго.pdf',
    imageUrl: cert2Img,
  },
  {
    id: 3,
    title: 'Экологический сертификат',
    text: 'Протокол испытаний экологического мониторинга промышленных выбросов.',
    fileUrl: '/ЭКО-МЕШ - Эко.серт.2025г.pdf',
    imageUrl: cert3Img,
  }
];