import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api'
import * as menusAPI from '../../utilities/menus-api'
import * as businessAPI from '../../utilities/business-api'
import BusinessContext from '../../utilities/BusinessContext';
import ItemList from '../ItemList/ItemList'
import ItemForm from '../ItemForm/ItemForm'

import './BusinessDetail.css'

export default function ItemDetail() {
  const [user, setUser] = useState(getUser())
  const [item, setItem] = useState(null)
  const [businessFormData, setBusinessFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    menu: '',
  })

  const [menus, setMenus] = useState(null)

  const { business, setBusiness } = useContext(BusinessContext)

  const { businessId } = useParams();
  
  useEffect(() => {
    const fetchBusiness = async () => {
      console.log(businessId)
      // Find item based on URL
      const businessData = await businessAPI.index(business._id);
      // Set component item
      setBusiness(businessData)
      // Preset itemFormData with current itemData
      setBusinessFormData(businessData)
      // Find menus
      const menusData = await menusAPI.getMenus()
      const userMenus = menusData.filter((menu) => menu.user === user._id)
      console.log(userMenus)
      setMenus(userMenus)
    }
    fetchBusiness()
  }, [businessId])

  return (
    <div className="BusinessDetailContainer">
      <div className="BusinessDetailTitle">{business.name}</div>
      <div className="BusinessMenusContainer">
        {menus ? 
          menus.map((m) => (
            <div className="BusinessDetailMenuCard" key={m._id}>{m.name}
            <div>{m.category}</div>
            {/* <div><ItemList /></div> */}
            </div>
          ))
        : 
          <div>Loading Menus...</div>
        }
      </div>
      <div><ItemForm user={user} menus={menus} /></div>
    </div>
  );
  
}