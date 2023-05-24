import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router'
import { getUser } from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api'
import * as menusAPI from '../../utilities/menus-api'


import './ItemDetail.css'


export default function ItemDetail() {
  const [user, setUser] = useState(getUser())
  const [item, setItem] = useState(null)
  const [itemFormData, setItemFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    menu: '',
  })
  const [menus, setMenus] = useState(null)
  const navigate = useNavigate();
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
        // Find item based on URL
        const itemData = await itemsAPI.show(itemId);
        // Set component item
        setItem(itemData)
        // Preset itemFormData with current itemData
        setItemFormData(itemData)
        // Find menus
        const menusData = await menusAPI.getMenus()
        const userMenus = menusData.filter((menu) => menu.user === user._id)
        setMenus(userMenus)
    }
    fetchItem()
  }, [itemId])

  async function handleChange(evt) {
    const { name, value } = evt.target;
    await setItemFormData({ ...itemFormData, [name]: value})
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      console.log(itemFormData)
      await itemsAPI.updateItem( itemFormData )
      setItemFormData( itemFormData )
    } catch (err) {
      console.log('ItemDetail handleSubmit error', err)
    }
    navigate('/')
  }

  async function handleDeleteItem(evt) {
    evt.preventDefault()
    try {
      console.log(item)
      await itemsAPI.deleteItem(item)
      navigate('/')
    } catch (err) {
      console.log('Error deleting the item', err)
    }
  }

  return (
    <div className="ItemDetailContainer">
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* <select name="menu" value={itemFormData.Menu} onChange={handleChange} required>
          {menus ? (
            menus.map((m) => (
              <option key={m._id} value={m._id}>
                {m.name}
              </option>
            ))
          ) : (
            <option>No Menus Made</option>
          )}
        </select> */}
        <label>Item Name</label>
        <input type="text" name="name" value={itemFormData.name} onChange={handleChange} required />

        <label>Item Description</label>
        <input type="text" name="description" value={itemFormData.description} onChange={handleChange} required />

        <label>Item Price</label>
        <input type="text" name="price" value={itemFormData.price} onChange={handleChange} required />

        <button type="submit">Update Item</button>
      </form>
      <form onSubmit={handleDeleteItem}>
        <button type="submit">Delete Item</button>
      </form>
    </div>
  )
}