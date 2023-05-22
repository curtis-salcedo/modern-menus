import React, { useState, useEffect, useContext } from 'react';
import BusinessContext from '../../utilities/BusinessContext';
import ItemList from '../ItemList/ItemList'
import MenuForm from '../MenuForm/MenuForm'
import { getMenus } from '../../utilities/menus-api'
import './MenuList.css'

export default function MenuList({ user }) {
  const [menus, setMenus] = useState([])
  const { business, setBusiness } = useContext(BusinessContext)

  useEffect(() => {
    const fetchMenus = async () => {
      if (business && business.menus) {
        await ( business )
        const menuList = await getMenus();
        const userMenus = menuList.filter((m) => m.user === user._id)
        setMenus(userMenus)
      }
    }
    fetchMenus()
  }, [])

  return (
    <div  className="MenuListContainer">
      <div>Menu List Area Below</div>
      { menus ?
      <div>
        {menus.map((m) => (
          <div key={m._id}>{m.name}</div>
          ))}
      </div>
        :
        <div>No Menus Yet</div>
        }
      <div className="ItemListContainer"><ItemList user={user} menus={menus} /></div>
      <div className="MenuFormContainer"><MenuForm user={user} /></div>
    </div>
  );
}