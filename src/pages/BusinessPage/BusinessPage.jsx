import React, { useState, useContext } from 'react';
import MenuList from '../../components/MenuList/MenuList'
// import MenuForm from '../../components/MenuForm/MenuForm'
import ItemList from '../../components/ItemList/ItemList'
// import ItemForm from '../../components/ItemForm/ItemForm'
import BusinessContext from '../../utilities/BusinessContext';


export default function BusinessPage({ user }) {
  const [menus, setMenus] = useState(null)
  const { business } = useContext(BusinessContext)

  return (
    <>
    <h1>Business Name: {business?.name} Owned by: {user.name}</h1>
    <div> 
      <div>
        <label>Menus</label>
        <div><MenuList user={user} /></div>
        {/* <div><MenuForm user={user} business={business} /></div> */}
        {/* <div><ItemForm user={user} /></div> */}
      </div>
    </div>
    </>
  );
}