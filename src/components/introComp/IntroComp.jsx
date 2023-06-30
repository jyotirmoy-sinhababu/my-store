import React from 'react';

import { AiFillCaretDown } from 'react-icons/ai';

import './introStyle.css';
import background from '../../assest/img/nathan-dumlao-XOhI_kW_TaM-unsplash.jpg';

const IntroComp = () => {
  return (
    <div className='intro-cnt'>
      <div>
        <h1 className='intro-header'>welcome to our store</h1>
        <p className='intro-para'>All your fav in one place</p>
        <p className='intro-loc'>our location is near</p>
        <p className='intro-arrow'>
          <AiFillCaretDown />
        </p>
      </div>
    </div>
  );
};

export default IntroComp;
