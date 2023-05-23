import React, { useState, useEffect, useContext } from 'react';
import BusinessContext from '../../utilities/BusinessContext';
import ItemList from '../ItemList/ItemList'
import MenuForm from '../MenuForm/MenuForm'
import { getMenus } from '../../utilities/menus-api'
import './MenuList.css'

export default function MenuList({ user }) {
  const [menus, setMenus] = useState([])
  const { business, setBusiness } = useContext(BusinessContext)
  const [ showMenuForm, setShowMenuForm ] = useState(false)


  useEffect(() => {
    const fetchMenus = async () => {
      if (business.menus) {
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



  // async function handleAddItemClose(itemId) {
  //   await setShowMenuContainer(false)
  // }

  return (
    <div  className="MenuListContainer">

      <div>Menu's</div>

      <button className="AddMenuButton" onClick={handleShowMenuForm}>Quick Add Menu</button>
        { showMenuForm && (
          <div className="ShowMenuFormButton"><MenuForm user={user} handleCloseMenuForm={handleCloseMenuForm}  /></div>
        )}

      { menus ?
      <div className="MenuListButtonContainer">

        <button className="MenuListButton">ALL</button>

        {menus.map((m) => (
          <div key={m._id}>
            <button className="MenuListButton">{m.name}</button>
          </div>
          ))}
      </div>

        :

        <div>No Menus Yet</div>

        }

      <div className="ItemListContainer"><ItemList user={user} menus={menus} /></div>
    </div>
  );
}