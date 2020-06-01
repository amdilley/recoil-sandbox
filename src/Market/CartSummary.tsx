import React from 'react';
import { useRecoilValue } from 'recoil';

import { cartSummaryState } from '../selectors/market';

const CartSummary = () => {
  const { totalCost } = useRecoilValue(cartSummaryState);

  return (
    <div>
      <span>Total: ${totalCost}</span>
    </div>
  );
};

export default CartSummary;
