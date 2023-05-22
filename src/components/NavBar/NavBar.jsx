import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Business Page</Link>
      &nbsp; | &nbsp;
      {/* <Link to="/menus">Menu Page</Link>
      &nbsp; | &nbsp; */}
      <Link to="/items/new">New Items</Link>
      &nbsp; | &nbsp;
      <Link to="/display">Display Page</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}