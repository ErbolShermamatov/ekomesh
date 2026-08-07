import { IBoiler } from "../types/boiler.types";
import { IAuxiliaryEquipment } from "../types/boiler.types";
import cyclone from "../assets/cyclone.png";
import smokeExhauster from "../assets/smoke-exhauster.png";
// import ecomesh1500img from '../assets/boiler1500.png';
// import ecomesh1500autoimg from '../assets/boiler1500auto.png';
import ecomeshgas1500 from '../assets/gas-mazut.png';
import ecomesh0102 from '../assets/boiler-0.1-0.2.png';
import eqfan from '../assets/fan.png';
import ecomesh0102poster from '/Эко-Меш КВр 0,1-0,2.pdf';
import ecomesh02505 from '../assets/boiler-0.25-0.5.png';
import ecomesh02505poster from '/Эко-Меш КВр 0,25-0,5.pdf';
import ecomesh0720 from '../assets/boiler-0.7-2.0.png';
import ecomesh0720poster from '/Эко-Меш КВр 0,7-2,0.pdf';
import ecomesh2230 from '../assets/boiler-2.2-3.0.png';
import ecomesh2230poster from '/Эко-Меш КВр 2,2-3,0.pdf';
import ecomeshgas1500poster from '/Эко-Меш КВг 0,5-3,0.pdf';

export const equipments: IAuxiliaryEquipment[] = [
  {
    id: "eq-smoke-exhauster",
    title: "«Промышленный дымосос»",
    types: ['DN-3.5-1500', 'DN-6-1500', 'DN-8-1500', 'DN-10-1500'],
    imageUrl: smokeExhauster,
  },
  {
    id: "eq-cyclone",
    title: "«Циклон-золоуловитель»",
    types: ['ЗУ-1', 'ЗУ-2', 'ЦН-11', 'ЦН-15', 'ЦН-24'],
    imageUrl: cyclone,
  },
  {
    id: "eq-fan",
    title: "«Промышленный вентилятор»",
    types: ['Центробежные', 'Осевые', 'Крышные сред.давления', 'Крышные выс.давления'],
    imageUrl: eqfan,
  },
];

export const boilers: IBoiler[] = [
  {
    id: 'eco-mesh-0,1-0,2',
    title: 'Тип котла: с КВр-0.1 до КВр-0.2\u00A0МВт',
    powerKw: 'от 100 КВт до 200 КВт',
    heatingAreaSqM: 'от 1000 до 2000',
    efficiencyPercent: 'от 84 до 88',
    feedType: 'Ручная',
    fuelType: 'Бурый и каменный уголь',
    imageUrl: ecomesh0102,
    posterUrl: ecomesh0102poster
  },
  {
    id: 'eco-mesh-0,25-0,5',
    title: 'Тип котла: с КВр-0.25 до КВр-0.5\u00A0МВт',
    powerKw: 'от 250 КВт до 500 КВт',
    heatingAreaSqM: 'от 2500 до 5000',
    efficiencyPercent: 'от 84 до 88',
    feedType: 'Ручная',
    fuelType: 'Бурый и каменный уголь',
    imageUrl: ecomesh02505,
    posterUrl: ecomesh02505poster
  },
  {
    id: 'eco-mesh-0,7-2,0',
    title: 'Тип котла: с КВр-0.7 до КВр-2.0\u00A0МВт',
    powerKw: 'от 700 КВт до 2000 КВт',
    heatingAreaSqM: 'от 7000 до 20000',
    efficiencyPercent: 'от 84 до 88',
    feedType: 'Ручная',
    fuelType: 'Бурый и каменный уголь',
    imageUrl: ecomesh0720,
    posterUrl: ecomesh0720poster
  },
  {
    id: 'eco-mesh-2,2-3,0',
    title: 'Тип котла: с КВр-2.2 до КВр-3.0\u00A0МВт',
    powerKw: 'от 2200 КВт до 3000 КВт',
    heatingAreaSqM: 'от 22000 до 30000',
    efficiencyPercent: 'от 84 до 88',
    feedType: 'Ручная',
    fuelType: 'Бурый и каменный уголь',
    imageUrl: ecomesh2230,
    posterUrl: ecomesh2230poster
  },
  // {
  //   id: "eco-mesh-1,5",
  //   title: "Тип котла: КВПр-1.5 МВт",
  //   powerKw: '1500',
  //   heatingAreaSqM: 'до 15000',
  //   efficiencyPercent: '88',
  //   feedType: "Ручная",
  //   fuelType: "Бурый и каменный уголь",
  //   coalFraction: "0-15 мм (штыб, семечка)",
  //   imageUrl: ecomesh1500img,
  // },
  // {
  //   id: "eco-mesh-1,5-auto",
  //   title: "Тип котла: КВПр-1.5 МВт",
  //   powerKw: '1500',
  //   heatingAreaSqM: 'до 15000',
  //   efficiencyPercent: '86',
  //   feedType: "Автоматическая",
  //   fuelType: "Бурый и каменный уголь",
  //   coalFraction: "Рядовой уголь",
  //   imageUrl: ecomesh1500autoimg,
  // },
  {
    id: "eco-mesh-gas-1500",
    title: "Тип котла: от КВг-0.5 до КВг-3.0\u00A0МВт",
    powerKw: 'от 500 до 3000',
    heatingAreaSqM: 'от 5000 до 30000',
    efficiencyPercent: '92',
    feedType: "Автоматическая",
    fuelType: "Газ/Мазут",
    imageUrl: ecomeshgas1500,
    posterUrl: ecomeshgas1500poster
  },
];
