import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
        <div className="AuthContainer">

        <div className="AuthWelcome">Welcome To
        <div className="AuthNavBarLogo">
          <span className="AuthNavBarOne">Modern</span> 
          <span className="AuthNavBarTwo">Menus</span>
        </div>
        </div>
        <div className="SignUp">
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
          }
        </div>
          </div>
    </main>
  );
}