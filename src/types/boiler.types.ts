export type BoilerFeedType = "Автоматическая" | "Ручная" | "Комбинированная";
export type FuelType = "Бурый и каменный уголь" | "Газ/Мазут";

export interface IBoiler {
  id: string;
  title: string;
  powerKw: number;
  heatingAreaSqM: number;
  efficiencyPercent: number;
  feedType: BoilerFeedType;
  fuelType: FuelType;
  coalFraction?: string;
  imageUrl: string;
  isBestseller?: boolean;
}

export interface IAuxiliaryEquipment {
  id: string;
  title: string;
  imageUrl: string;
}
