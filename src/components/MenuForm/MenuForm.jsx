import React, { useState } from 'react';
import { create } from '../../utilities/users-service';

export default function MenuForm({ user, setUser, business, setBusiness }) {
  
  const [menuFormData, setMenuFormData] = useState({
    name: '',
    category: '',
    business: business,
    user: user
  })

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await create(menuFormData);
    } catch {
    
    }
  };
  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setMenuFormData({ ...menuFormData, [name]: value })
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