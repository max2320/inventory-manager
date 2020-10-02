import React from 'react';


const MetaItem = ({ key, value }) => (
  <tr>
    <th>{key}</th>
    <td>{value}</td>
  </tr>
)
const MetaTable = ({ list }) => (
  <table>
    <tbody>
      {list.map((meta) => (<MetaItem {...meta} />))}
    </tbody>
  </table>
)

export default MetaTable;
