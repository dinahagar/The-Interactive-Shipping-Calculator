export interface Courier {
  id: number;
  name: string;
  basePrice: number;
  taxFees: number;
  totalPrice: number;
  estimatedDeliveryTimeline: string;
  image: string;
}