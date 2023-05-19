import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ItemPage from '../ItemPage/ItemPage';
import BusinessPage from '../BusinessPage/BusinessPage';
import DisplayPage from '../DisplayPage/DisplayPage';
import NavBar from '../../components/NavBar/NavBar';
import BusinessSignUpForm from '../../components/BusinessSignUpForm/BusinessSignUpForm';
import { getBusiness } from '../../utilities/business-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [userBusiness, setUserBusiness] = useState(null);

  useEffect(() => {
    const getUserBusiness = async () => {
      const business = await getBusiness();
      const abusiness = business.find(b => b.user === user._id)
      setUserBusiness(abusiness)
    };
    if (user) {
      getUserBusiness();
    }
  }, [])

  return (
    <main className="App">
      { user ?
          <> 
            <NavBar user={user} setUser={setUser} />
            { userBusiness ?
            <> 
            <Routes>
              {/* Route components in here */}
              <Route path="/items/new" element={<ItemPage />} />
              <Route path="/business" element={<BusinessPage user={user} setUser={setUser} />} />
              <Route path="/display" element={<DisplayPage />} />
            </Routes>
            </>
            :
            <BusinessSignUpForm user={user}/>
            }
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
