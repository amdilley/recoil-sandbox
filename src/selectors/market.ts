import { selector } from 'recoil';

import { cartState } from '../atoms/market';

export const cartSummaryState = selector({
  key: 'cartSummaryState',
  get: ({ get }) => {
    const cartList = get(cartState);
    const totalCost = cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ).toFixed(2);

    return {
      totalCost,
    };
  },
});
