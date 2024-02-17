import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import SummerCollection from './SummerCollection';
import CallToSection from './CallToSection';
import ReactTaps from './ReactTaps';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerBottom></BannerBottom>
      <SummerCollection></SummerCollection>
      <ReactTaps></ReactTaps>
      <CallToSection></CallToSection>
    </div>
  );
};

export default Home;