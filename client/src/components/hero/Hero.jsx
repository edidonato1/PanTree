import HeroStyles from './HeroStyles';
import { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';




const Hero = (props) => {
  // const history = useHistory();
  // const location = history.location.pathname;
  const [showMessage, setMessage] = useState('');

  const { match, location, history } = props;

  useEffect(() => {
    console.log()
  }, [location, history]);

  let message = '';

  switch (location) {
    case "/":
      message = "keep it fresh."
      break;
    case "/login": 
      message = "log in";
      break;
    case "/register":
      message = "sign up";
      break;
  }

  return (
    <HeroStyles>
      <div className="hero-container">
        <div className="hero-dome">
          <h1>PanTree</h1>
        </div>
        <div id="hero-dome-mask"></div>
        <div className="under-dome">
          <h2>{showMessage}</h2>
        </div>
      </div>
    </HeroStyles>
  )
}

export default withRouter(Hero);