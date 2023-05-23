import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useContext } from 'react';
import BusinessContext from '../../utilities/BusinessContext';

import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const { business } = useContext(BusinessContext)

  return (
  <nav>

    <div className="NavBarContainer">

      <div className="NavBarLogo">Modern Menus</div>

      <div className="NavBarLinks">
        {business && (
          <>
            <div>
              <Link to="/">Business Page</Link>
            </div>
            <div>
              <Link to={`/${business._id}`}>Business Details</Link>
            </div>
          </>
        )}
        {/* <div>
          <Link to="/display">Display Page</Link>
        </div> */}
        <div>
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>

      </div>
  </nav>
  );
}