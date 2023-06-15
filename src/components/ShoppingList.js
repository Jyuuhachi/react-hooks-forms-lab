import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const lowerCaseName = item.name.toLowerCase()
    if (selectedCategory === "All" && search === ""){
       return true;
    }
    else if (selectedCategory === "All" && lowerCaseName.includes(search)) {
      return true;
    }
    else {
    return (item.category === selectedCategory && lowerCaseName.includes(search));
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm addNewItem={addNewItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
