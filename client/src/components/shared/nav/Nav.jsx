import { NavLink, Link, useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import NavBar from './NavStyles';
import { LoggedInUserContext } from '../../../contexts/LoggedInUser';
import { removeToken } from '../../../services/auth';
import colors from '../../../css_assets/colorVars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


export default function Nav() {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);

  const [hover, setHover] = useState(false);

  const history = useHistory();

  const active = {
    borderBottom: `7px solid ${colors.paleGreen}`,
    paddingBottom: "Calc(1em - 7px"
  }

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  }

  

  return (
    <NavBar hover={hover}>
      <div className="nav-left">
        <div className="logo-container">
          <Link to="/" id="logo">PanTree</Link>
        </div>
        {
          loggedInUser ?
            <>
              <div id="username"
                onMouseEnter={() => setHover(!hover)}
                // onMouseLeave={() => setHover(false)}
              >
                <span id="username-top">{loggedInUser.username}</span>
                <FontAwesomeIcon
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={handleLogout}
                  id="sign-out"
                  icon={faSignOutAlt} />
              </div>
            </>
            : <> </>
        }
      </div>
      <div className="nav-right">
        <NavLink
          to="/home"
          className="nav-link"
          id="home-link"
          activeStyle={active}>
            <span>home</span>
        </NavLink>
        <NavLink
          to="/library"
          className="nav-link"
          id="library-link"
          activeStyle={active}>
            <span>library</span>
        </NavLink>
        <NavLink
          to="/pantry"
          className="nav-link"
          id="pantry-link"
          activeStyle={active}>
            <span>pantry</span>
          </NavLink>
      </div>

    </NavBar>
  )
}