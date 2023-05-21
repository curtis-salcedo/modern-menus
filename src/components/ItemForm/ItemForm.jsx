import React, { useState } from 'react';
import * as businessAPI from '../../utilities/business-api'

export default function ItemForm({ menu, business }) {
  console.log(business)
  const [itemFormData, setitemFormData] = useState({
    name: '',
    price: '',
    category: '',
    menu: menu,
  })

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await businessAPI.createItem(itemFormData, menu);

    } catch {
    
    }
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setitemFormData({ ...itemFormData, [name]: value })
  };


  return (
    <div>
      <div className="item-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>

          <label>Item Name</label>
          <input type="text" name="name" value={itemFormData.name} onChange={handleChange} required />
          <label>Item Price</label>
          <input type="text" name="price" value={itemFormData.price} onChange={handleChange} required />
          <label>Item Category</label>
          <input type="text" name="category" value={itemFormData.category} onChange={handleChange} required />

          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}