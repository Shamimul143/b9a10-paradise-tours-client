import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allTouristsSpot'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addTouristsSpot'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList'>My List</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {link}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Paradise <span className="text-[#478bca]">Tours</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/ligin" className="py-1 px-4 rounded-lg text-white bg-[#478bca]">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;