import React from 'react';
import { useRecoilValue } from 'recoil';

import { cartState } from '../atoms/market';

import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  const cartList = useRecoilValue(cartState);

  return (
    <div>
      {cartList.map((cartItem) => (
        <CartItem
          key={cartItem.name}
          item={cartItem}
        />
      ))}
      <CartSummary/>
    </div>
  );
};

export default Cart;
