import React from 'react';


const MetaTable = ({ list }) => (
  <table>
    <tbody>
      {list.map((meta) => (<MetaItem {...meta} />))}
    </tbody>
  </table>
)

export default MetaTable;
