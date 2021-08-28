import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const filteredItems = items.filter(({category}) => {
    if (selectedCategory === 'All') {
      return true;
    }
    return selectedCategory === category;
  })

  function handleSelection(event) {
    setSelectedCategory(() => event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

//using state
  //call state variable 'selectedCategory'
  //when the value of the select element is changed update state
  //should also use selectedCategory to determine which items to display in the shopping list