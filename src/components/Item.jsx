import React from 'react';

const Item = ({body, title}) => {
  return (
    <li>
      <h1>{title}</h1>
      <span>{body}</span>
    </li>
  );
};

export default Item;
