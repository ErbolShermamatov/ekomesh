import { IBoiler } from "../types/boiler.types";
import { IAuxiliaryEquipment } from "../types/boiler.types";
import cyclone from "../assets/cyclone.png";
import smokeExhauster from "../assets/smoke-exhauster.png";
import ecomesh1500img from '../assets/boiler1500.png';
import ecomesh1500autoimg from '../assets/boiler1500auto.png';
import ecomeshgas1500 from '../assets/gas-mazut.jpg';
import eqfan from '../assets/fan.png';

export const equipments: IAuxiliaryEquipment[] = [
  {
    id: "eq-smoke-exhauster",
    title: "«Промышленный дымосос» типа: DN-3.5-1500, DN-6-1500, DN-8-1500, DN-10-1500",
    imageUrl: smokeExhauster,
  },
  {
    id: "eq-cyclone",
    title: "«Циклон-золоуловитель» типа: ЗУ-1, ЗУ-2, ЦН-11, ЦН-15, ЦН-24",
    imageUrl: cyclone,
  },
  {
    id: "eq-fan",
    title: "Промышленные вентиляторы типа: центробежные, осевые, крышные среднего и высокого давления",
    imageUrl: eqfan,
  },
];

export const boilers: IBoiler[] = [
  {
    id: "eco-mesh-700",
    title: "Тип котла: КВПр-1.5 МВт (Ручная подача угля)",
    powerKw: 1500,
    heatingAreaSqM: 15000,
    efficiencyPercent: 88,
    feedType: "Ручная",
    fuelType: "Бурый и каменный уголь",
    coalFraction: "0-15 мм (штыб, семечка)",
    imageUrl: ecomesh1500img,
  },
  {
    id: "eco-mesh-700-auto",
    title: "Тип котла: КВПр-1.5 МВт (Механическая подача угля)",
    powerKw: 1500,
    heatingAreaSqM: 15000,
    efficiencyPercent: 86,
    feedType: "Автоматическая",
    fuelType: "Бурый и каменный уголь",
    coalFraction: "Рядовой уголь",
    imageUrl: ecomesh1500autoimg,
  },
  {
    id: "eco-mesh-gas-1500",
    title: "Тип котла: КВГМ-1.5 МВт (Газ/Мазут)",
    powerKw: 1500,
    heatingAreaSqM: 15000,
    efficiencyPercent: 92,
    feedType: "Автоматическая",
    fuelType: "Газ/Мазут",
    imageUrl: ecomeshgas1500,
  },
];
