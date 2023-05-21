import React, { useState } from 'react';
import * as businessAPI from '../../utilities/business-api';
import * as usersAPI from '../../utilities/users-api'

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

      // Update a user with new created business
      user.business = createdBusiness._id
      const updatedUser = { ...user }
      updatedUser.business = createdBusiness._id
      
      // Update current user with same user that has business
      await usersAPI.updateUser(updatedUser)
      setUser(updatedUser)
    } catch {
    
    }
  };

  return (
    <div>
      <div className="business-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Business</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <button type="submit">Add Business</button>
        </form>
      </div>
    </div>
  );
}