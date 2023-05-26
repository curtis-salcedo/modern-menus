import React, { useState, useContext } from 'react';
import * as itemsAPI from '../../utilities/items-api'
import * as menusAPI from '../../utilities/menus-api'

import './ItemForm.css'

export default function ItemForm({ user, menus, handleAddItemClose }) {
  const [itemFormData, setItemFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    menu: menus[0],
    user: user
  })
  
  async function handleItemChange(evt) {
      const { name, value } = evt.target;
      await setItemFormData({ ...itemFormData, [name]: value})
  }
  
  function handleMenuChange(evt) {
    const { value } = evt.target;
    const menu = menus.find((m) => m._id === value);
    setItemFormData({ ...itemFormData, menu });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      console.log(itemFormData.menu)
      await itemsAPI.createItem( itemFormData )
      setItemFormData({ 
        name: '',
        price: '',
        category: '',
        description: '',
        menu: menus[0],
      })
      handleAddItemClose();
    } catch (err) {
      console.log('ItemForm Error', err)
    }
    window.location.reload();
  };  


  return (
    <div className="ItemFormContainer">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="ItemFormSelect">
          <label>Menu</label>
          <select name="menu" value={itemFormData.menu} onChange={handleMenuChange} required>
            {menus ? (
              menus.map((m) => (
                <option key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))
              ) : (
                <option>No Menus Made</option>
                )}
          </select>
        </div>

        <div className="ItemFormInputs">
          <div>
            <div>
              <label>Item Name</label>
              <input type="text" name="name" value={itemFormData.name} onChange={handleItemChange} required />
            </div>
            <div>
              <label>Item Price</label>
              <input type="text" name="price" value={itemFormData.price} onChange={handleItemChange} required />
            </div>
          </div>
          <div>
            <label>Item Description</label>
            <input className="ItemDescriptionInput" type="text" name="description" value={itemFormData.description} onChange={handleItemChange} required />
          </div>
        </div>

        <div className="ItemFormButtons">
          <button className="MenuFormButtons" type="submit">Add Item</button>
          <button className="MenuFormButtons" onClick={handleAddItemClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}