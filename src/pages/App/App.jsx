import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ItemPage from '../ItemPage/ItemPage';
import MenuPage from '../MenuPage/MenuPage';
import DisplayPage from '../DisplayPage/DisplayPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
          <> 
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/items/new" element={<ItemPage />} />
              <Route path="/menus" element={<MenuPage />} />
              <Route path="/display" element={<DisplayPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
