import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useContext } from 'react';
import BusinessContext from '../../utilities/BusinessContext';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const { business } = useContext(BusinessContext)

  return (
<nav>
      <Link to="/">Business Page</Link>
      &nbsp; | &nbsp;
      {business && (
        <>
          <Link to={`/business/${business._id}`}>Business Details</Link>
          &nbsp; | &nbsp;
        </>
      )}
      <Link to="/display">Display Page</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}