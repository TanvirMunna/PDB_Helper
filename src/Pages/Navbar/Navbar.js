import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon/logo.png'
import { AuthContext } from '../../Context/Authprovider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const menulist = <>
        <Link to='/'>Home</Link>
        <Link to='/advertisement'>Advertisement</Link>
        <Link to='/addProduct'>Add Products</Link>
        <Link to='/myOrders'>My Orders</Link>
        {
            user?.uid ?
                <>
                    <Link onClick={handleLogout}>Logout</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </>
                :
                <Link to='/login'>Login</Link>
        }
        <Link to='/admin'>Admin</Link>
    </>


    return (
        <div className="navbar bg-[#a2d2ff] text-[#264653] font-semibold z-50 shadow-xl sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-4 p-2 shadow-xl rounded-md w-52  bg-[#a2d2ff] text-[#264653] font-semibold z-50">
                        <li>{menulist}</li>
                    </ul>
                </div>

                <div>
                    <Link className="btn btn-ghost" to='/'><img className='w-16 h-16' src={logo} alt="Logo" /></Link>
                </div>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>{menulist}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;