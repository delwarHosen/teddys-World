import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const NavBar = () => {
    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/productMenu'>Product Menu</Link></li>
        <li><Link>Home</Link></li>
        
    </>
    return (
    <div className="navbar bg-black text-white bg-opacity-40 fixed top-0 z-10 max-w-screen-2xl">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   {navOption}
                </ul>
            </div>
           <img className='h-20' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navOption}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
);
};

export default NavBar;