import React from 'react';

import './homePgStyle.css';
import IntroComp from '../../components/introComp/IntroComp';
import Nav from '../../components/nav/Nav';

const HomePage = () => {
  return (
    <div className='main-div'>
      <Nav />
      <IntroComp />
    </div>
  );
};

export default HomePage;
