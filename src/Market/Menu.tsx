import React from 'react';
import { useRecoilValue } from 'recoil';

import { inventoryState } from '../atoms/market';

import MenuItem from './MenuItem';

const Menu = () => {
  const menuList = useRecoilValue(inventoryState);

  return (
    <div>
      {menuList.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          item={menuItem}
        />
      ))}
    </div>
  );
};

export default Menu;
