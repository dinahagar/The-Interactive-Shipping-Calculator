export interface Courier {
  id: number;
  name: string;
  basePrice: number;
  taxFees: number;
  totalPrice: number;
  estimatedDeliveryTimeline: number;
  image: string;
}

export interface CourierState {
  couriers: Courier[];
  selectedCourier: Courier | null;
}