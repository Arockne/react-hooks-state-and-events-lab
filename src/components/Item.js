import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState('')
  const buttonText = inCart ? 'Remove From Cart' : 'Add to Cart';
  const inCartColor = { 
    background: (inCart ? 'fuchsia' : 'yellow'), 
    color: (inCart ? 'white' : 'black') 
  }


  function handleClick(event) {
      const cartState = inCart ? '' : 'in-cart';
      setInCart(() => cartState)
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick} style={inCartColor}>{buttonText}</button>
    </li>
  );
}

export default Item;