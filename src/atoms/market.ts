import { atom } from 'recoil';

export interface MarketItem {
  name: string;
  price: number;
  quantity: number;
}

export const cartState = atom<Array<MarketItem>>({
  key: 'cartState',
  default: [],
});

export const inventoryState = atom<Array<MarketItem>>({
  key: 'inventoryState',
  default: [
    {
      name: 'Crossaint',
      price: 2.99,
      quantity: 10,
    },    
    {
      name: 'Donut',
      price: 0.99,
      quantity: 10,
    },
  ],
});
