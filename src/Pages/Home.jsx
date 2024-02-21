import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import SummerCollection from './SummerCollection';
import CallToSection from './CallToSection';
import ReactTaps from './ReactTaps';
import OurClient from './OurClient';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerBottom></BannerBottom>
      <SummerCollection></SummerCollection>
      <ReactTaps></ReactTaps>
      <OurClient></OurClient>
      <CallToSection></CallToSection>
    </div>
  );
};

export default Home;