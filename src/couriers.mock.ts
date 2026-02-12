export interface Courier {
  id: string;
  name: string;
  basePrice: number;
  taxFees: number;
  totalPrice: number;
  estimatedDeliveryTimeline: string;
}

export const couriers: Courier[] = [
  {
    id: "1",
    name: "DHL Express",
    basePrice: 25,
    taxFees: 5,
    totalPrice: 30,
    estimatedDeliveryTimeline: "1-2 business days",
  },
  {
    id: "2",
    name: "FedEx International",
    basePrice: 22,
    taxFees: 4.4,
    totalPrice: 26.4,
    estimatedDeliveryTimeline: "2-4 business days",
  },
  {
    id: "3",
    name: "UPS Standard",
    basePrice: 18,
    taxFees: 3.6,
    totalPrice: 21.6,
    estimatedDeliveryTimeline: "3-5 business days",
  },
  {
    id: "4",
    name: "Aramex",
    basePrice: 15,
    taxFees: 3,
    totalPrice: 18,
    estimatedDeliveryTimeline: "4-6 business days",
  },
  {
    id: "5",
    name: "Local Courier",
    basePrice: 10,
    taxFees: 2,
    totalPrice: 12,
    estimatedDeliveryTimeline: "1-3 business days",
  },
];