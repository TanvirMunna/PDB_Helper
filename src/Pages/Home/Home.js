import React from 'react';
import Advertisement from './Home/Advertisement/Advertisement';
import Banner from './Home/Banner/Banner';
import Categories from './Home/Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Home;