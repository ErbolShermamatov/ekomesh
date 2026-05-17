import { IBoiler } from '../types/boiler.types';
import { IAuxiliaryEquipment } from '../types/boiler.types';

export const equipments: IAuxiliaryEquipment[] = [
  {
    id: 'eq-smoke-exhauster',
    title: 'Промышленный дымосос (Вентилятор)',
    imageUrl: '/assets/smoke-exhauster.png'
  },
  {
    id: 'eq-cyclone',
    title: 'Циклон-золоуловитель',
    imageUrl: '/assets/cyclone.png'
  },
]

export const boilers: IBoiler[] = [
  {
    id: 'eco-mesh-700',
    title: 'ЭКО-МЕШ 0.7 МВт (Автомат)',
    powerKw: 700,
    heatingAreaSqM: 7000,
    efficiencyPercent: 88,
    feedType: 'Автоматическая',
    fuelType: 'Бурый и каменный уголь',
    coalFraction: '0-15 мм (штыб, семечка)',
    imageUrl: '/assets/boiler-card.jpeg',
    isBestseller: true,
  },
  {
    id: 'eco-mesh-2000',
    title: 'ЭКО-МЕШ 2.0 МВт',
    powerKw: 2000,
    heatingAreaSqM: 20000,
    efficiencyPercent: 86,
    feedType: 'Ручная',
    fuelType: 'Бурый и каменный уголь',
    coalFraction: 'Рядовой уголь',
    imageUrl: '/assets/boiler-card.jpeg',
  },
  {
    id: 'eco-mesh-gas-1500',
    title: 'ЭКО-МЕШ 1.5 МВт (Газ/Мазут)',
    powerKw: 1500,
    heatingAreaSqM: 15000,
    efficiencyPercent: 92,
    feedType: 'Автоматическая',
    fuelType: 'Газ/Мазут',
    imageUrl: '/assets/boiler-card.jpeg',
  }
];
