import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BusinessPage from '../BusinessPage/BusinessPage';
import DisplayPage from '../DisplayPage/DisplayPage';
import NavBar from '../../components/NavBar/NavBar';
import BusinessSignUpForm from '../../components/BusinessSignUpForm/BusinessSignUpForm';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getBusiness } from '../../utilities/business-api';
import BusinessContext from '../../utilities/BusinessContext';

export default function App() {
  const [user, setUser] = useState(null);
  const [business, setBusiness] = useState(null)
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
        if (userData.business) {
          const businessList = await getBusiness()
          const userBusiness = businessList.find(business => business._id === userData.business);
          setBusiness(userBusiness)
        }
        } catch (err) {
          
      }
    };
    fetchUser();
  }, []);

  return (
    <main className="App">
      { user ?
          <> 
            <div>User Name: {user.name}</div>
            <div>User ID: {user._id}</div>
            { business && (
              <>
              <div>Business ID: {business._id}</div>
              <div>Business Name: {business.name}</div>
              </>
            )}
            <NavBar user={user} setUser={setUser} />
            { business ?
            <> 
            <Routes>
              {/* Route components in here */}
              <Route path="/items/:itemId" element={<ItemDetail />} ></Route>
              <Route path="/" element={<BusinessPage user={user} setUser={setUser} />} />
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
