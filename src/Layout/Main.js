import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';
import Navbarsection from '../Pages/Navebar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbarsection></Navbarsection>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;