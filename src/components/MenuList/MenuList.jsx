import React, { useState, useEffect, useContext } from 'react';
import BusinessContext from '../../utilities/BusinessContext';
import MenuForm from '../MenuForm/MenuForm'
import ItemList from '../../components/ItemList/ItemList'
import MenuDetail from '../../components/MenuDetail/MenuDetail'
import DisplayTemplate from '../DisplayTemplate/DisplayTemplate'
import { getMenus } from '../../utilities/menus-api'
import { useNavigate } from 'react-router-dom';

import './MenuList.css'

export default function MenuList({ user }) {
  const [menus, setMenus] = useState([])
  const { business, setBusiness } = useContext(BusinessContext)

  const navigate = useNavigate();


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
  }, [business])

    return (
      <div  className="MenuListContainer">
      <div><ItemList user={user} menus={menus} /></div>
    </div>
  );
}