import React, { useState, useEffect } from 'react';
import MenuList from '../../components/MenuList/MenuList'
import MenuForm from '../../components/MenuForm/MenuForm'
import ItemList from '../../components/ItemList/ItemList'
import ItemForm from '../../components/ItemForm/ItemForm'


export default function BusinessPage({ user, setUser, business, setBusiness }) {

  console.log(user)
  console.log(business)

  return (
    <>
    <h1>Business Name: {} Owned by: {user.name}</h1>
    <div> 
      <div>
        <label>Menus</label>
        <div><MenuList user={user} business={business} /></div>
        <div><MenuForm user={user} business={business} /></div>
        {/* <div><ItemForm user={user} business={business} /></div> */}
        {/* <div><ItemList user={user} business={business} /></div> */}
      </div>
    </div>
    </>
  );
}