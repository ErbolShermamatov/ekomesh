export type BoilerFeedType = "Автоматическая" | "Ручная" | "Комбинированная";
export type FuelType = "Бурый и каменный уголь" | "Газ/Мазут";

export interface IBoiler {
  id: string;
  title: string;
  powerKw: string;
  heatingAreaSqM: string;
  efficiencyPercent: string;
  feedType: BoilerFeedType;
  fuelType: FuelType;
  coalFraction?: string;
  imageUrl: string;
  posterUrl ?: string;
  isBestseller?: boolean;
}

export interface IAuxiliaryEquipment {
  id: string;
  title: string;
  imageUrl: string;
  types: string[];
}
