import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{
          width: '150px',
          height: '150px',
        }}
      >
        <div>
          <img style={{ paddingTop: '5px' }} src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
