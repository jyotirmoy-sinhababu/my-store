import React, { useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';

import './homePgStyle.css';

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
    if (isActive) {
      setIsActive(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`home-btn ${isActive ? 'btnIsOn' : 'btnIsOff'} `}
    >
      <BsFillCircleFill />
    </button>
  );
};

export default HomePage;
