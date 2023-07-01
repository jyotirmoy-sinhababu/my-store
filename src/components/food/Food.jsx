import React from 'react';

import './foodStyle.css';

import coffee from '../../assest/img/coffee.jpg';
import capachino from '../../assest/img/capachino.jpg';

import { motion } from 'framer-motion';

const Food = () => {
  return (
    <motion.div
      className='foodComp-div'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className='foodComp-para-cnt'>
        <p className='foodComp-para'>All your favourite drinks are here</p>
      </div>
      <div className='foodComp-img-cnt'>
        <img className='foodComp-img' src={coffee} alt='' />
      </div>
      <div className='foodComp-img-cnt'>
        <img className='foodComp-img' src={capachino} alt='' />
      </div>
    </motion.div>
  );
};

export default Food;
