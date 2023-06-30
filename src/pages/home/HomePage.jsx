import React from 'react';

import './homePgStyle.css';
import IntroComp from '../../components/introComp/IntroComp';
import Nav from '../../components/nav/Nav';
import Food from '../../components/food/Food';

const HomePage = () => {
  return (
    <div className='main-div'>
      <div className='home-first'>
        <Nav />
        <IntroComp />
      </div>
      <Food />
    </div>
  );
};

export default HomePage;
