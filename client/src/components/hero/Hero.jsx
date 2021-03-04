import HeroStyles from './HeroStyles';
import { useHistory } from 'react-router-dom';


const Hero = ({ pageToggle, setBarEnter }) => {

  const history = useHistory();

  return (
    <HeroStyles>
      <div className="hero-container">
        <div
          className="hero-dome"
          onClick={() => {
            if (pageToggle !== "keep it fresh.") {
              setBarEnter(false)
              setTimeout((() => { history.push('/'); }),
                pageToggle === 'login' ? 1200 : 2000);
            }
          }}>
          <h1>PanTree</h1>
        </div>
        <div id="hero-dome-mask"></div>
        <div className="under-dome">
          <h2>{pageToggle}</h2>
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero;