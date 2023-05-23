import React, { createContext, useState, useEffect } from 'react';
import { getUser } from './users-service'
import { getBusiness } from './business-api'

const BusinessContext = createContext();

export function BusinessProvider({ children }) {
  const [user, setUser] = useState(null)
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
        if (userData.business) {
          const businessList = await getBusiness()
          const userBusiness = businessList.find(business => business._id === userData.business);
          // console.log(userBusiness)
          setBusiness(userBusiness)
        }
        } catch (err) {
      }
    };
    
    fetchUser();
  }, []);
    


  return (
    <BusinessContext.Provider value={{ business, setBusiness }}>
      {children}
    </BusinessContext.Provider>
);
}

export default BusinessContext;