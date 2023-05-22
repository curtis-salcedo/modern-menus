import React, { useState } from 'react';
import * as menusAPI from '../../utilities/business-api'
import { createMenu } from '../../utilities/business-service';

export default function MenuForm({ user, setUser, business, setBusiness }) {
  const [menuFormData, setMenuFormData] = useState({
    name: '',
    category: '',
    business: user.business,
    user: user
  })  
  
    function handleChange(evt) {
      const { name, value } = evt.target;
      setMenuFormData({ ...menuFormData, [name]: value })
    };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newMenu = await createMenu(menuFormData);
      await setBusiness({ ...business, menu: newMenu._id })
    } catch {
    
    }
  };

  return (
    <div>
      <div className="menu-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Menu Name</label>
          <input type="text" name="name" value={menuFormData.name} onChange={handleChange} required />
          <label>Menu Category</label>
          <input type="text" name="category" value={menuFormData.category} onChange={handleChange} required />
          <button type="submit">Add Menu</button>
        </form>
      </div>
    </div>
  );
}