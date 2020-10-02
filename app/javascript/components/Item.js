import React from 'react';

import MetaTable from './MetaTable'

const Item = ({ name, category, metas}) => (
  <div class="Item">
    <strong>{name}({category.name})</strong>

    <MetaTable list={metas} />

  </div>
)
export default Item;
