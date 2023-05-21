import React, { useState, useEffect, useContext } from 'react';
import ItemList from '../ItemList/ItemList'
import MenuForm from '../MenuForm/MenuForm'
import BusinessContext from '../../utilities/BusinessContext';
import { getMenus } from '../../utilities/menus-api'
import './MenuList.css'

export default function MenuList({ user }) {
  const { business } = useContext(BusinessContext)
  const [menus, setMenuts] = useState([])

  useEffect(() => {
    const fetchMenus = async () => {
      if (business && business.menus) {
        const menuList = await getMenus();
        setMenuts(menuList)
      }
    }
    fetchMenus()
  }, [])

  return (
    <div className="MenuList">
      <div>Menu List Area Below</div>
      <div>Menu Form Below</div>
      { menus ?
      <div>
        {menus.map((m) => (
          <div>{m.name}</div>
          ))}
      </div>
        :
        <div>No Menus Yet</div>
        }
      <div><MenuForm user={user} /></div>
      <div><ItemList user={user} menus={menus} /></div>
    </div>
  );
}