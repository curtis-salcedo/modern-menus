import React, { useState } from 'react';
import * as businessAPI from '../../utilities/business-api';
import * as usersAPI from '../../utilities/users-api'
import * as menusAPI from '../../utilities/menus-api'

import './BusinessSignUpForm.css'

export default function BusinessSignUpForm({ user, setUser }) {
  const [formData, setForm] = useState({
    name: "",
    user: user
  })

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm({ ...formData, [name]: value })
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // Establish a business to be created
      const createdBusiness = await businessAPI.createBusiness(formData, user);
      console.log(createdBusiness)

      // Update a user with new created business
      user.business = createdBusiness._id
      const updatedUser = { ...user }
      updatedUser.business = createdBusiness._id  

      // Create default menu
      const menu = await createDefaultMenu(updatedUser, createdBusiness);
      
      // Update current user with same user that has business
      await usersAPI.updateUser(updatedUser)
      await menusAPI.createMenu(menu)
      setUser(updatedUser)
    } catch {
    
    }
  };

  async function createDefaultMenu(user, createdBusiness) {
    const defaultMenu = {
      name: `${createdBusiness.name} Default Menu`,
      category: 'Default',
      items: [],
      business: user.business,
      user: user._id,
    };
    return defaultMenu
  }

  return (
    <div>
      <div className="BusinessFormContainer">

          <div className="BusinessFormUser">
            <p>
              Welcome, {user.name}, please enter your business information to get started!
            </p>
          </div>

          <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="BusinessFormInput">
            <label>Business Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Modern Menus' required />
          </div>
          <div className="BusinessFormButton">
            <button type="submit">Register Business</button>
          </div>
        </form>

      </div>
    </div>
  );
}