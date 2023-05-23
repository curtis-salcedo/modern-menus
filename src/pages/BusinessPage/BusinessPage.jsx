import React, { useState, useContext } from 'react';
import BusinessContext from '../../utilities/BusinessContext';
import MenuList from '../../components/MenuList/MenuList'
// import MenuForm from '../../components/MenuForm/MenuForm'
import ItemList from '../../components/ItemList/ItemList'
// import ItemForm from '../../components/ItemForm/ItemForm'
import DisplayPage from '../DisplayPage/DisplayPage'

import './BusinessPage.css'


export default function BusinessPage({ user }) {
  const { business, setBusiness } = useContext(BusinessContext)
  const [ showMenuContainer, setShowMenuContainer ] = useState(false)

  // HANDLES TO SHOW AND HIDE MENU LIST CONTAINER
  function handleShowMenuContainer() {
    setShowMenuContainer(true)
    console.log(showMenuContainer)
  }

  function handleHideMenuContainer() {
    setShowMenuContainer(false)
    console.log(showMenuContainer)
  }

  const buttonName = showMenuContainer ? "Collapse Edit Menu" : "Expand Edit Menu";

  return (
    <div className="BusinessPageContainer"> 
      <div>
        <div className="BusinessPageMenuButton">
          { showMenuContainer ? 
            <button onClick={handleHideMenuContainer}>{buttonName}</button>
            :
            <button onClick={handleShowMenuContainer}>{buttonName}</button>
          }
        </div>
      { showMenuContainer && (
        <div>
          <div><MenuList user={user} /></div>
        </div>
      )}
        <div>
          <div><DisplayPage user={user} business={business}/></div>
        </div>
      </div>
    </div>
  );
}