import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router'
import { getUser } from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api'
import * as menusAPI from '../../utilities/menus-api'


import './MenuDetail.css'


export default function MenuDetail() {
  const [user, setUser] = useState(getUser())
  const [menu, setMenu] = useState(null)
  const [menuFormData, setMenuFormData] = useState({
    name: '',
  })

  const navigate = useNavigate();

  // Get menu id from url
  const { menuId } = useParams();
  
  useEffect(() => {
    const fetchMenu = async () => {
        // Find menu based on URL
        const menuData = await menusAPI.show(menuId);
        // Set menu object to object based on url
        setMenu(menuData)
        // Preset menuFormData with current menuData
        setMenuFormData(menuData)
    }
    fetchMenu()
  }, [menuId])

  // Change handle
  async function handleChange(evt) {
    const { name, value } = evt.target;
    await setMenuFormData({ ...menuFormData, [name]: value})
  }

  // Submit Handle
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await menusAPI.updateMenu( menuFormData )
      setMenuFormData( menuFormData )
    } catch (err) {
      console.log('Error deleting menu', err)
    }
    window.location.reload()
  }

  // Delete Handle
  async function handleDeleteMenu(evt) {
    evt.preventDefault()
    try {
      const menuId = menu._id
      console.log(menuId)
      await menusAPI.deleteMenu(menuId)
      navigate('/')
    } catch (err) {
      console.log('Error deleting the menu', err)
    }
  }

  return (
    <div className="MenuDetailContainer">
      <form autoComplete="off" onSubmit={handleSubmit}>

        <label>Sub-Menu Name</label>
        <input type="text" name="name" value={menuFormData.name} onChange={handleChange} required />

        <button type="submit">Update Sub-Menu</button>
      </form>

      <form onSubmit={handleDeleteMenu}>
        <button type="submit">Delete Item</button>
      </form>
    </div>
  )
}