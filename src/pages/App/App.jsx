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
import MenuDetail from '../../components/MenuDetail/MenuDetail';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <> 
            <NavBar user={user} setUser={setUser} />
            { user.business ?
            <> 
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<BusinessPage user={user} />} />
              <Route path="/:id" element={<BusinessDetail user={user} />} />
              <Route path="/display" element={<DisplayPage user={user} />} />
              <Route path="/items/:itemId" element={<ItemDetail />} ></Route>
              <Route path="/menus/:menuId" element={<MenuDetail />} ></Route>
              <Route path="/displays/:displaysId" element={<MenuDetail />} ></Route>
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
