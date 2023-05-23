import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as menusAPI from '../../utilities/business-api'
import { createMenu } from '../../utilities/business-service';
import { getMenus } from '../../utilities/menus-api';

import './MenuForm.css'

export default function MenuForm({ user, setUser, business, setBusiness, handleCloseMenuForm }) {
  const [menuFormData, setMenuFormData] = useState({
    name: '',
    category: '',
    business: user.business,
    user: user
  })  
  const [ selectedMenu ,setSelectedMenu ] = useState(null)
  const navigate = useNavigate();
  
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


  async function handleMenuDetail(menuId) {
    setSelectedMenu(menuId);
  }

  return (
    <div className="MenuFormContainer">

        <form autoComplete="off" onSubmit={handleSubmit}>

          <div className="MenuFormInputs">
            <div>
              <label>Menu Name</label>
              <input type="text" name="name" value={menuFormData.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Menu Category</label>
              <input type="text" name="category" value={menuFormData.category} onChange={handleChange} required />
            </div>
          </div>
          <div className='MenuFormButtons'>
            <button type="submit">Add Menu</button>
            <button onClick={handleCloseMenuForm}>Cancel</button>
          </div>
          
        </form>

          <button onSubmit={handleMenuDetail} type="submit">FIX BUTTON TO EDIT MENU!</button>
      <div>
      </div>

    </div>
  );
}