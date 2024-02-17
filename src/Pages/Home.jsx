import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import SummerCollection from './SummerCollection';
import CallToSection from './CallToSection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <BannerBottom></BannerBottom>
          <SummerCollection></SummerCollection>
          <CallToSection></CallToSection>
        </div>
    );
};

export default Home;