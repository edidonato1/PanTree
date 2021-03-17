import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from './NavStyles';
import { LoggedInUserContext } from '../../../contexts/LoggedInUser';
import colors from '../../../css_assets/colorVars';


export default function Nav() {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);

  const active = {
    borderBottom: `5px solid ${colors.paleGreen}`,
    padding: "Calc(1em - 5px"
  }

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
      </div>

    </NavBar>
  )
}