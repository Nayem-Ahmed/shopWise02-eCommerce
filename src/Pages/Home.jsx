import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import SummerCollection from './SummerCollection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <BannerBottom></BannerBottom>
          <SummerCollection></SummerCollection>
        </div>
    );
};

export default Home;