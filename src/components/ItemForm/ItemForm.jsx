import React, { useState, useContext } from 'react';
import * as itemsAPI from '../../utilities/items-api'
import * as menusAPI from '../../utilities/menus-api'

export default function ItemForm({ user, menus }) {
  const [itemFormData, setItemFormData] = useState({
    name: '',
    price: '',
    category: '',
    menu: menus[0],
    user: user
  })
  const [itemMenuData, setItemMenuData] = useState(null)


  async function handleItemChange(evt) {
      const { name, value } = evt.target;
      await setItemFormData({ ...itemFormData, [name]: value})
  }
  
  function handleMenuChange(evt) {
    const { value } = evt.target;
    const menu = menus.find((m) => m._id === value);
    console.log(menu)
    setItemFormData({ ...itemFormData, menu });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await itemsAPI.createItem( itemFormData )
      setItemFormData({ 
        name: '',
        price: '',
        category: '',
        menu: '',
      })

    } catch {
      
    }
  };
  

  return (
    <div>
    <div className="item-form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <select name="menu" value={itemFormData.Menu} onChange={handleMenuChange} required>
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
        <label>Item Name</label>
        <input type="text" name="name" value={itemFormData.name} onChange={handleItemChange} required />
        <label>Item Price</label>
        <input type="text" name="price" value={itemFormData.price} onChange={handleItemChange} required />
        <label>Item Category</label>
        <input type="text" name="category" value={itemFormData.category} onChange={handleItemChange} required />

        <button type="submit">Add Item</button>
      </form>
    </div>
  </div>
  );
}