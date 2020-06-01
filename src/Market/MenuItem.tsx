import React from 'react';
import { useRecoilState } from 'recoil';
import {
  get as _get,
  set as _set,
} from 'lodash';

import {
  cartState,
  inventoryState,
  MarketItem,
} from '../atoms/market';

const MenuItem: React.FC<{ item: MarketItem; }> = ({ item }) => {
  const [cartList, setCartList] = useRecoilState(cartState);
  const [inventoryList, setInventoryList] = useRecoilState(inventoryState);

  const findIndex = (list: Array<MarketItem>) => list.findIndex(({ name }) => name === item.name);

  const cartIndex = findIndex(cartList);
  const inventoryIndex = findIndex(inventoryList);

  const cartQuantity = _get(cartList, [cartIndex, 'quantity'], 0);
  const inventoryQuantity = _get(inventoryList, [inventoryIndex, 'quantity'], 0);
  const inCart = !!cartList[cartIndex];
  const inStock = inventoryQuantity > 0;

  const addToCart = () => {
    const nextCartList = inCart
      ? _set([...cartList], [cartIndex], {
        ...item,
        quantity: cartQuantity + 1,
      })
      : [...cartList, { ...item, quantity: 1 }];
    const nextInventoryList = _set([...inventoryList], [inventoryIndex], {
      ...item,
      quantity: inventoryQuantity - 1,
    });

    setCartList(nextCartList);
    setInventoryList(nextInventoryList);
  };

  return (
    <div>
      <div>{item.name}</div>
      <div>${item.price}</div>
      <div>Left in stock: {inventoryQuantity}</div>
      <button
        disabled={!inStock}
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default MenuItem;
