import React from 'react';
import Banner from './Banner';
import Info from './Info';
import SecondBanner from './SecondBanner';
import Services from './Services';

const Home = () => {
    return (
        <div className='container mx-auto '>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;