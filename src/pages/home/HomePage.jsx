import React from 'react';

import './homePgStyle.css';
import IntroComp from '../../components/introComp/IntroComp';
import Nav from '../../components/nav/Nav';

const HomePage = () => {
  return (
    <div className='main-div'>
      <div className='home-first'>
        <Nav />
        <IntroComp />
      </div>
    </div>
  );
};

export default HomePage;
