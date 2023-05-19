import React, { useState } from 'react';
import { create } from '../../utilities/users-service';

export default function ItemForm({ user, setUser, menu, setMenu }) {
  
  const [itemFormData, setitemFormData] = useState({
    name: '',
    category: '',

  })

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await create(itemFormData);
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
          <label>Item Category</label>
          <input type="text" name="category" value={itemFormData.category} onChange={handleChange} required />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}