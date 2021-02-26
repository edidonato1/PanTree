import HeroStyles from './HeroStyles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const Hero = ({ pageToggle }) => {


  return (
    <HeroStyles>
      <div className="hero-container">
        <div className="hero-dome">
          <Link to="/">
            <h1>PanTree</h1>
          </Link>
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