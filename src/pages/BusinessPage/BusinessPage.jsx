import React, { useState, useEffect } from 'react';
import * as businessAPI from '../../utilities/business-api'
import MenuList from '../../components/MenuList/MenuList'
import MenuForm from '../../components/MenuForm/MenuForm'
import ItemList from '../../components/ItemList/ItemList'
import ItemForm from '../../components/ItemForm/ItemForm'


export default function BusinessPage({ user, setUser }) {
  const [business, setBusiness] = useState(null)

  useEffect(function() {
    async function get() {
    const businessData = await businessAPI.getBusiness();
    const business = businessData.find(b => b.user === user._id)
    console.log(business)
    setBusiness(business)
    }
    get();
  }, []);

  return (
    <>
    <h1>Business Name: Owned by: </h1>
    <div> 
      <div>
        <label>Menus</label>
        <div><MenuList /></div>
        <div><MenuForm user={user} business={business} setBusiness={setBusiness} /></div>
      </div>
    </div>
    </>
  );
}