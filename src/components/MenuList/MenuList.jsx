import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import MenuForm from '../MenuForm/MenuForm'
import './MenuList.css'

export default function MenuList({ user, business }) {
  const [menu, setMenu] = useState(null)
  
  console.log(business)
  // useEffect(() => {
  //   function getMenu() {
  //     const menus = user.business.menus
  //   }
  //   getMenu()
  // }, [])

  return (
    <div className="MenuList">
      <div>Menu List Area Below</div>
      <div>Menu Form Below</div>
      <div><MenuForm user={user} business={business} /></div>
      {/* <div><ItemList /></div> */}
    </div>
  );
}