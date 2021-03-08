import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from './NavStyles';
import { LoggedInUserContext } from '../../../contexts/LoggedInUser';


export default function Nav() {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);


  return (
    <NavBar>
      <div className="nav-left">
        <div className="logo-container">
          <Link to="/" id="logo">PanTree</Link>
        </div>
        {loggedInUser ?
          <div id="username">{loggedInUser.username}</div> :
          <> </>}
      </div>
      <div className="nav-right">
      </div>

    </NavBar>
  )
}