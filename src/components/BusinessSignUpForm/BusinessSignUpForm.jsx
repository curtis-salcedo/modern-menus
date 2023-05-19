import React, { useState } from 'react';
import { createBusiness } from '../../utilities/users-service';

export default function BusinessSignUpForm({user}) {
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
      await createBusiness(formData);
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