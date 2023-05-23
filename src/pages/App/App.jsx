import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getBusiness, index } from '../../utilities/business-api';

import BusinessContext from '../../utilities/BusinessContext';

import AuthPage from '../AuthPage/AuthPage';
import BusinessPage from '../BusinessPage/BusinessPage';
import BusinessDetail from '../../components/BusinessDetail/BusinessDetail';
import DisplayPage from '../DisplayPage/DisplayPage';
import NavBar from '../../components/NavBar/NavBar';
import BusinessSignUpForm from '../../components/BusinessSignUpForm/BusinessSignUpForm';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <> 
            <div>User Name: {user.name}</div>
            <div>User ID: {user._id}</div>
            {/* { business && (
              <>
              <div>Business ID: {business._id}</div>
              <div>Business Name: {business.name}</div>
              </>
            )} */}
            <NavBar user={user} setUser={setUser} />
            { user.business ?
            <> 
            <Routes>
              {/* Route components in here */}
              <Route path="/items/:itemId" element={<ItemDetail />} ></Route>
              <Route path="/" element={<BusinessPage user={user} />} />
              <Route path="/business/:id" element={<BusinessDetail user={user} />} />
              <Route path="/display" element={<DisplayPage />} />
            </Routes>
            </>
            : 
            <BusinessSignUpForm user={user} setUser={setUser}/>
            }
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
