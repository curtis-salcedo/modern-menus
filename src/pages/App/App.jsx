import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BusinessPage from '../BusinessPage/BusinessPage';
import DisplayPage from '../DisplayPage/DisplayPage';
import NavBar from '../../components/NavBar/NavBar';
import BusinessSignUpForm from '../../components/BusinessSignUpForm/BusinessSignUpForm';
import { getBusiness } from '../../utilities/business-api';

export default function App() {
  const [user, setUser] = useState(null);
  const [business, setBusiness] = useState(null)
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
        if (userData.business !== null) {
          const businessList = await getBusiness()
          const userBusiness = businessList.find(business => business._id === user.business);
          setBusiness(userBusiness)
        }
        } catch (err) {
          
      }
    };
    
    fetchUser();
  }, []);

console.log(business)

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
            {/* { userBusiness ? */}
            <> 
            <Routes>
              {/* Route components in here */}
              <Route path="/business" element={<BusinessPage user={user} setUser={setUser} business={business} setBusiness={setBusiness} />} />
              <Route path="/display" element={<DisplayPage />} />
            </Routes>
            </>
            {/* : */}
            <BusinessSignUpForm user={user} setUser={setUser}/>
            {/* } */}
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
