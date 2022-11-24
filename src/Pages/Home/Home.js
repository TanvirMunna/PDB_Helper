import React from 'react';
import Baner from './Home/Banner/Baner';
import Blogs from './Home/Blogs/Blogs';
import Categories from './Home/Categories/Categories';
import Myorders from './Home/Myorders/Myorders';
import MyProducts from './Home/MyProducts/MyProducts';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <MyProducts></MyProducts>
            <Myorders></Myorders>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;