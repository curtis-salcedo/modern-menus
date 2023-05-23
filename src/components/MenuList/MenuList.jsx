import React, { useState, useEffect, useContext } from 'react';
import BusinessContext from '../../utilities/BusinessContext';
import MenuForm from '../MenuForm/MenuForm'
import ItemList from '../../components/ItemList/ItemList'
import MenuDetail from '../../components/MenuDetail/MenuDetail'
import { getMenus } from '../../utilities/menus-api'
import { useNavigate } from 'react-router-dom';

import './MenuList.css'

export default function MenuList({ user }) {
  const [menus, setMenus] = useState([])
  const { business, setBusiness } = useContext(BusinessContext)
  const [ showMenuForm, setShowMenuForm ] = useState(false)
  const [ selectedMenu, setSelectedMenu ] = useState(null)

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

  function handleShowMenuForm() {
    setShowMenuForm(true)
  }

  function handleCloseMenuForm() {
    setShowMenuForm(false)
  }

  // <button className="MenuEditButton" onDoubleClick={() => handleMenuDetail(menu._id)}>Edit</button>
  function handleMenuDetail(menuId) {
    console.log(menuId)
    setSelectedMenu(menuId);
    navigate(`/menus/${menuId}`)
    }


  return (
    <div  className="MenuListContainer">

      {/* <div>Sub-Menu's</div>

      <button className="AddMenuButton" onClick={handleShowMenuForm}>Quick Add Sub-Menu</button>
      
        { showMenuForm && (
          <div className="ShowMenuFormButton"><MenuForm user={user} handleCloseMenuForm={handleCloseMenuForm}  /></div>
        )} */}

      {/* { menus ?
      <div className="MenuListButtonContainer">

        <button className="MenuListButton">ALL</button>

        {menus.map((m) => (
          <div key={m._id}>
            <button className="MenuListButton" onClick={() => handleMenuDetail(m._id)}>{m.name}</button>
          </div>
          ))}
      </div>

        :

        <div>No Menus Yet</div>

        } */}

      <div className="ItemListContainer"><ItemList user={user} menus={menus} /></div>
    </div>
  );
}