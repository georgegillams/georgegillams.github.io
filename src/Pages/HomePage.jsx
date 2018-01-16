import React from 'react';
import Slider from 'react-slick';
import SubSection from '../components/SubSection';
import GetSocial from '../components/GetSocial';
import PersonalDetailsBanner from './HomePageBanners/PersonalDetailsBanner';
import IcelandBanner from './HomePageBanners/IcelandBanner';
import NetNeutralityBanner from './HomePageBanners/NetNeutralityBanner';
import MunichBanner from './HomePageBanners/MunichBanner';

import STYLES from './pages.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

/* eslint-disable max-len */
const HomePage = () => (
  <main>
    <Slider
      className={getClassName('pages__slider')}
      dots
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay
      autoplaySpeed={10000}
    >
      <div><PersonalDetailsBanner /></div>
      <div><IcelandBanner /></div>
      <div><NetNeutralityBanner /></div>
      <div><MunichBanner /></div>
    </Slider>
    <div style={{ minHeight: '15rem' }} />
  </main>
);

export default HomePage;
