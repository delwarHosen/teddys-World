import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Pages/Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../hooks/useCart';

const NavBar = () => {

    const [cart] = useCart()
    const { user, logOut } = useContext(AuthContext)

    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/productMenu'>Product Menu</Link></li>
        <li><Link to='/order/bear'>Order Teddy</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/secret'>Secret</Link></li>

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="navbar bg-black text-white bg-opacity-90 fixed top-0 z-10 max-w-screen-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <img className='h-20 md:ml-20' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end md:mr-20">

                <Link to='/dashboard/carts'>
                    <button className="btn btn-outline mr-5">
                        <FaShoppingCart className='text-white' />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>


                {
                    user ? <><button onClick={handleLogOut} className='btn btn-outline text-white'>Logout</button></> : <><Link to="/login" className='text-xl font-bold'>Login</Link></>
                }
            </div>
        </div>
    );
};

export default NavBar;