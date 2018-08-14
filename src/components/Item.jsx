import React from 'react';

const Item = ({body, title}) => {
  return (
    <li>
      <strong>{title}</strong>
      <span>{body}</span>
    </li>
  );
};

export default Item;
